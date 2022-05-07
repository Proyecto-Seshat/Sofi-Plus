<template>
  <q-page class="column q-ml-md">
    <q-card flat>
      <q-card-section>
        <q-btn label="Purge" @click="purge" />
        <q-btn label="Print" @click="print" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>

import {RecursoNode, useRecursoStore} from "src/store/Recursos/recursoStore";
import {RecursoEntity} from "src/entities/RecursoEntity";
import {computed, ref} from "vue";
import {useItemsStore} from "src/store/Items/itemsStore";
import {useProveedoresStore} from "src/store/Proveedores/proveedoresStore";
import {useServiciosStore} from "src/store/Servicios/serviciosStore";

const recursoStore = useRecursoStore();

function purge(){
  useItemsStore().purge();
  useServiciosStore().purge();
}

function print(){
  console.log(useProveedoresStore().items);
}

function test(){
  // const recursos:RecursoEntity[] = [
  //   {idRecurso: "1", cuenta: "Activo"},
  //   {idRecurso: "11", cuenta: "Disponible"},
  //   {idRecurso: "1105", cuenta: "Caja"},
  //   {idRecurso: "1110", cuenta: "Bancos"},
  //   {idRecurso: "12", cuenta: "Inversiones"},
  //   {idRecurso: "1205", cuenta: "Acciones"},
  //   {idRecurso: "2", cuenta: "Pasivo"},
  //   {idRecurso: "21", cuenta: "Obligaciones financieras"},
  //   {idRecurso: "2105", cuenta: "Bancos nacionales"},
  //   {idRecurso: "22", cuenta: "Proveedores"},
  //   {idRecurso: "2215", cuenta: "Cuentas corrientes comerciales"}
  // ];
  // recursoStore.setRecursos(recursos);
  // console.log(recursoStore.recursosTree);
  // console.log(nodes);
}

const selected = ref("");

const recursion:any = (node: RecursoNode) =>{
  if(!node.children){
    return { label: `${node.recurso.idRecurso}: ${node.recurso.cuenta}` }
  }else{
    return {
      label: `${node.recurso.idRecurso}: ${node.recurso.cuenta}`,
      children: Object.values(node.children).map(recursion)
    }
  }
}

const nodes = computed(()=>{
  let res = [];
  for(let clase of Object.values(recursoStore.recursosTree)){
    res.push(recursion(clase));
  }
  return res;
});

</script>
<style lang="scss" scoped>
.total {
  font-size: 3vh;
}

.titulo-pagina {
  font-size: 4vh;
}

.recursoHeader:hover{
  background: #9C27B0;
}

.recursoHeader{
  background: #2C5697;
}

.comprobante {
  font-size: 2.5vh;
  font-weight: bold;
  border: 2px solid #1D1D1D;
  padding: 5px;
}
</style>
