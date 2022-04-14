<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card>
      <q-card-section>
        <q-item>
          <q-item-section>
            <q-input v-model="filter" autofocus class="col" label="Nombre o codigo" @update:model-value="search"/>
          </q-item-section>
          <q-item-section side>
            <q-btn icon="search" round @click="search"/>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section>
        <q-virtual-scroll
          :items="searchData"
          style="max-height: 30vh; min-height: 10vh;"
          type="table"
        >
          <template v-slot:before>
            <thead class="thead-sticky text-left">
            <tr>
              <th>Codigo</th>
              <th>Descripción</th>
            </tr>
            </thead>
          </template>

          <template v-slot="{ item, index }">
            <tr :key="index" @click="select(item)">
              <td>{{ item.codigo }}</td>
              <td>{{ item.descripcion }}</td>
            </tr>
          </template>
        </q-virtual-scroll>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import {Item, useItemsStore} from "src/store/Items/itemsStore";
import {ItemsFindComposeStrategy} from "src/store/Items/ItemsFindComposeStrategy";
import {useDialogPluginComponent} from 'quasar';

const props = defineProps();
defineEmits([
  ...useDialogPluginComponent.emits
]);
const {onDialogOK, onDialogHide, onDialogCancel, dialogRef} = useDialogPluginComponent();

const itemsStore = useItemsStore();
let searchData = ref<Item[]>([]);
const filter = ref("");
const searcher = new ItemsFindComposeStrategy(filter);

function search() {
  searchData.value = itemsStore.find(searcher);
}

function select(articulo: Item) {
  onDialogOK(articulo);
}
</script>

<style lang="sass" scoped>
.thead-sticky tr > *,
.tfoot-sticky tr > *
  position: sticky
  opacity: 1
  z-index: 1
  background: $javeriana
  color: white

.thead-sticky tr:last-child > *
  top: 0

.tfoot-sticky tr:first-child > *
  bottom: 0
</style>
