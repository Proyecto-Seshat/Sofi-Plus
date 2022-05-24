import {useItemsStore} from "src/store/Items/itemsStore";
import {useServiciosStore} from "src/store/Servicios/serviciosStore";
import {useClientesStore} from "src/store/Clientes/clientesStore";

export const syncBack = async () => {
  const itemStore = useItemsStore();
  const serviciosStore = useServiciosStore();
  const clienteStore = useClientesStore();
  await itemStore.sync();
  await serviciosStore.sync();
  await clienteStore.sync();
}
