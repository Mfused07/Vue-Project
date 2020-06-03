import Vue from 'vue'
import VueRouter from 'vue-router'
import MainNavbar from '@/layout/MainNavbar'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Products from '@/views/Products'
import MainFooter from "@/layout/MainFooter.vue";

Vue.use(VueRouter)

  const routes = [

    {
      path: "/",
      name: "Home",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/Products',
    name:'Products',
    components: { default: Products, header: MainNavbar, footer: MainFooter }
  },
  
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    components: { default: Login, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 }
    }
  },


]

const router = new VueRouter({
  routes
})

export default router
