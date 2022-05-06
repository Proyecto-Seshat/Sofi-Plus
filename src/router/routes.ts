import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {path: '', component: () => import('pages/LoginLayout/LoginPage.vue')},
      {path: 'soporte', component: () => import('pages/LoginLayout/SoportePage.vue')}
    ]
  },
  {
    path: '/usr=:user/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '0', component: () => import('pages/MainLayout/MenuPrincipal.vue')},
      {path: '1', component: () => import('pages/MainLayout/FacturaVentaPage.vue')},
      {path: '2', component: () => import('pages/MainLayout/ReciboDeCajaPage.vue')},
      {path: '3', component: () => import('pages/MainLayout/ComprobanteEgresoPage.vue')},
      {path: '4', component: () => import('pages/MainLayout/DevolucionPage.vue')},
      {path: '5', component: () => import('pages/MainLayout/InventarioPage.vue')},
      {path: '6', component: () => import('pages/MainLayout/TercerosPage.vue')},
      {path: '7', component: () => import('pages/MainLayout/ReportesPage.vue')},
      {path: '8', component: () => import('pages/MainLayout/InformesFinancierosPage.vue')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
