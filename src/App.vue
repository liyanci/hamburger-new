<template>
  <div id="app">
  	<Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/commons/Header'//引入Header组件
import Home from './components/pages/Home/Home'//引入Home组件
import Footer from './components/commons/Footer'//引入Footer组件
export default {
  name: 'App',
  components:{
  	Header,Home,Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
