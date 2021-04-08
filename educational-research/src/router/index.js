import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import master from '@/views/master'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/master',
      name:'master',
      component:master,
      children:[// 嵌套路由
        {// 橄榄
          path:'/master/overview',
          name:'master',
          component: ()=> import('@/views/overview'),
        }
      ]
    }
  ]
})
