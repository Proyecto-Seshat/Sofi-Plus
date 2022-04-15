<template>
  <q-layout class="overlay" view="hHh lpR fFf">
    <q-header class="bg-javeriana" elevated>
      <q-toolbar>
        <q-btn class="q-mr-sm" dense flat icon="menu" round @click="openDrawer"/>
        <img v-if="$q.platform.is.desktop" alt="logo" class="col-auto bg-white q-ma-lg" src="/logo.png"
             style="height: 3vh">
        <q-btn flat icon="info" label="Info" round @click="showHelp"/>
        <q-space/>
        <q-item>
          <q-item-section>
            <q-item-label>{{capitalize(name)}}</q-item-label>
            <q-item-label caption class="text-white" lines="1">{{capitalize(role)}}</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-btn round outline>
              <q-avatar>
                <img :src="`https://cdn.quasar.dev/img/avatar6.jpg`">
              </q-avatar>
              <q-menu>
                <q-list style="min-width: 30vw">
                  <q-item clickable v-close-popup @click="logout">
                    <q-item-section>Cerrar sesión</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-javeriana drawer-overflow"
      show-if-above
    >
      <div class="bg-javeriana full-width">
        <img alt="escudo" src="/escudo.svg">
      </div>
      <div class="column drawer-overflow">
        <q-item v-for="(link, index) in getPermissions" :key="link" :to="`/usr=123456/${index}`" active-class="link-activo"
                class="link-inactivo" :disable="!linksHabilitados[link]">
          <!--          <q-item-section side>-->
          <!--            <q-btn flat icon="info" round @click.prevent="cargarInfo(index)"/>-->
          <!--          </q-item-section>-->
          <q-item-section>
            <q-item-label class="text-right">{{ link }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      class="bg-javeriana drawer-overflow"
      side="right"
    >
      <q-card class="responsive-table-btn">
        <q-card-section>
          {{ helpInfo }}
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cerrar" @click="()=>{
            rightDrawerOpen = false;
            store.closeHelp();
          }" class="revert-btn full-width"/>
        </q-card-actions>
      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from 'vue'
import {useQuasar} from "quasar";
import {format} from "quasar";
import {helpStore} from "src/store/helpStore";
import {userStore} from "src/store/userStore";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const leftDrawerOpen = ref(true);
const rightDrawerOpen = ref(false);

const $q = useQuasar();
const store = helpStore();
const {getPermissions, name, role} = storeToRefs(userStore());
const {capitalize} = format;
const router = useRouter();

const linksHabilitados = {
  "FACTURA DE  VENTA": true,
  "INVENTARIO": true
};

const helpInfo = computed(() => {
  return store.helpInfo;
});

watch(helpInfo, (value, oldValue) => {
  if(value!=""){
    if($q.platform.is.desktop){
      rightDrawerOpen.value = true;
    }else{
      rightDrawerOpen.value = true;
      $q.notify(value);
    }
  }
})

function openDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function showHelp() {
  store.requestHelp();
}

function logout(){
  userStore().logout();
  router.push("/");
}

</script>

<style>
.drawer-overflow {
  overflow: visible;
}

.link-wrap {
  position: relative;
  overflow: visible;
}

.link-activo {
  width: 80%;
  background: #BBE1FA;
  position: relative;
  left: 24%;
  color: #2C5697 !important;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.link-inactivo {
  color: white;
}
</style>
