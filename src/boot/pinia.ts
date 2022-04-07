import {boot} from 'quasar/wrappers';
import {createPinia, storeToRefs} from "pinia";
import persistState from "pinia-plugin-persistedstate";
import {userStore} from "src/store/userStore";

export default boot(({app, router}) => {
  const pinia = createPinia();
  pinia.use(persistState);
  app.use(pinia);
  const {name, role} = storeToRefs(userStore(pinia));
  router.beforeEach((to, from) => {
    if (to.path === "/") {
      if (name.value !== "") {
        return {
          path: `/usr=${name.value}/0`
        }
      }
    } else {
      if (name.value === "") {
        return {
          path: `/`
        }
      }
    }
  });
});
