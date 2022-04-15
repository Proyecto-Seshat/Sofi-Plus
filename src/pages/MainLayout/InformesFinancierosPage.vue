<template>
  <q-page class="q-ml-md column">
    <span class="col-auto titulo-pagina">Informes financieros</span>
    <div class="col row justify-center">
      <div class="col-auto column justify-center q-gutter-y-lg" style="width: 80%">
        <span class="col-auto comprobante">Seleccione el tipo de informe que requiere:</span>
        <q-btn class="col-auto advance-btn" label="Estado Flujo de Efectivo"/>
        <q-btn class="col-auto advance-btn" label="Estado Flujos  de Resultados"/>
        <q-btn class="col-auto advance-btn" label="Estado de Situación Financiero"/>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.titulo-pagina {
  font-size: 4vh;
}
.comprobante {
  font-size: 1.9vh;
  font-weight: bold;
  border: 1px solid #1D1D1D;
  padding: 5px;
}
</style>
