import {storeFactory} from "src/store/Factory/StoreFactory";

export interface Servicio {
  codigo: number,
  descripcion: string,
  cantidad: number,
  impuesto: number,
  costeUnitario: number,
  costeTotal: number,
  precioVenta: number,
  fechaIngreso: string
}

export const useServiciosStore = storeFactory<Servicio>('servicios');
