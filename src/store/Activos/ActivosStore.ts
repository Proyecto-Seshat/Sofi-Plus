import {storeFactory} from "src/store/Factory/StoreFactory";
import {ItemEntity} from "src/entities/ItemEntity";
import {InsumoEntity} from "src/entities/InsumoEntity";
import {ActivosEntity} from "src/entities/ActivosEntity";

export const useActivosStore = storeFactory<ActivosEntity>('activos', ActivosEntity);
