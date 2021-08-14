<template>
  <div>
 <swiper>
     <swiper-item v-for="(item,index) in banners" :key="index">
         <a :href="item.link">
             <img :src="item.image" alt="图片不见了" @load="swiperImageLoad">
         </a>
     </swiper-item>
 </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index.js"
export default {
    components:{
        Swiper,
        SwiperItem
    },
    data(){
        return {
            isLoad:false
        }
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        swiperImageLoad(){
            if(!this.isLoad){
                this.$emit("swiperImageLoad");
                this.isLoad=true;
            }
            
        }
    }

}
</script>

<style>

</style>