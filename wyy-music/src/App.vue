<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appHeader from './components/common/header/header.vue'
export default {
  name: 'App',
  components:{
    appHeader
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft yahei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
