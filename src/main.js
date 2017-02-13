// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Login from './Login'
import Home from './Home'
import Indee from './Index'
import Detail from './Detail'
import Tailor from './Tailor'
import Tailorinfo from './Tailorinfo'
import TBooking from './tailor/booking'
import CBooking from './customer/booking'
import Test from './Test'

Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('access_token')
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
/* router */
const routes = [
  { path: '', name: 'home', component: Indee },
  { path: '/signup', component: Home },
  { path: '/signin', component: Login },
  { path: '/detail', component: Detail },
  { path: '/tailor', component: Tailor },
  { path: '/tailor/:id/info', name: 'info', component: Tailorinfo },
  { path: '/test', component: Test },
  { path: '/tailor/booking', component: TBooking },
  { path: '/user/booking', component: CBooking }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
