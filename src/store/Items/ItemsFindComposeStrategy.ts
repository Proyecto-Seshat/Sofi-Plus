import {StoreFindStategy} from "src/store/Factory/StoreFindStategy";
import {Item} from "src/store/Items/itemsStore";
import {Ref, UnwrapRef} from "vue";

export class ItemsFindComposeStrategy implements StoreFindStategy<Item> {

  filter: Ref<string>;

  constructor(filter: Ref<string>) {
    this.filter = filter;
  }

  find(items: { [p: string]: UnwrapRef<Item> }): Item[] {
    const codigo = Number(this.filter.value);
    return Object.values(items).filter((item) => {
      return item.codigo === codigo || item.descripcion.toUpperCase().startsWith(this.filter.value.toUpperCase());
    });
  }

}
