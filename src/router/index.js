import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home/Home'
import AboutUs from '../components/pages/AboutUs/AboutUs' //某一个组件

//总菜单
import Menu from '../components/pages/Menu/Menu' //我的菜单组件
//小菜单
import Hanbao from '../components/pages/Menu/Hanbao'
import Tianpin from '../components/pages/Menu/Tianpin' 
import Zaocan from '../components/pages/Menu/Zaocan' 
import Taocan from '../components/pages/Menu/Taocan' 
import Yinliao from '../components/pages/Menu/Yinliao' 
import Xiaoshi from '../components/pages/Menu/Xiaoshi' 
//优惠券
import Coupons from '../components/pages/Coupons/Coupons' 
import News from '../components/pages/News/News' 
import HowMake from '../components/pages/HowMake/HowMake' 
Vue.use(Router)

export default new Router({
  routes: [
  {
        path: '/',//匹配的hash地址
        redirect:'/home'//重定向
      },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
    	path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/menu', //匹配的hash地址
      name: 'Menu', //路由的名字
      component: Menu //该路由所引用的组件
    },
    {
      path: '/hanbao', //匹配的hash地址
      name: 'Hanbao', //路由的名字
      component: Hanbao //该路由所引用的组件
    },
    {
      path: '/tianpin',
      name: 'Tianpin',
      component: Tianpin
    },
  	{
      path: '/zaocan',
      name: 'Zaocan',
      component: Zaocan
    },
    {
      path: '/taocan',
      name: 'Taocan',
      component: Taocan
    },
    {
      path: '/yinliao',
      name: 'Yinliao',
      component: Yinliao
    },
    {
      path: '/xiaoshi',
      name: 'Xiaoshi',
      component: Xiaoshi
    },
    {
      path: '/coupons',
      name: 'Coupons',
      component: Coupons
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/HowMake',
      name: 'HowMake',
      component: HowMake
    }
  ]
})
