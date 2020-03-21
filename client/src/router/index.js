import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Gov from '@/components/Gov'
import FourOhFour from '@/components/FourOhFour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Home',
      name: 'Main',
      component: Main
    },
    {
      path: '/govStats',
      name: 'Gov',
      component: Gov
    },
    {
      path: '/*',
      component: FourOhFour
    }
  ],
  mode: 'abstract'
})
