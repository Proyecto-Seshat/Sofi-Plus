<template>
  <entity-managing-component :entity-schema="proveedoresSchema" :data="proveedoresData" entity="proveedor"/>
</template>

<script lang="ts" setup>
import {ResponsiveTableSchemaField} from "src/api/interfaces/ResponsiveTableInterfaces";
import {reactive} from "vue";
import EntityManagingComponent from "components/EntityManagingComponent.vue";
import {SchemaFieldType} from "src/api/enums/SchemaFieldType";

const proveedoresSchema: ResponsiveTableSchemaField[] = [
  {
    field: "nombre",
    label: "Nombre",
    type: SchemaFieldType.STRING
  },
  {
    field: "nit",
    label: "Nit/CC",
    responsive: true,
    type: SchemaFieldType.STRING
  },
  {
    field: "tipo",
    label: "Tipo",
    responsive: true,
    type: SchemaFieldType.STRING
  },
  {
    field: "telefono",
    label: "Telefono",
    responsive: true,
    type: SchemaFieldType.STRING
  },
  {
    field: "observaciones",
    label: "Observaciones",
    responsive: true,
    type: SchemaFieldType.STRING
  }
];
const proveedoresData = reactive([
  {
    nombre: "Pollos la clarita",
    nit: "1122408617",
    tipo: "Empresa",
    telefono: "314502365",
    observaciones: "La polleria de al lado"
  }
]);
</script>

<style lang="scss" scoped>

</style>
