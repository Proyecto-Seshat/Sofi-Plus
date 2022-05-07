import {CodedEntity} from "src/store/Factory/StoreFactory";

export class ClienteEntity implements CodedEntity{
  codigo: string;
  nombre: string;
  clienteID: string;
  telefono: string;
  observaciones: string;


  constructor({
                nombre,
                observaciones,
                clienteID,
                telefono,
              }: { nombre?: string, clienteID?: string, telefono?: string, observaciones?: string }) {
    this.nombre = nombre ? nombre : "";
    this.clienteID = clienteID ? clienteID : "";
    this.telefono = telefono ? telefono : "";
    this.observaciones = observaciones ? observaciones : "";
    this.codigo = this.clienteID;
  }

  getCode(): string {
    return this.clienteID;
  }


}
