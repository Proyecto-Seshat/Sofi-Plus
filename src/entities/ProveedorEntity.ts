import {CodedEntity} from "src/store/Factory/StoreFactory";

export class ProveedorEntity implements CodedEntity{
  codigo: string;
  nombre: string;
  proveedorID: string;
  telefono: string;
  observaciones: string;

  constructor({
                nombre,
                observaciones,
                proveedorID,
                telefono
              }: { nombre?: string, proveedorID?: string, telefono?: string, observaciones?: string }) {
    this.nombre = nombre ? nombre : "";
    this.proveedorID = proveedorID ? proveedorID : "";
    this.telefono = telefono ? telefono : "";
    this.observaciones = observaciones ? observaciones : "";
    this.codigo = this.proveedorID;
  }

  getCode(): string {
    return this.proveedorID;
  }


}
