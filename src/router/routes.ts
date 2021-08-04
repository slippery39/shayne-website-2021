import { RouteRecordRaw } from 'vue-router';
import { getArticles } from 'src/data/Articles';

import ShayneArticle from 'src/components/ShayneArticle.vue';



const articleRoutes: RouteRecordRaw[] = getArticles().map(a => {
  console.log(a);
  return {
    path: '/articles/',
    component: () => import('layouts/MainLayout.vue'),
    // component: () => import(`src/articles/${a.id}/${a.id}.md`),
    children: [{
      path: '', component: ShayneArticle, props: { articleInfo: a },
      children: [{ path: `${a.id}`, component: () => import(`src/articles/${a.id}/${a.id}.md`) }]
    }],
  }
});


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
  ...articleRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
