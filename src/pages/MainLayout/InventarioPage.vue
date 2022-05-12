<template>
  <q-page>
    <tab-paneled-page :tabs="['Items', 'Servicios', 'Insumos']">
      <template #Items>
        <items-managing-component/>
      </template>
      <template #Servicios>
        <servicios-managing-component/>
      </template>
      <template #Insumos>
        <insumos-managing-component/>
      </template>
    </tab-paneled-page>
  </q-page>
</template>

<script lang="ts" setup>
import TabPaneledPage from "components/TabPaneledPage.vue";
import ItemsManagingComponent from "components/Items/ItemsManagingComponent.vue";
import ServiciosManagingComponent from "components/Servicios/ServiciosManagingComponent.vue";
import InsumosManagingComponent from "components/Insumos/InsumosManagingComponent.vue";
</script>

<style lang="scss" scoped>

</style>
