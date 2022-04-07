import {storeFactory} from "src/store/Factory/StoreFactory";

export interface Articulo {
  codigo: number,
  descripcion: string,
  cantidad: number,
  impuesto: number,
  costeUnitario: number,
  costeTotal: number,
  precioVenta: number,
  fechaIngreso: string
}

export const useArticulosStore = storeFactory<Articulo>('articulos');
