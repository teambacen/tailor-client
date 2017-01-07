// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Login from './Login'
import Home from './Home'
import Indee from './Index'
import Detail from './Detail'
import Tailor from './Tailor'

Vue.use(vueResource)
Vue.use(VueRouter)
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('access_token')
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
/* router */
const routes = [
  { path: '', component: Indee },
  { path: '/signup', component: Home },
  { path: '/signin', component: Login },
  { path: '/detail', component: Detail },
  { path: '/tailor', component: Tailor }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
