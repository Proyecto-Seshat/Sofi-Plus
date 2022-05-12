import {getNewDateString} from "src/api/utils/DateFormat";

export class InsumoEntity{
  codigo: string;
  descripcion: string;
  impuesto: number;
  costeVidaUtil: number;
  recurso: string;
  fechaIngreso: string;
  type: string;


  constructor({
                codigo,
                costeVidaUtil,
                descripcion,
                fechaIngreso,
                impuesto,
                recurso
              }: { codigo?: string, descripcion?: string, impuesto?: number, costeVidaUtil?: number, fechaIngreso?: string, recurso?: string }) {
    this.codigo = codigo ? codigo : "";
    this.descripcion = descripcion ? descripcion : "";
    this.impuesto = impuesto ? impuesto : 0;
    this.costeVidaUtil = costeVidaUtil ? costeVidaUtil : 0;
    this.fechaIngreso = fechaIngreso ? fechaIngreso : getNewDateString();
    this.type = "ITEM";
    this.recurso = recurso ? recurso : "";
  }

  static getCode(insumo: InsumoEntity): string {
    return insumo.codigo;
  }


}
