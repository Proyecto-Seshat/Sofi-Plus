<template>
  <div class="column justify-start q-gutter-y-sm">
    <responsive-table :actions="[
      {icon: 'edit_note', onClick: editAction, class: 'advance-btn'},
      {icon: 'delete', onClick: deleteAction, class: 'revert-btn'}
    ]" :data="data" :schema="entitySchema">
    </responsive-table>
    <presentador v-if="newFlag || editFlag !== -1">
      <template v-for="(field, fieldIndex) in entitySchema">
        <q-input v-if="field.type === SchemaFieldType.STRING" v-model="holders[fieldIndex]" :label="field.label"
                 type="text"/>
        <q-input v-else-if="field.type === SchemaFieldType.NUMBER" v-model="holders[fieldIndex]" :label="field.label"
                 type="number"/>
        <q-input v-else-if="field.type === SchemaFieldType.DATE" v-model="holders[fieldIndex]" :label="field.label">
          <template v-slot:append>
            <q-icon class="cursor-pointer" name="event">
              <q-popup-proxy ref="qDateProxy" cover transition-hide="scale" transition-show="scale">
                <q-date v-model="holders[fieldIndex]" mask="DD/MM/YYYY">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup color="primary" flat label="Close"/>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </template>
    </presentador>
    <helpable-btn v-if="!newFlag && editFlag===-1" help-key="terceros">
      <q-btn :label="`Agregar ${entity}`" class="advance-btn" @click="addAction"/>
    </helpable-btn>
    <div v-else-if="newFlag" class="row q-gutter-x-sm">
      <q-btn class="col revert-btn" label="Cancelar" @click="cancelAction"/>
      <helpable-btn help-key="nit/cc">
        <q-btn :label="`Guardar ${entity}`" class="col advance-btn text-no-wrap" @click="saveAction"/>
      </helpable-btn>
    </div>
    <div v-else-if="editFlag!==-1" class="row q-gutter-x-sm">
      <q-btn class="col revert-btn" label="Cancelar" @click="cancelAction"/>
      <q-btn :label="`Editar ${entity}`" class="col advance-btn text-no-wrap" @click="editSaveAction"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, reactive, ref} from "vue";
import Presentador from "components/Presentador.vue";
import ResponsiveTable from "components/ResponsiveTable.vue";
import {useQuasar} from "quasar";
import ModalCancelar from "components/ModalCancelar.vue";
import {EntityFieldSchema} from "src/api/interfaces/EntityInterfaces";
import {StandardFactory} from "src/store/Factory/StoreFactory";
import {SchemaFieldType} from "src/api/interfaces/ResponsiveTableInterfaces";
import HelpableBtn from "components/Helpables/HelpableBtn.vue";

const $q = useQuasar();

const props = defineProps<{
  entity: string,
  entitySchema: EntityFieldSchema[],
  data: any[],
  store: StandardFactory<any>
}>();

function resetField(field: EntityFieldSchema) {
  switch (field.type) {
    case SchemaFieldType.NUMBER:
      if (field.field === 'codigo') {
        return props.store.generatedCode;
      } else {
        return 0;
      }
    case SchemaFieldType.STRING:
      return "";
    case SchemaFieldType.DATE:
      return new Date().toLocaleDateString("es-ES");
  }
}

const holders = reactive(props.entitySchema.map(field => {
  return resetField(field);
}));

const newFlag = ref(false);
const editFlag = ref(-1);

function addAction() {
  newFlag.value = true;
}

function cancelAction() {
  $q.dialog({
    component: ModalCancelar,
    componentProps: {
      mensaje: '¿Seguro que quieres cancelar?'
    }
  }).onOk(payload => {
    newFlag.value = false;
    editFlag.value = -1;
  })
}

function saveAction() {
  let newEntity: { [key: string]: string } = {};
  props.entitySchema.forEach((field, fieldIndex) => {
    newEntity[field.field] = holders[fieldIndex] as string;
  });
  props.store.add(newEntity);
  for (let i = 0; i < holders.length; i++) {
    holders[i] = resetField(props.entitySchema[i]);
  }
  newFlag.value = false;
}

function editAction(item: any, itemIndex: number) {
  props.entitySchema.forEach((field, fieldIndex) => {
    holders[fieldIndex] = item[field.field];
  });
  editFlag.value = itemIndex;
}

function editSaveAction() {
  try {
    props.entitySchema.forEach((field, fieldIndex) => {
      props.data[editFlag.value][field.field] = holders[fieldIndex];
    });
    editFlag.value = -1;
  } catch (e) {
    console.log(e);
  }
}

function deleteAction(item: any, itemIndex: number) {
  props.store.remove(item);
}

</script>

<style lang="scss" scoped>

</style>
