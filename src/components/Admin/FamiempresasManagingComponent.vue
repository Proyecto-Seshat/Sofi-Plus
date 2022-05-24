<template>
  <entity-managing-component :data="array" :entity-schema="activosSchema" entity="famiempresa" :store="store"/>
</template>

<script lang="ts" setup>
import EntityManagingComponent from "components/EntityManagingComponent.vue";
import {useItemsStore} from "src/store/Items/itemsStore";
import {storeToRefs} from "pinia";
import {EntityFieldSchema} from "src/api/interfaces/EntityInterfaces";
import {MeasureEngine} from "src/api/Items/MeasureEngine";
import {SchemaFieldType} from "src/api/enums/SchemaFieldType";
import RecursoModalSelector from "components/Recursos/RecursoModalSelector.vue";
import {useInsumosStore} from "src/store/Insumos/insumosStore";
import {useActivosStore} from "src/store/Activos/ActivosStore";
import {useFamiempresasStore} from "src/store/Admin/famiempresasStore";

const activosSchema: EntityFieldSchema[] = [
  {
    field: "nit",
    label: "Nit Famiempresa",
    responsive: true,
    type: SchemaFieldType.STRING
  },
  {
    field: "razonSocial",
    label: "Razón social",
    responsive: true,
    type: SchemaFieldType.STRING
  }
];

const store = useFamiempresasStore();

const {array} = storeToRefs(store);

</script>

<style lang="scss" scoped>

</style>
