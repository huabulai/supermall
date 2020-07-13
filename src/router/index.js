import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/home')
const Category = () => import('../views/category/category')
const ShopCart = () => import('../views/shopcart/shopcart')
const PersonCenter = () => import('../views/personcenter/personcenter')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/category', name: 'Category', component: Category },
  { path: '/shopcart', name: 'ShopCart', component: ShopCart },
  { path: '/personcenter', name: 'PersonCenter', component: PersonCenter }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
