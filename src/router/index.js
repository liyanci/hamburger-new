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
import Detail01 from '../components/pages/News/Detail01' 
import Detail02 from '../components/pages/News/Detail02' 
import Detail03 from '../components/pages/News/Detail03' 

import Detail04 from '../components/pages/News/Detail04' 
//import Map from '../components/pages/Map/Map' 
import Biaozhun from '../components/pages/Biaozhun/Biaozhun' 
import MenuDetail from '../components/pages/Menu/MenuDetail'
import Recruit from '../components/pages/recruit/Recruit'
import Recruit2 from '../components/pages/recruit/Recruit2'
import Recruit3 from '../components/pages/recruit/Recruit3'
import Recruit4 from '../components/pages/recruit/Recruit4'
//登录
import Login from '../components/login/Login'
//注册
import Reg from '../components/reg/Reg'
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
		  	component: Menu,
    },
   	{
		  path: '/menu-datail', //匹配的hash地址
		  name: 'MenuDetail', //路由的名字
		  component: MenuDetail,
		  //该路由所引用的组件
		  // 二级路由路径,不加/
		  children:[ 
      	{
		      path: 'hanbao', //匹配的hash地址
		      name: 'Hanbao', //路由的名字
		      component: Hanbao //该路由所引用的组件
		    },
		    {
		      path: 'tianpin',
		      name: 'Tianpin',
		      component: Tianpin
		    },
		  	{
		      path: 'zaocan',
		      name: 'Zaocan',
		      component: Zaocan
		    },
		    {
		      path: 'taocan',
		      name: 'Taocan',
		      component: Taocan
		    },
		    {
		      path: 'yinliao',
		      name: 'Yinliao',
		      component: Yinliao
		    },
		    {
		      path: 'xiaoshi',
		      name: 'Xiaoshi',
		      component: Xiaoshi
		    }
			]
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
    },
    {
      path: '/detail01',
      name: 'Detail01',
      component: Detail01
    },
    {
      path: '/detail02',
      name: 'Detail02',
      component: Detail02
    },
    {
      path: '/detail03',
      name: 'Detail03',
      component: Detail03
    },
    {
      path: '/detail04',
      name: 'Detail04',
      component: Detail04
    },
    {
      path: '/Biaozhun',
      name: 'Biaozhun',
      component: Biaozhun
    },
    {
      path: '/Recruit',
      name: 'Recruit',
      component:Recruit
    },
    {
      path: '/Recruit2',
      name: 'Recruit2',
      component:Recruit2
    },
    {
      path: '/Recruit3',
      name: 'Recruit3',
      component:Recruit3
    },
    {
      path: '/Recruit4',
      name: 'Recruit4',
      component:Recruit4
    },
    //登录
    {
				path: '/login',
			  name: 'Login',
			  component: Login    
	  	},
    //注册
    {
				path: '/reg',
			  name: 'Reg',
			  component: Reg    
	  	},
    
//  {
//  	path:'/Map',
//  	name:'/Map',
//  	component:Map
//  }
    
  ]
})
