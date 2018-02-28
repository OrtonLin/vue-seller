// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Axios from 'Axios'

Vue.config.productionTip = false
Vue.use(VueRouter)

//set axios in vue prototype
Vue.prototype.$axios = Axios;

/* import component for vue-router */
import Goods from './components/Goods/Goods.vue'
import Ratings from './components/Ratings/Ratings.vue'
import Sellers from './components/Sellers/Sellers.vue'


//defined router
const routes = [
  { path: '/', redirect:'/goods' },
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/sellers', component: Sellers }
]
//instance for vue router
const router = new VueRouter({
  routes,
  linkActiveClass:'active'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
