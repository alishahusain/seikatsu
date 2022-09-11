import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Gallery from '@/views/Gallery'
import Miners from '@/views/Miners'
import Protected from '@/views/Protected'
import Message from '@/components/Message'
import Signin from '@/views/Signin'
import Signout from '@/views/Signout'
import About from '@/views/About'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/Miners',
      name: 'miners',
      component: Miners,
    },
    {
      path: '/Signout',
      name: 'signout',
      component: Signout,
    },
    {
      path: '/Signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/Message',
      name: 'message',
      component: Message,
    },
    {
      path: '/Protected',
      name: 'protected',
      component: Protected,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },


  ]
})


export default router;
