<template>
  <q-page class="column q-ml-md">
    <q-card flat>
      <q-card-section>
        <div :style="{'padding-top': stickyHeight + 'px'}" class="row items-center">
          <span class="titulo-pagina">Factura de venta</span>
          <q-space/>
          <span class="comprobante">Comprobante #123456</span>
        </div>
        <br>
        <presentador>
          <helpable-input help-key="">
            <q-input v-model="selectedItem.descripcion" label="Item" readonly @click="selectItem"/>
          </helpable-input>
          <helpable-input help-key="factura:cantidad">
            <q-input ref="cantidadHTML" v-model.number="cantidad" label="Cantidad" placeholder="Ingrese cantidad"
                     type="number">
              <template v-slot:append>
                <q-select v-model="cantidadUnidad" :options="cantidadOptions" emit-value map-options/>
              </template>
            </q-input>
          </helpable-input>
          <q-input v-model="descuento" label="Descuento" placeholder="Ingrese descuento">
            <template v-slot:append>
              <q-select v-model="descuentoType" :options="['%', '$']"/>
            </template>
          </q-input>
          <template #action>
            <q-btn class="advance-btn" label="Agregar item" @click="sell"/>
          </template>
        </presentador>
        <br>
        <responsive-table :actions="[
          {icon: 'delete', onClick: (item, itemIndex)=>{
            items.splice(itemIndex, 1)
          }, class: 'revert-btn'}
        ]" :data="newFactura.detalles" :schema="esquema" title="Items">
        </responsive-table>
        <br>
        <div v-intersection="onTotalOculto" class="col-auto row items-end justify-end relative-position">
          <q-resize-observer v-if="$q.platform.is.mobile" @resize="({height})=>{stickyHeight = height}"/>
          <span
            class="col-auto q-pa-sm item-bordered shadow-2 total"><b>Total factura: ${{ presentCurrency(total) }}</b></span>
        </div>
        <br>
        <presentador>
          <q-input v-model="newFactura.fecha" label="Fecha">
            <template v-slot:append>
              <q-icon class="cursor-pointer" name="event">
                <q-popup-proxy ref="qDateProxy" cover transition-hide="scale" transition-show="scale">
                  <q-date v-model="newFactura.fecha" mask="DD/MM/YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup color="primary" flat label="Close"/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input v-model="newFactura.fechaVencimiento" label="Fecha Vencimiento">
            <template v-slot:append>
              <q-icon class="cursor-pointer" name="event">
                <q-popup-proxy ref="qDateProxy" cover transition-hide="scale" transition-show="scale">
                  <q-date v-model="newFactura.fechaVencimiento" mask="DD/MM/YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup color="primary" flat label="Close"/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </presentador>
        <br>
        <presentador>
          <q-input label="Nit/CC" v-model="newFactura.clienteID"></q-input>
          <q-input label="Nombre" v-model="nombre"></q-input>
          <q-select label="Tipo Pago" v-model="newFactura.tipoPago" :options="['Efectivo', 'Credito']"></q-select>
        </presentador>
        <q-card-section>
          <button-group :btns="[
            {
              label: 'Cancelar',
              fn: ()=>{
                $q.dialog({
                component: ModalCancelar,
                componentProps: {
                  mensaje: '¿Seguro que quieres cancelar?'
                }
                }).onOk(payload => {x
                  $q.notify('Factura cancelada');
                  resetData();

                }).onCancel(() => {
                  $q.notify('Cancelado');
                });
              },
              class: 'revert-btn',
              weight: 4
            },
            {
              label: 'Documento para impresión',
              fn: printFactura
            },
            {
              label: 'Guardar',
              fn: saveFactura,
              weight: 5
            }
            ]"/>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-page-sticky v-if="!totalVisible" expand position="top">
      <span
        class="shadow-2 total bg-white full-width text-center"><b>Total factura: ${{ presentCurrency(total) }}</b></span>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, Ref, ref} from 'vue';
import ModalCancelar from "components/ModalCancelar.vue";
import Presentador from "components/Presentador.vue";
import ButtonGroup from "components/ButtonGroup.vue";
import ResponsiveTable from "components/ResponsiveTable.vue";
import HelpableInput from "components/Helpables/HelpableInput.vue";
import ItemsModalSelector from "components/Items/ItemsModalSelector.vue";
import {useItemsStore} from "src/store/Items/itemsStore";
import {QInput, useQuasar} from "quasar";
import {MeasureEngine} from "src/api/Items/MeasureEngine";
import {presentCurrency} from "src/api/utils/CurrencyFormat";
import {ResponsiveTableSchemaField} from "src/api/interfaces/ResponsiveTableInterfaces";
import {SchemaFieldType} from "src/api/enums/SchemaFieldType";
import {ItemEntity} from "src/entities/ItemEntity";
import {FacturaEntity} from "src/entities/FacturaEntity";

const $q = useQuasar();
const date = ref("");
const stickyHeight = ref(0);
const cantidadHTML: Ref<QInput | null> = ref(null)
onMounted(() => {
});
const itemStore = useItemsStore();

const newFactura: Ref<FacturaEntity> = ref(new FacturaEntity({}));

const cantidadOptions = ref([{
  label: "",
  value: ""
}]);

const cantidadUnidad = ref('');

const columns = [
  {
    name: 'item',
    required: true,
    label: 'Item',
    align: 'left',
    field: 'item',
  },
  {name: 'codigo', align: 'center', label: 'Codigo', field: 'codigo', sortable: true},
  {name: 'precio', label: 'Precio', field: 'precio', sortable: true},
  {name: 'descuento', label: 'Descuento', field: 'descuento'},
  {name: 'impuesto', label: 'Impuesto', field: 'impuesto'},
  {name: 'cantidad', label: 'Cantidad', field: 'cantidad'},
  {name: 'total', label: 'Total', field: 'total'}
]
let items = reactive<ItemFactura[]>([]);
const esquema: ResponsiveTableSchemaField[] = [
  {
    field: "item",
    label: "Item",
    type: SchemaFieldType.STRING
  },
  {
    field: "codigo",
    label: "Codigo",
    type: SchemaFieldType.NUMBER
  },
  {
    field: "precio",
    label: "Precio",
    responsive: true,
    type: SchemaFieldType.NUMBER,
    formatter: presentCurrency,
    prefix: "$"
  },
  {
    field: "descuento",
    label: "Descuento",
    type: SchemaFieldType.NUMBER
  },
  {
    field: "impuesto",
    label: "Impuesto",
    type: SchemaFieldType.NUMBER
  },
  {
    field: "cantidad",
    label: "Cantidad",
    responsive: true,
    type: SchemaFieldType.NUMBER,
    formatter: presentCurrency
  },
  {
    field: "total",
    label: "Total",
    type: SchemaFieldType.NUMBER,
    formatter: presentCurrency,
    prefix: "$"
  }
];
const selectedItem = ref<ItemEntity>(new ItemEntity({}));

function selectItem() {
  $q.dialog({
    component: ItemsModalSelector,
  }).onOk((articulo: ItemEntity) => {
    selectedItem.value = articulo;
    cantidadOptions.value = Object.entries(MeasureEngine.instance().getUnits(selectedItem.value.dimension)).map((value) => {
      return {label: value[1].symbol, value: value[0]};
    });
    const baseUnit = MeasureEngine.instance().dimensions[selectedItem.value.dimension].baseUnit;
    cantidadUnidad.value = MeasureEngine.instance().getUnits(selectedItem.value.dimension)[baseUnit].symbol;
    setTimeout(() => {
      cantidadHTML.value!.focus();
      cantidadHTML.value!.select();
    }, 100)
  });
}

const cantidad = ref(0);
const descuento = ref(0);
const descuentoType = ref('%');

function sell() {
  let descuentoLocal = '0%';
  let total = selectedItem.value.precioVenta * cantidad.value;
  if (descuento.value !== 0) {
    if (descuentoType.value === '%') {
      total -= total * (descuento.value / 100);
      descuentoLocal = `${descuento.value}%`
    } else {
      total -= descuento.value;
      descuentoLocal = `$${descuento.value}`
    }
  }
  items.push({
    codigo: selectedItem.value.codigo,
    item: selectedItem.value.descripcion,
    impuesto: selectedItem.value.impuesto,
    precio: selectedItem.value.precioVenta,
    descuento: descuentoLocal,
    cantidad: cantidad.value,
    total: total
  });
  selectedItem.value = {
    descripcion: "",
    codigo: "",
    cantidad: 0,
    dimension: "",
    unidadPreferida: "",
    costeTotal: 0,
    costeUnitario: 0,
    fechaIngreso: "",
    impuesto: 0,
    precioVenta: 0
  };
  cantidad.value = 0;
  descuento.value = 0;
}

const total = computed(() => {
  let totalLocal = 0;
  items.forEach((row) => {
    totalLocal += row.total;
  });
  return totalLocal;
})

const totalVisible = ref(true);

function onTotalOculto(entry: any) {
  totalVisible.value = entry.isIntersecting;
}

const nombre: Ref<string> = ref('');

function resetData() {
  newFactura.value = new FacturaEntity({});
  selectedItem.value = {
    descripcion: "",
    codigo: "",
    cantidad: 0,
    dimension: "",
    unidadPreferida: "",
    costeTotal: 0,
    costeUnitario: 0,
    fechaIngreso: "",
    impuesto: 0,
    precioVenta: 0
  };
  cantidad.value = 0;
  descuento.value = 0;
  nombre.value = '';
}

function printFactura(){

}

function saveFactura(){
  newFactura.value.total = total.value;
  console.log(newFactura);
}

</script>
<style lang="scss" scoped>
.total {
  font-size: 3vh;
}

.titulo-pagina {
  font-size: 4vh;
}

.comprobante {
  font-size: 2.5vh;
  font-weight: bold;
  border: 2px solid #1D1D1D;
  padding: 5px;
}
</style>
