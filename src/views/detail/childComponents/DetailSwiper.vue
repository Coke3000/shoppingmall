<template>
  <div>
      <swiper class="detailSwiper">
          <swiper-item v-for="(item,index) in topImages" :key="index">
              <img :src="item" alt="图片不见了">
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
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }

}
</script>

<style scoped lang="less">
    .detailSwiper{
        width:100%;
        height: 250px;
    }

</style>