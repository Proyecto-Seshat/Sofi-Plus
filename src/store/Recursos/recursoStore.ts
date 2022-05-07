import {defineStore} from "pinia";
import {RecursoEntity} from "src/entities/RecursoEntity";

export interface RecursoNode{
  recurso: RecursoEntity;
  children?: {[key: string]: RecursoNode};
}

export const useRecursoStore = defineStore("recurso", {
  state: () => {
    return {
      recursos: [
        {idRecurso: "1", cuenta: "Activo"},
        {idRecurso: "11", cuenta: "Disponible"},
        {idRecurso: "1105", cuenta: "Caja"},
        {idRecurso: "1110", cuenta: "Bancos"},
        {idRecurso: "12", cuenta: "Inversiones"},
        {idRecurso: "1205", cuenta: "Acciones"},
        {idRecurso: "2", cuenta: "Pasivo"},
        {idRecurso: "21", cuenta: "Obligaciones financieras"},
        {idRecurso: "2105", cuenta: "Bancos nacionales"},
        {idRecurso: "22", cuenta: "Proveedores"},
        {idRecurso: "2215", cuenta: "Cuentas corrientes comerciales"}
      ] as RecursoEntity[],
      recursosTree: {} as {[key: string]: RecursoNode}
    };
  },
  getters: {

  },
  actions: {
    setRecursos(recursos: RecursoEntity[]) {
      this.recursos = recursos;
      this.recursos.forEach((recurso)=>{
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
