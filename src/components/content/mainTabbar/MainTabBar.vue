<template>
       <tab-bar>
      <tab-bar-item path="/home" fontColor="#ff5777">
        <img slot="image" src="~assets/img/tabbar/home.png" alt="图片不见了">
        <img slot="imageAct" src="~assets/img/tabbar/homeAct.png" alt="图片不见了">
        <div slot="text">首页</div>
      </tab-bar-item>
       <tab-bar-item path="/category" fontColor="#ff5777">
        <img slot="image" src="~assets/img/tabbar/category.png" alt="图片不见了">
        <img slot="imageAct" src="~assets/img/tabbar/categoryAct.png" alt="图片不见了">
        <div slot="text">分类</div>
      </tab-bar-item>
       <tab-bar-item path="/cart" fontColor="#ff5777">
        <img slot="image" src="~assets/img/tabbar/cart.png" alt="图片不见了">
        <img slot="imageAct" src="~assets/img/tabbar/cartAct.png" alt="图片不见了">
        <div slot="text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/profile" fontColor="#ff5777">
        <img slot="image" src="~assets/img/tabbar/profile.png" alt="图片不见了">
        <img slot="imageAct" src="~assets/img/tabbar/profileAct.png" alt="图片不见了">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
    components:{
        TabBar,
        TabBarItem
    }

}
</script>

<style>

</style>