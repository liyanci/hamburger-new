import Vue from 'vue'// vue实例
import Vuex from 'vuex' //vue router



Vue.use(Vuex)

export default new Vuex.Store({
  state:{
  	login:false
  },
  mutations:{
    //更改state 里的数据的方法
    changeLogin(state,val1){
      console.log(val1)
      state.login=val1
    },
    changeSliderShow(state,val){
     state.sliderShow=val
    }
  }
})
// const store=new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
// export default store

/*
vuex vue 中的状态管理
npm install  vuex --save 
用法参考（router）
新建一个文件夹 作用 状态管理的模块
index.js   引入 vue  vuex 进行使用

import Vue from 'vue'// vue实例
import Vuex from 'vuex' //vue router
Vue.use(Vuex)
接下来创建vuex的实例并且抛出

export default new Vuex.Store({
  state:{
    login:true
  },
  mutations:{
    //更改state 里的数据的方法
    changeLogin(state,val1){
      console.log(val1)

      state.login=val1
    }
  }
})


state  状仓库  所有的状态值放在这里管理
mutations  修改 仓库中状态值得方法  
state的修改只有通过mutations才能修改

在main.js页面 引入 vuex的index.js
挂载到根实例中

new Vue({
  el: '#app',
  router,
  store,
  components: { App },//挂载app组件
  template: '<App/>'//用app组件来替换首页的 div元素
})


从此 vuex配置好了

vuex的使用  

1.获取值 vue.$store.state.名字
2.修改  Vue.$store.commit('mutations中的方法'，‘参数’)

注意事项 

状态值不能挂到 data 里  不会刷新
可以通过计算属性来进行挂载 并且处理修改
*/ 