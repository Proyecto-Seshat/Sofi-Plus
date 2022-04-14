import {storeFactory} from "src/store/Factory/StoreFactory";

export interface Item {
  codigo: number,
  descripcion: string,
  cantidad: number,
  dimension: string,
  unidadPreferida: string,
  impuesto: number,
  costeUnitario: number,
  costeTotal: number,
  precioVenta: number,
  fechaIngreso: string
}

export const useItemsStore = storeFactory<Item>('items');
