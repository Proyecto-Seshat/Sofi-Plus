<template>
  <q-page class="column q-ml-md">
    <q-card flat>
      <q-card-section>
        <div :style="{'padding-top': stickyHeight + 'px'}" class="row items-center">
          <span class="titulo-pagina">Comprobante de egreso</span>
          <q-space/>
          <span class="comprobante">Comprobante #123456</span>
        </div>
        <br>
        <presentador>
          <q-input label="Fecha"></q-input>
        </presentador>
        <br>
        <presentador>
          <q-input label="Cantidad"></q-input>
          <q-input label="Suma en letras"></q-input>
          <q-input label="Por concepto de"></q-input>
        </presentador>
        <br>
        <presentador>
          <q-input label="Recibido de"></q-input>
          <q-input label="Nit/CC"></q-input>
        </presentador>
        <br>
        <presentador>
          <q-select label="Cuenta P.U.C. *" :options="[{
            label: 'C x pagar 123456'
          }]" />
          <span v-bind="{label: 'Debito'}">2345</span>
          <span v-bind="{label: 'Credito'}">1234</span>
        </presentador>
        <br>
        <presentador>
          <helpable-btn help-key="egreso:elaborado">
            <q-input label="Elaborado por">
              <template v-slot:append>
                <q-icon name="info">
                  <q-tooltip class="text-body2">
                    Producto a vender
                  </q-tooltip>
                </q-icon>
              </template>
            </q-input>
          </helpable-btn>
          <q-input label="Aprobado por"></q-input>
        </presentador>
        <br>
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
              label: 'Guardar',
              fn: ()=>{
                $q.notify('Sirve');
              }
            }
            ]"/>
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
  </q-page>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import Presentador from "components/Presentador.vue";
import ButtonGroup from "components/ButtonGroup.vue";
import ModalCancelar from "components/ModalCancelar.vue";
import HelpableBtn from "components/Helpables/HelpableBtn.vue";

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
