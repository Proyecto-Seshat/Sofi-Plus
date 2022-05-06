import moment from "moment";
import {getNewDateString} from "src/api/utils/DateFormat";

export class FacturaEntity {
  detalles: ItemFactura[];
  fecha: string;
  fechaVencimiento?: string;
  clienteID: string;
  tipoPago: string;
  total: number;


  constructor({
                detalles,
                fecha,
                fechaVencimiento,
                tipoPago,
                total,
                clienteID
              }: { detalles?: ItemFactura[], fecha?: string, fechaVencimiento?: string, clienteID?: string, tipoPago?: string, total?: number }) {
    this.detalles = detalles ? detalles : [];
    this.fecha = fecha ? fecha : getNewDateString();
    this.fechaVencimiento = fechaVencimiento ? fechaVencimiento : getNewDateString();
    this.clienteID = clienteID ? clienteID : "";
    this.tipoPago = tipoPago ? tipoPago : "";
    this.total = total ? total : 0;
  }
}
