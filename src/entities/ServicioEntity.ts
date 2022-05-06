import {getNewDateString} from "src/api/utils/DateFormat";

export class ServicioEntity {
  codigo: string
  descripcion: string
  impuesto: number
  costeUnitario: number
  precioVenta: number
  fechaCreacion: string

  constructor({codigo, descripcion, costeUnitario, fechaCreacion, precioVenta, impuesto}: {codigo?: string, descripcion?: string, impuesto?: number, costeUnitario?: number, precioVenta?: number, fechaCreacion?: string}) {
    this.codigo = codigo? codigo: "";
    this.descripcion = descripcion? descripcion : "";
    this.impuesto = impuesto? impuesto : 0;
    this.costeUnitario = costeUnitario? costeUnitario : 0;
    this.precioVenta = precioVenta? precioVenta : 0;
    this.fechaCreacion = fechaCreacion? fechaCreacion : getNewDateString();
  }
}
