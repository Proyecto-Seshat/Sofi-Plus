import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {path: '', component: () => import('pages/LoginPage.vue')},
      {path: 'soporte', component: () => import('pages/SoportePage.vue')}
    ]
  },
  {
    path: '/usr=:user/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '0', component: () => import('pages/FacturaVentaPage.vue')},
      {path: '1', component: () => import('pages/FacturaVentaPage.vue')},
      {path: '2', component: () => import('pages/ReciboDeCajaPage.vue')},
      {path: '3', component: () => import('pages/ComprobanteEgresoPage.vue')},
      {path: '4', component: () => import('pages/DevolucionPage.vue')},
      {path: '5', component: () => import('pages/InventarioPage.vue')},
      {path: '6', component: () => import('pages/TercerosPage.vue')},
      {path: '7', component: () => import('pages/ReportesPage.vue')},
      {path: '8', component: () => import('pages/InformesFinancierosPage.vue')}
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
