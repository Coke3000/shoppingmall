<template>
  <div id="home">
      <nav-bar class="nav-style" ><div slot="center">购物街</div></nav-bar>
       <tab-control :titles="['流行','新款','精选']"   @tabClick="tabClickOption" ref="tabControl1" class="tabControl" v-show="isTabControlFixed"></tab-control>
      <scroll class="content" ref="scroll" :probeType1="3" @showBackTop="hideBackTop" @scrollPositon="isAboutTabControl" :pullUpLoad1="true" @pullingUp="loadMore">
         <home-swiper :banners="banners" @swiperImageLoad="tabControlOffsetTOP"></home-swiper>
         <recommend-view :recommend="recommends"></recommend-view>
         <feature-view></feature-view>
         <tab-control :titles="['流行','新款','精选']"   @tabClick="tabClickOption" ref="tabControl2"></tab-control>
         <goods-list :goods-list="goods[goodsType].list"></goods-list>
      </scroll>
      <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendView from './childComponents/RecommendView..vue'
import FeatureView from './childComponents/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import {getHomeMultidata, getHomeGoods} from "network/home.js"
import Scroll from 'components/common/scroll/Scroll.vue'
import {itemListenerMixin,backTopMixin} from "common/mixin.js"


export default {
 components:{
  NavBar,
  HomeSwiper,
  RecommendView,
  FeatureView,
  TabControl,
  GoodsList,
  Scroll,
 },
 data(){
  return{
    banners:[],
    recommends:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    goodsType:"pop",
    tabConntrolTop:0,
    isTabControlFixed:false,
    saveY:0
   }
 },
 mixins:[itemListenerMixin,backTopMixin],
 created(){
  //获取轮播数据
  this.getHomeMultidata2();
  //获取商品数据
  this.getHomeGoods2('pop');
  this.getHomeGoods2('new');
  this.getHomeGoods2('sell');
 },

 mounted(){
   
 },
 methods:{
   /**
    * tabControl点击事件
    */
   tabClickOption(index){
     switch(index){
       case 0:
         this.goodsType="pop";
         break;
       case 1:
         this.goodsType="new";
         break;
       case 2:
         this.goodsType="sell";
         break;
     }
     this.$refs.tabControl1.currentIndex=index;
     this.$refs.tabControl2.currentIndex=index;
   },

   /**
    * 获取更多数据
    */
   loadMore(){
     this.getHomeGoods2(this.goodsType)
   },

  /**
   * 移动到一定位置显示tabbarcontrol
   */
   isAboutTabControl(position){
       this.isTabControlFixed=-position.y>this.tabConntrolTop?true:false;
   },


   /**
    * 当轮播图片加载完后获取tabcontrol的offsettop
    */
   tabControlOffsetTOP(){
     //获取tabcontrol的offsettop
      this.tabConntrolTop=this.$refs.tabControl2.$el.offsetTop;
   },

   /**
    * 网络请求数据
    */
   getHomeMultidata2(){
     getHomeMultidata().then(res=>{
    //  console.log(res);
     this.banners=res.data.banner.list;
     this.recommends=res.data.recommend.list;
   })
   },
   getHomeGoods2(type){
     const page=this.goods[type].page+1;
     getHomeGoods(type,page).then(res=>{
      //  console.log(res);
       for(let n of res.data.list){
         this.goods[type].list.push(n);
       }
           this.goods[type].page+=1;
     })
   }
 },
 activated(){
   this.$refs.scroll.scrollToTop(0,this.saveY,0)
   this.$refs.scroll.refresh()
 },
 deactivated(){
  //  保存Y值
   this.saveY=this.$refs.scroll.getScrollY();

   //取消全局bus监听事件
   this.$bus.$off("imageLoad",this.itemImgListener)
 }
}
</script>

<style lang="less" scoped>
#home{
  height: 100vh;
  position: relative;
  .nav-style{
    background-color:var(--color-tint);
    color: white;
    font-size: 18px;
  }
  .content{
    overflow:hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }
  .tabControl{
    position:relative;
    top:-1px;
    z-index:9999
  }
   
  
}
</style>