<template>
  <q-page>
    <tab-paneled-page :tabs="['Articulos', 'Servicios']">
      <template #Articulos>
        <articulos-managing-component/>
      </template>
      <template #Servicios>
        <servicios-managing-component/>
      </template>
    </tab-paneled-page>
  </q-page>
</template>

<script lang="ts" setup>
import TabPaneledPage from "components/TabPaneledPage.vue";
import ArticulosManagingComponent from "components/Articulos/ArticulosManagingComponent.vue";
import ServiciosManagingComponent from "components/ServiciosManagingComponent.vue";</script>

<style lang="scss" scoped>

</style>
