<template>
  <div id="profile">
    <nav-bar class="navBar">
      <div slot="center">
        个人中心
      </div>
    </nav-bar>
    <scroll class="scroll">
    <profile-login></profile-login>
    <profile-money></profile-money>
    <profile-list></profile-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import ProfileList from './childComponents/ProfileList.vue'
import ProfileLogin from './childComponents/ProfileLogin.vue'
import ProfileMoney from './childComponents/ProfileMoney.vue'
export default {
  components:{
    NavBar,
    ProfileLogin,
    ProfileMoney,
    ProfileList,
    Scroll
  }
}
</script>

<style lang="less" scoped>
  #profile{
     height: 100vh;
     .navBar{
     background-color:var(--color-tint);
     color: white;
     font-size: 18px;
   }
   .scroll{
     height:calc(100% - 44px - 49px);
     overflow: hidden;
   }
  }
</style>