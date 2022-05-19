import {getNewDateString} from "src/api/utils/DateFormat";
import {uid} from "quasar";

export class FacturaEntity {
  id: string;
  detalles: ItemFactura[];
  fecha: string;
  fechaVencimiento?: string;
  clienteID: string;
  clienteNombre: string;
  tipoPago: string;
  total: number;


  constructor({
                id,
                detalles,
                fecha,
                fechaVencimiento,
                tipoPago,
                total,
                clienteID,
                clienteNombre
              }: { id?: string, detalles?: ItemFactura[], fecha?: string, fechaVencimiento?: string, clienteID?: string, clienteNombre?: string, tipoPago?: string, total?: number }) {
    this.id = id ? id : uid();
    this.detalles = detalles ? detalles : [];
    this.fecha = fecha ? fecha : getNewDateString();
    this.fechaVencimiento = fechaVencimiento ? fechaVencimiento : getNewDateString();
    this.clienteID = clienteID ? clienteID : "";
    this.clienteNombre = clienteNombre? clienteNombre : "";
    this.tipoPago = tipoPago ? tipoPago : "";
    this.total = total ? total : 0;
  }
}
