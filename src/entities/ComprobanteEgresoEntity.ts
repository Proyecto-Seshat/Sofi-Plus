import {getNewDateString} from "src/api/utils/DateFormat";

export class ComprobanteEgresoEntity {
  fecha: string;
  cantidad: number;
  cantidadEnLetras: string;
  porConceptoDe: string;
  recibidoDe: string;
  clienteID: string;
  cuenta: string;
  elaboradoPor: string;
  aprobadoPor: string;
  clienteNombre: string;


  constructor({
                cantidadEnLetras,
                cantidad,
                aprobadoPor,
                elaboradoPor,
                porConceptoDe,
                fecha,
                recibidoDe,
                clienteID,
                cuenta,
                clienteNombre
              }: { fecha?: string, cantidad?: number, cantidadEnLetras?: string, porConceptoDe?: string, recibidoDe?: string, clienteID?: string, cuenta?: string, elaboradoPor?: string, aprobadoPor?: string, clienteNombre?: string }) {
    this.fecha = fecha ? fecha : getNewDateString();
    this.cantidad = cantidad ? cantidad : 0;
    this.cantidadEnLetras = cantidadEnLetras ? cantidadEnLetras : "";
    this.porConceptoDe = porConceptoDe ? porConceptoDe : "";
    this.recibidoDe = recibidoDe ? recibidoDe : "";
    this.clienteID = clienteID ? clienteID : "";
    this.cuenta = cuenta ? cuenta : "";
    this.elaboradoPor = elaboradoPor ? elaboradoPor : "";
    this.aprobadoPor = aprobadoPor ? aprobadoPor : "";
    this.clienteNombre = clienteNombre ? clienteNombre : "";
  }
}
