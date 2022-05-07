import {defineStore} from "pinia";
import {UnwrapRef} from "vue";
import {StoreFindStategy} from "src/store/Factory/StoreFindStategy";

export interface CodedEntity {
  getCode(): string
}

export interface StandardFactory<T> {
  items: { [key: string]: T },
  generateCode: string,
  array: T[],
  add: (item: T) => void,
  remove: (item: T) => void
}

export const storeFactory = function <T extends CodedEntity>(storeID: string, entity: any) {
  return defineStore(storeID, {
    state: () => {
      let items: { [key: string]: T } = {};
      return {
        items: items,
        codigo: ""
      }
    },
    getters: {
      generateCode: state => {
        return state.codigo;
      },
      array: state => Object.values(state.items),
      find: state => {
        return (strategy: StoreFindStategy<T>) => {
          return strategy.find(state.items);
        }
      }
    },
    actions: {
      add(item: T) {
        const entityItem = new entity(item);
        this.items[entityItem.getCode()] = entityItem as UnwrapRef<T>;
      },
      remove(item: T) {
        delete this.items[item.getCode()];
      },
      affect(codigo: string, effect: Function){
        this.items[codigo] = effect(this.items[codigo]);
      },
      get(codigo: string){
        return this.items[codigo];
      },
      purge(){
        this.items = {};
        // for(let item in this.items){
        //   console.log(item);
        //   if(item === undefined){
        //     delete this.items[item];
        //   }
        //   if(!this.items[item]){
        //     delete this.items[item];
        //   }
        // }
      }
    },
    persist: true
  });
}
