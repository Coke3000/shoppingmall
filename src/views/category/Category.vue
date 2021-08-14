<template>
  <div id="category">
    <!-- 导航条 -->
    <nav-bar class="navBar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 左侧栏 -->
    <scroll class="left-content">
    <category-left-nav :categoryData="categoryData" @leftItemClick="leftItemClick"></category-left-nav>
    </scroll>
    <!-- 右侧栏上部分 -->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClickOption" class="tabControl" v-show="isTabControlFixed" ref="tabControl1"></tab-control>
    <scroll class="rightTop-content" ref="scroll" @showBackTop="hideBackTop" :probeType1="3" @scrollPositon="isAboutTabControl">
    <category-right-goods :subCategory="subCategory[currentIndex]" ></category-right-goods>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClickOption" ref="tabControl2"></tab-control>
    <goods-list :goodsList=" categoryDetailList"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getCategory,getSubcategory,getCategoryDetail} from "network/category.js"
import CategoryLeftNav from './childComponents/CategoryLeftNav.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import CategoryRightGoods from './childComponents/CategoryRightGoods.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import {backTopMixin} from "common/mixin.js"
export default {
  data(){
    return {
      categoryData:[],
      currentIndex:0,
      subCategory:[],
      categoryDetailList: [],
      isTabControlFixed:false,
    }
  },
  mixins:[backTopMixin],
  components:{
    NavBar,
    CategoryLeftNav,
    Scroll,
    CategoryRightGoods,
    TabControl,
     GoodsList 

  },
  created(){
    //获取数据
    this.getCategoryData();
  },
  methods:{
    //网络请求获取数据
    getCategoryData(){
      getCategory().then(res=>{
        //  console.log(res)
         this.categoryData=res.data.category.list;
         //首次获取右边上部分内容
         getSubcategory(this.categoryData[this.currentIndex].maitKey).then(res=>{
        //  console.log(res)
         this.subCategory[this.currentIndex]=res.data.list
        })
        //首次获取右边下部分内容
        getCategoryDetail(this.categoryData[this.currentIndex].miniWallkey,'pop').then(res=>{
          // console.log(res)
          this.categoryDetailList=res;
        })
      })
    },
    leftItemClick(index){
      //每次点击新的选项回到最上面
      this.$refs.scroll.scrollToTop(0,0,1)
      this.currentIndex=index;
      //获取右边上部分内容
      getSubcategory(this.categoryData[this.currentIndex].maitKey).then(res=>{
         this.subCategory[this.currentIndex]=res.data.list
         //获取完数据让组件强制刷新
         this.$forceUpdate();
      });
      //获取右边下部分内容
        getCategoryDetail(this.categoryData[this.currentIndex].miniWallkey,'pop').then(res=>{
          // console.log(res)
          this.categoryDetailList=res;
        })
    },
     tabClickOption(index){
        const titles = ['pop','new','sell']
         getCategoryDetail(this.categoryData[this.currentIndex].miniWallkey,titles[index]).then(res=>{
          // console.log(res)
         this.categoryDetailList=res;
        })

        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
   },
   isAboutTabControl(position){
     this.isTabControlFixed= -position.y>this.$refs.tabControl2.$el.offsetTop?true:false;
   }
  },
  

    }
</script>

<style lang="less" scoped>
    #category{
      height: 100vh;
      position: relative;
      .navBar{
         background-color: var(--color-tint);
         color: white;
         font-size: 18px;
      }
      .left-content{
        height:calc(100% - 44px - 49px);
        overflow:hidden;
      }
      .rightTop-content{
        position: absolute;
        top:45px;
        right: 0px;
        left: 100px;
        bottom: 49px;
        overflow: hidden;
      }
      .tabControl{
        position:absolute;
        left: 100px;
        right: 0px;
        top:44px;
        z-index:99;
      }

    }
</style>