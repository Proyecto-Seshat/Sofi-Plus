import {getNewDateString} from "src/api/utils/DateFormat";
import {CodedEntity} from "src/store/Factory/StoreFactory";

export class ItemEntity implements CodedEntity{
  codigo: string;
  descripcion: string;
  cantidad: number;
  dimension: string;
  unidadPreferida: string;
  impuesto: number;
  costeUnitario: number;
  costeTotal: number;
  precioVenta: number;
  fechaIngreso: string;


  constructor({
                codigo,
                costeUnitario,
                costeTotal,
                descripcion,
                fechaIngreso,
                dimension,
                precioVenta,
                unidadPreferida,
                impuesto,
                cantidad
              }: { codigo?: string, descripcion?: string, cantidad?: number, dimension?: string, unidadPreferida?: string, impuesto?: number, costeUnitario?: number, costeTotal?: number, precioVenta?: number, fechaIngreso?: string }) {
    this.codigo = codigo ? codigo : "";
    this.descripcion = descripcion ? descripcion : "";
    this.cantidad = cantidad ? cantidad : 0;
    this.dimension = dimension ? dimension : "";
    this.unidadPreferida = unidadPreferida ? unidadPreferida : "";
    this.impuesto = impuesto ? impuesto : 0;
    this.costeUnitario = costeUnitario ? costeUnitario : 0;
    this.costeTotal = costeTotal ? costeTotal : 0;
    this.precioVenta = precioVenta ? precioVenta : 0;
    this.fechaIngreso = fechaIngreso ? fechaIngreso : getNewDateString();
  }

  getCode(): string {
    return this.codigo;
  }


}
