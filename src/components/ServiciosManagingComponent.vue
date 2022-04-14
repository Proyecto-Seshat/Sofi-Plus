<template>
  <entity-managing-component :data="array" :entity-schema="serviciosSchema" entity="servicio" :store="store"/>
</template>

<script lang="ts" setup>
import {ResponsiveTableSchemaField} from "src/api/interfaces/ResponsiveTableInterfaces";
import {reactive} from "vue";
import EntityManagingComponent from "components/EntityManagingComponent.vue";
import {useServiciosStore} from "src/store/Servicios/serviciosStore";
import {storeToRefs} from "pinia";
import {SchemaFieldType} from "src/api/enums/SchemaFieldType";

const serviciosSchema: ResponsiveTableSchemaField[] = [
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

const store = useServiciosStore();

const { array } = storeToRefs(store);

</script>

<style lang="scss" scoped>

</style>
