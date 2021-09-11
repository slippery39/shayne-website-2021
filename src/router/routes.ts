import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Projects.vue') }],
  },
  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Contact.vue') }],
  },
  {
    path: '/blog', component: () => import('layouts/MainLayout.vue'),
    children: [{ path: ':id', component: () => import('components/BlogPost.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
