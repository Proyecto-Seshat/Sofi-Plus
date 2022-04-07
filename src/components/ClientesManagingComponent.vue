<template>
  <entity-managing-component :data="clienteData" :entity-schema="clientesSchema" entity="cliente"/>
</template>

<script lang="ts" setup>
import {ResponsiveTableSchemaField, SchemaFieldType} from "src/api/interfaces/ResponsiveTableInterfaces";
import {reactive} from "vue";
import EntityManagingComponent from "components/EntityManagingComponent.vue";

const clientesSchema: ResponsiveTableSchemaField[] = [
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
const clienteData = reactive([
  {
    nombre: "César Bustacara",
    nit: "1122408617",
    tipo: "Persona",
    telefono: "314502365",
    observaciones: "Apasionado por los Xbox"
  }
]);
</script>

<style lang="scss" scoped>

</style>
