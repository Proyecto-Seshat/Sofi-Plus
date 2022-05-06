import {defineStore} from "pinia";
import {UnwrapRef} from "vue";
import {StoreFindStategy} from "src/store/Factory/StoreFindStategy";

export interface CodedEntity {
  codigo: string
}

export interface StandardFactory<T> {
  items: { [key: string]: T },
  generateCode: number,
  array: T[],
  add: (item: T) => void,
  remove: (item: T) => void
}

export const storeFactory = function <T extends CodedEntity>(storeID: string) {
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
        this.items[item.codigo] = item as UnwrapRef<T>;
      },
      remove(item: T) {
        delete this.items[item.codigo];
      }
    },
    persist: true
  });
}
