import {StoreFindStategy} from "src/store/Factory/StoreFindStategy";
import {Articulo} from "src/store/Articulos/articulosStore";
import {Ref, UnwrapRef} from "vue";

export class ArticulosFindComposeStrategy implements StoreFindStategy<Articulo> {

  filter: Ref<string>;

  constructor(filter: Ref<string>) {
    this.filter = filter;
  }

  find(items: { [p: string]: UnwrapRef<Articulo> }): Articulo[] {
    const codigo = Number(this.filter.value);
    return Object.values(items).filter((item) => {
      return item.codigo === codigo || item.descripcion.toUpperCase().startsWith(this.filter.value.toUpperCase());
    });
  }

}
