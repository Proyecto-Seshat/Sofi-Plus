<template>
  <entity-managing-component :data="array" :entity-schema="articulosSchema" entity="articulo" :store="store"/>
</template>

<script lang="ts" setup>
import {ResponsiveTableSchemaField, SchemaFieldType} from "src/api/interfaces/ResponsiveTableInterfaces";
import {reactive} from "vue";
import EntityManagingComponent from "components/EntityManagingComponent.vue";
import {useArticulosStore} from "src/store/Articulos/articulosStore";
import {storeToRefs} from "pinia";

const articulosSchema: ResponsiveTableSchemaField[] = [
  {
    field: "descripcion",
    label: "Descripcion",
    responsive: true,
    type: SchemaFieldType.STRING
  },
  {
    field: "codigo",
    label: "Codigo",
    type: SchemaFieldType.NUMBER
  },
  {
    field: "cantidad",
    label: "Cantidad",
    responsive: true,
    type: SchemaFieldType.NUMBER
  },
  {
    field: "impuesto",
    label: "Impuesto",
    responsive: true,
    type: SchemaFieldType.NUMBER
  },
  {
    field: "costeUnitario",
    label: "Coste Unitario",
    responsive: true,
    type: SchemaFieldType.NUMBER
  },
  {
    field: "costeTotal",
    label: "Coste Total",
    responsive: true,
    type: SchemaFieldType.NUMBER
  },
  {
    field: "precioVenta",
    label: "Precio de venta",
    responsive: true,
    type: SchemaFieldType.NUMBER
  },
  {
    field: "fechaIngreso",
    label: "Fecha de ingreso",
    responsive: true,
    type: SchemaFieldType.DATE
  }
];

const store = useArticulosStore();

const { array } = storeToRefs(store);


const articulosData = reactive([
  {
    codigo: "123456",
    descripcion: "PC",
    cantidad: "123",
    impuesto: "123",
    costeUnitario: "123456",
    costeTotal: "123456",
    precioVenta: "123456",
    fechaIngreso: "01/01/2021"
  }
]);
</script>

<style lang="scss" scoped>

</style>
