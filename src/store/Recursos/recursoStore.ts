import {defineStore} from "pinia";
import {RecursoEntity} from "src/entities/RecursoEntity";

export interface RecursoNode{
  recurso: RecursoEntity;
  children?: {[key: string]: RecursoNode};
}

export const useRecursoStore = defineStore("recurso", {
  state: () => {
    return {
      recursos: [] as RecursoEntity[],
      recursosTree: {} as {[key: string]: RecursoNode}
    };
  },
  getters: {
  },
  actions: {
    setRecursos(recursos: RecursoEntity[]) {
      recursos.forEach((recurso)=>{
        let clase = recurso.idRecurso.substring(0, 1);
        if(recurso.idRecurso.length == 1){
          this.recursosTree[clase] = {
            recurso: recurso,
            children: {}
          };
          return;
        }
        if(this.recursosTree[clase]){
          let grupo = recurso.idRecurso.substring(0, 2);
          if(recurso.idRecurso.length == 2){
            this.recursosTree[clase].children![grupo] = {
              recurso: recurso,
              children: {}
            };
            return;
          }
          if(this.recursosTree[clase].children![grupo]){
            let cuenta = recurso.idRecurso.substring(0, 4);
            this.recursosTree[clase].children![grupo].children![cuenta] = {
              recurso: recurso
            };
            return;
          }
        }
      });
    }
  },
  persist: true
})
