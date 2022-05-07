import {CodedEntity} from "src/store/Factory/StoreFactory";

export class RecursoEntity implements CodedEntity{
  idRecurso: string;
  cuenta: string;


  constructor({idRecurso, cuenta}:{idRecurso?: string, cuenta?: string}) {
    this.idRecurso = idRecurso? idRecurso : "0";
    this.cuenta = cuenta? cuenta : "Cuenta Invalida";
  }

  getCode(): string {
    return this.idRecurso;
  }
}
