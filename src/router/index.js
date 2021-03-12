import Vue from 'vue'
import Router from 'vue-router'
import common from './common'

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: 'history',
  routes: common
})


export default router
