import {defineStore} from "pinia";
import {UnwrapRef} from "vue";
import {StoreFindStategy} from "src/store/Factory/StoreFindStategy";

export interface CodedEntity {
  codigo: number
}

export interface StandardFactory<T> {
  items: { [key: string]: T },
  generatedCode: number,
  array: T[],
  add: (item: T) => void,
  remove: (item: T) => void
}

export const storeFactory = function <T extends CodedEntity>(storeID: string) {
  return defineStore(storeID, {
    state: () => {
      let items: { [key: string]: T } = {};
      return {
        items: items
      }
    },
    getters: {
      generatedCode: state => Object.keys(state.items).length + 1,
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