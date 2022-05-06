<template>
  <q-page class="column q-ml-md">
    <q-card flat>
      <q-card-section>
        <q-btn label="test" @click="test"/>
        <q-tree
                :nodes="nodes"
                node-key="label"
                v-model:selected="selected"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>

import {RecursoNode, useRecursoStore} from "src/store/Recursos/recursoStore";
import {RecursoEntity} from "src/entities/RecursoEntity";
import {computed, ref} from "vue";

const recursoStore = useRecursoStore();

function test(){
  const recursos:RecursoEntity[] = [
    {idRecurso: "1", cuenta: "Activo"},
    {idRecurso: "11", cuenta: "Disponible"},
    {idRecurso: "1105", cuenta: "Caja"},
    {idRecurso: "1110", cuenta: "Bancos"},
    {idRecurso: "12", cuenta: "Inversiones"},
    {idRecurso: "1205", cuenta: "Acciones"}
  ];
  recursoStore.setRecursos(recursos);
  console.log(recursoStore.recursosTree);
  console.log(nodes);
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

.comprobante {
  font-size: 2.5vh;
  font-weight: bold;
  border: 2px solid #1D1D1D;
  padding: 5px;
}
</style>
