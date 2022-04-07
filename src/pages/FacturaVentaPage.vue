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
            <q-input v-model="selectedArticulo.descripcion" label="Producto" readonly @click="selectArticulo"/>
          </helpable-input>
          <helpable-input help-key="factura:cantidad">
            <q-input ref="cantidadHTML" v-model.number="cantidad" label="Cantidad" placeholder="Ingrese cantidad"
                     type="number"></q-input>
          </helpable-input>
          <q-input v-model="descuento" label="Descuento" placeholder="Ingrese descuento">
            <template v-slot:append>
              <q-select v-model="descuentoType" :options="['%', '$']"/>
            </template>
          </q-input>
          <template #action>
            <q-btn class="advance-btn" label="Añadir producto" @click="sell"/>
          </template>
        </presentador>
        <br>
        <responsive-table :actions="[
          {icon: 'delete', onClick: (item, itemIndex)=>{
            rows.splice(itemIndex, 1)
          }, class: 'revert-btn'}
        ]" :data="rows" :schema="esquema" title="Items">
        </responsive-table>
        <br>
        <div v-intersection="onTotalOculto" class="col-auto row items-end justify-end relative-position">
          <q-resize-observer v-if="$q.platform.is.mobile" @resize="({height})=>{stickyHeight = height}"/>
          <span class="col-auto q-pa-sm item-bordered shadow-2 total"><b>Total: ${{total}}</b></span>
        </div>
        <br>
        <presentador>
          <q-input v-model="date" :rules="['date']" label="Fecha" mask="date">
            <template v-slot:append>
              <q-icon class="cursor-pointer" name="event">
                <q-popup-proxy ref="qDateProxy" cover transition-hide="scale" transition-show="scale">
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup color="primary" flat label="Close"/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input v-model="date" :rules="['date']" label="Fecha Vencimiento" mask="date">
            <template v-slot:append>
              <q-icon class="cursor-pointer" name="event">
                <q-popup-proxy ref="qDateProxy" cover transition-hide="scale" transition-show="scale">
                  <q-date v-model="date">
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
          <q-input label="Nit/CC"></q-input>
          <q-input label="Nombre"></q-input>
          <q-input label="Tipo Pago"></q-input>
        </presentador>
        <q-card-section>
          <button-group :btns="[
            {
              label: 'Anular',
              fn: ()=>{
                $q.dialog({
                component: ModalCancelar,
                componentProps: {
                  mensaje: '¿Seguro que quieres anular?'
                }
                }).onOk(payload => {
                  $q.notify('Anulado');
                }).onCancel(() => {
                  $q.notify('Cancelado')
                })
              },
              class: 'revert-btn'
            },
            {
              label: 'PDF',
              fn: ()=>{
                $q.notify('Sirve');
              }
            },
            {
              label: 'Guardar',
              fn: ()=>{
                $q.notify('Sirve');
              }
            }
            ]"/>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-page-sticky v-if="!totalVisible" expand position="top">
      <span class="shadow-2 total bg-white full-width text-center"><b>Total: ${{total}}</b></span>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, Ref, ref} from 'vue';
import Presentador from "components/Presentador.vue";
import ButtonGroup from "components/ButtonGroup.vue";
import ResponsiveTable from "components/ResponsiveTable.vue";
import HelpableInput from "components/Helpables/HelpableInput.vue";
import ArticulosModalSelector from "components/Articulos/ArticulosModalSelector.vue";
import {Articulo} from "src/store/Articulos/articulosStore";
import {QInput, useQuasar} from "quasar";

interface ItemFactura {
  item: string
  codigo: number
  precio: number
  descuento: string
  impuesto: number,
  cantidad: number,
  total: number
}

const $q = useQuasar();
const date = ref("");
const stickyHeight = ref(0);
const cantidadHTML: Ref<QInput | null> = ref(null)
onMounted(() => {
});
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
const rows = reactive<ItemFactura[]>([]);
const esquema = [
  {
    field: "item",
    label: "Item"
  },
  {
    field: "codigo",
    label: "Codigo"
  },
  {
    field: "precio",
    label: "Precio",
    responsive: true
  },
  {
    field: "descuento",
    label: "Descuento"
  },
  {
    field: "impuesto",
    label: "Impuesto"
  },
  {
    field: "cantidad",
    label: "Cantidad",
    responsive: true
  },
  {
    field: "total",
    label: "Total"
  }
];
const selectedArticulo = ref<Articulo>({
  descripcion: "",
  codigo: 0,
  cantidad: 0,
  costeTotal: 0,
  costeUnitario: 0,
  fechaIngreso: "",
  impuesto: 0,
  precioVenta: 0
});

function selectArticulo() {
  $q.dialog({
    component: ArticulosModalSelector,
  }).onOk((articulo: Articulo) => {
    selectedArticulo.value = articulo;
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
  let total = selectedArticulo.value.precioVenta * cantidad.value;
  if (descuento.value !== 0) {
    if (descuentoType.value === '%') {
      total -= total * (descuento.value / 100);
      descuentoLocal = `${descuento.value}%`
    } else {
      total -= descuento.value;
      descuentoLocal = `$${descuento.value}`
    }
  }
  rows.push({
    codigo: selectedArticulo.value.codigo,
    item: selectedArticulo.value.descripcion,
    impuesto: selectedArticulo.value.impuesto,
    precio: selectedArticulo.value.precioVenta,
    descuento: descuentoLocal,
    cantidad: cantidad.value,
    total: total
  });
  selectedArticulo.value = {
    descripcion: "",
    codigo: 0,
    cantidad: 0,
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
  rows.forEach((row) => {
    totalLocal += row.total;
  });
  return totalLocal;
})

const totalVisible = ref(true);

function onTotalOculto(entry: any) {
  totalVisible.value = entry.isIntersecting;
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
