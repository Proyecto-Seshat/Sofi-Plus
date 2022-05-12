import {getNewDateString} from "src/api/utils/DateFormat";

export class ItemEntity {
  codigo: string;
  descripcion: string;
  cantidad: number;
  dimension: string;
  unidadPreferida: string;
  impuesto: number;
  costeUnitario: number;
  costeTotal: number;
  precio: number;
  fechaIngreso: string;
  type: string;
  recurso: string;


  constructor({
                codigo,
                costeUnitario,
                costeTotal,
                descripcion,
                fechaIngreso,
                dimension,
                precio,
                unidadPreferida,
                impuesto,
                cantidad,
                recurso
              }: { codigo?: string, descripcion?: string, cantidad?: number, dimension?: string, unidadPreferida?: string, impuesto?: number, costeUnitario?: number, costeTotal?: number, precio?: number, fechaIngreso?: string, recurso?: string }) {
    this.codigo = codigo ? codigo : "";
    this.descripcion = descripcion ? descripcion : "";
    this.cantidad = cantidad ? cantidad : 0;
    this.dimension = dimension ? dimension : "";
    this.unidadPreferida = unidadPreferida ? unidadPreferida : "";
    this.impuesto = impuesto ? impuesto : 0;
    this.costeUnitario = costeUnitario ? costeUnitario : 0;
    this.costeTotal = costeTotal ? costeTotal : 0;
    this.precio = precio ? precio : 0;
    this.fechaIngreso = fechaIngreso ? fechaIngreso : getNewDateString();
    this.type = "ITEM";
    this.recurso = recurso ? recurso : "";
  }

  static getCode(item: ItemEntity): string {
    return item.codigo;
  }


}
