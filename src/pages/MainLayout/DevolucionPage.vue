<template>
  <q-page class="column q-ml-md">
    <q-card flat>
      <q-card-section>
        <div class="row items-center" :style="{'padding-top': stickyHeight + 'px'}">
          <span class="titulo-pagina">Devolución</span>
          <q-space/>
          <span class="comprobante">Comprobante #123456</span>
        </div>
        <br>
        <presentador>
          <q-input label="Producto" @click="modal=true">
            <template v-slot:append>
              <q-icon name="info">
                <q-tooltip class="text-body2">
                  Producto a vender
                </q-tooltip>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Cantidad" placeholder="Ingrese cantidad"></q-input>
          <q-input label="Descuento" placeholder="Ingrese descuento"></q-input>
          <template #action>
            <q-btn class="advance-btn" label="Añadir producto"/>
          </template>
        </presentador>
        <br>
        <responsive-table :data="rows" :schema="esquema" title="Items" :actions="[
          {icon: 'cancel', onClick: (item, itemIndex)=>{
            rows.splice(itemIndex, 1)
          }, class: 'revert-btn'}
        ]">
          <q-btn class="revert-btn" icon="cancel" round/>
        </responsive-table>
        <br>
        <div v-intersection="onTotalOculto" class="col-auto row items-end justify-end relative-position">
          <q-resize-observer v-if="$q.platform.is.mobile" @resize="({height})=>{stickyHeight = height}" />
          <span class="col-auto q-pa-sm item-bordered shadow-2 total"><b>Total devolución: $49000</b></span>
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
        <q-dialog v-model="modal">
          <q-card>
            <q-card-section>
              <q-input class="col" label="Nombre"/>
              <q-input class="col" label="Codigo"/>
              <q-btn label="Seleccinar"/>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-card-section>
    </q-card>
    <q-page-sticky v-if="!totalVisible" expand position="top">
      <span class="shadow-2 total bg-white full-width text-center"><b>Total: $49000</b></span>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import Presentador from "components/Presentador.vue";
import ButtonGroup from "components/ButtonGroup.vue";
import ResponsiveTable from "components/ResponsiveTable.vue";
import ModalCancelar from "components/ModalCancelar.vue";

const step = ref(1);
const date = ref("");
const descuento = ref(0);
const modal = ref(false);
const stickyHeight = ref(0);

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

const rows = reactive([
  {
    item: 'Caja de galletas la rosa',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Bon ice extremo',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Jabon de tierra',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Coca cola zero',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  },
  {
    item: 'Papas margarita',
    codigo: "3456465785",
    precio: 3400,
    descuento: 0,
    impuesto: 19,
    cantidad: 4,
    total: 12300
  }

]);

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
]

const totalVisible = ref(true);

function onTotalOculto(entry: any) {
  totalVisible.value = entry.isIntersecting;
}
</script>
<style scoped lang="scss">
.total {
  font-size: 3vh;
}
.titulo-pagina{
  font-size: 4vh;
}
.comprobante{
  font-size: 2.5vh;
  font-weight: bold;
  border: 2px solid #1D1D1D;
  padding: 5px;
}
</style>
