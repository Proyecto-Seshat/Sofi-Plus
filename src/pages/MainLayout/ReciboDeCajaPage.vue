<template>
  <q-page class="column q-ml-md">
    <q-card flat>
      <q-card-section>
        <div :style="{'padding-top': stickyHeight + 'px'}" class="row items-center">
          <span class="titulo-pagina">Recibo de caja</span>
          <q-space/>
          <span class="comprobante">Comprobante #123456</span>
        </div>
        <br>
        <presentador>
          <q-input label="Fecha" v-model="fecha">
            <template v-slot:append>
              <q-icon class="cursor-pointer" name="event">
                <q-popup-proxy ref="qDateProxy" cover transition-hide="scale" transition-show="scale">
                  <q-date v-model="fecha" mask="DD/MM/YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup color="primary" flat label="Close"/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Suma de dinero"></q-input>
          <q-input label="Suma en letras"></q-input>
          <q-input label="Descripción/Anotaciones"></q-input>
        </presentador>
        <br>
        <presentador>
          <q-input label="Recibido de"></q-input>
          <q-input label="Nit/CC"></q-input>
        </presentador>
        <br>
        <presentador>
          <helpable-input help-key="recibo:factura">
            <span v-bind="{label: '# Factura'}">001</span>
          </helpable-input>
          <span v-bind="{label: 'Debito'}">1234</span>
          <span v-bind="{label: 'Credito'}">123</span>
        </presentador>
        <br>
        <button-group :btns="[
            {
              label: 'Cancelar',
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
import HelpableInput from "components/Helpables/HelpableInput.vue";

const step = ref(1);
const date = ref("");
const descuento = ref(0);
const modal = ref(false);
const stickyHeight = ref(0);

const fecha = ref(new Date().toLocaleDateString("es-ES"));

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
