<template>
  <entity-managing-component :data="articulosData" :entity-schema="articulosSchema" entity="articulo"/>
</template>

<script lang="ts" setup>
import {ResponsiveTableSchemaField, SchemaFieldType} from "src/api/interfaces/ResponsiveTableInterfaces";
import {reactive} from "vue";
import EntityManagingComponent from "components/EntityManagingComponent.vue";

const articulosSchema: ResponsiveTableSchemaField[] = [
  {
    field: "codigo",
    label: "Codigo",
    type: SchemaFieldType.NUMBER
  },
  {
    field: "descripcion",
    label: "Descripcion",
    responsive: true,
    type: SchemaFieldType.STRING
  },
  {
    field: "costo",
    label: "Costo",
    responsive: true,
    type: SchemaFieldType.NUMBER
  },
  {
    field: "precioVenta",
    label: "Precio de venta",
    responsive: true,
    type: SchemaFieldType.NUMBER
  }
];
const articulosData = reactive([
  {
    codigo: "123456",
    descripcion: "PC",
    costo: "123456",
    precioVenta: "123456"
  }
]);
</script>

<style lang="scss" scoped>

</style>
