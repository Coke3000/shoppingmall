<template>
    <div id="detail">
        <detail-nav-bar @titleClick="titleClick" ref="navBar"></detail-nav-bar>
        <scroll class="content" ref="scroll" @scrollPositon="scrollPosition" @showBackTop="hideBackTop" :probeType1="3">
        <detail-swiper :topImages="topImage"></detail-swiper>
        <detail-base-info :goodsBaseData="goodsBaseData"></detail-base-info>
        <detail-shop-info :storeInformation="storeInformation"></detail-shop-info>
        <detail-dress-effect :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-dress-effect>
        <detail-item-params :paramsInfo="paramsInfo" ref="params"></detail-item-params>
        <detail-comment-info :rate="rate" ref="comment"></detail-comment-info>
        <div class="goodsRecommend">
            <p>推荐商品</p>
            <goods-list :goodsList="recommend" ref="recommend"></goods-list>
        </div>
        </scroll>
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
        <back-top @click.native="backTopClick" v-show="isShow"></back-top>
    </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar.vue';
import DetailSwiper from './childComponents/DetailSwiper.vue';
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue';
import DetailShopInfo from './childComponents/DetailShopInfo.vue';
import Scroll from "components/common/scroll/Scroll.vue"
import DetailDressEffect from './childComponents/DetailDressEffect.vue';

import {getGoodsDetail,GetDetailBaseData,GetDetailShopInfo,GetItemParams,getRecommend} from "network/detail.js"
import DetailItemParams from './childComponents/DetailItemParams.vue';
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import {itemListenerMixin,backTopMixin} from "common/mixin.js"
import DetailBottomBar from './childComponents/DetailBottomBar.vue';
export default {
    name:"Detail",
    data(){
        return {
            iid:null,
            topImage:[],
            goodsBaseData:{},
            storeInformation:{},
            detailInfo:{},
            paramsInfo:{},
            rate:{},
            recommend:[],
            themeTopYs:[],
            currentIndex:0
        }
    },
    mixins:[itemListenerMixin,backTopMixin],
    created(){
        this.iid=this.$route.query.iid;
        //网络请求商品详情页面数据
        getGoodsDetail(this.iid).then(res=>{
        const data=res.result;
        //获取商品详情页面轮播图数据
        this.topImage=data.itemInfo.topImages;
        //获取商品基本信息
        this.goodsBaseData=new GetDetailBaseData(data.itemInfo,data.columns,data.shopInfo);
        //获取店铺信息
        this.storeInformation=new GetDetailShopInfo(data.shopInfo);
        //获取穿着效果信息
        this.detailInfo=data.detailInfo;
        //获取尺码信息
        this.paramsInfo=new GetItemParams(data.itemParams)
        //获取评论信息
        this.rate=data.rate;
        })
    
        //网络请求商品推荐数据 
        getRecommend().then(res=>{
            this.recommend=res.data.list;
            // console.log(res);
        })
    },
    mounted(){

    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailDressEffect,
        DetailItemParams,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar
    },
    
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh();
            //当图片加载完以后获取各组件offsetTop
            this.themeTopYs=[];
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            this.themeTopYs.push(Number.MAX_VALUE);
            //  console.log(this.themeTopYs);
        },
        //点击头部导航跳转到对应位置
        titleClick(index){
            this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],500)
        },
        //滚动不同部分，相应的navbar改变
        scrollPosition(position){
            let positionY=-position.y;
            for(let i=0;i<this.themeTopYs.length-1;i++){
                if(this.currentIndex!=i&&(positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])){
                    this.currentIndex=i;
                }
            }
            this.$refs.navBar.currentIndex=this.currentIndex;
        },

        //将商品添加到购物车
        addToCart(){
            const product={
                 title : this. goodsBaseData.title,
                 desc : this. goodsBaseData.desc,
                 iid : this.iid,
                 image : this.topImage[0],
                 price:this.goodsBaseData.lowNowPrice
            }
            //将信息传到vuex的actions进行处理
            this.$store.dispatch("addCart",product).then(res=>{
                this.$toast.show(res,1000)
            })
        }
    },
    destroyed(){
       //取消全局bus监听事件
      this.$bus.$off("imageLoad",this.itemImgListener)
    }
}
        
</script>

<style lang="less" scoped>
    #detail{
        position: relative;
        z-index:99999;
        background-color: white;
        height: 100vh;
        .content{
            height:calc(100% - 44px - 49px);
            overflow: hidden;
            .goodsRecommend{
                padding-top:10px;
                p{
                    padding-left: 10px;
                    padding-bottom: 10px;
                }
            }
        }
    }

</style>