import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill'
import './assets/css/common.css'
import Meta from 'vue-meta'
import router from './router'

Vue.config.productionTip = false
Vue.use(Meta)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
