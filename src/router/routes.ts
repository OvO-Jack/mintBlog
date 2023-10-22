//对外暴露配置路由(常量路由):全部用户都可以访问到的路由

import { RouteRecordRaw } from 'vue-router';
export const constantRoute:RouteRecordRaw[] = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login'
  },
  {
    //登录成功以后展示数据的路由
    path: '/',
    redirect: '/home'
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'DocumentDelete',
    },
  },
  {
    path: '/personal',
    component: () => import('@/views/personal/index.vue'),
    name: 'personal',
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue'),
    name: 'about',
  },
  {
    path: '/blog-single',
    component: () => import('@/views/blog-single/index.vue'),
    name: 'blog-single',
  },
  {
    path: '/blog-single-alt',
    component: () => import('@/views/blog-single-alt/index.vue'),
    name: 'blog-single-alt',
  },
  {
    path: '/category',
    component: () => import('@/views/category/index.vue'),
    name: 'category',
  },
  {
    path: '/classic',
    component: () => import('@/views/classic/index.vue'),
    name: 'classic',
  },
  {
    path: '/contact',
    component: () => import('@/views/contact/index.vue'),
    name: 'contact',
  },
  {
    path: '/minimal',
    component: () => import('@/views/minimal/index.vue'),
    name: 'minimal',
  },
  {
    path: '/personal-alt',
    component: () => import('@/views/personal-alt/index.vue'),
    name: 'personal-alt',
  },
  {
    path: '/test',
    component: () => import('@/views/test/index.vue'),
    name: 'test',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
  }
]

//任意路由
export const anyRoute = {
  //任意路由
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
    icon: 'DataLine',
  },
}
