<template>
  <div id="app">
   <main-tab-bar></main-tab-bar>
   <keep-alive exclude="Detail">
     <router-view></router-view>
   </keep-alive>
    
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar.vue'
export default {
  components:{
    MainTabBar
  }
}
</script>

<style lang="less">
@import url("assets/css/base.css");

</style>
