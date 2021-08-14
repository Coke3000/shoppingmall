<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    data(){
        return {
            scroll:null
            }
        },
    props:{
        probeType1:{
                type:Number,
                default:0
        },
        pullUpLoad1:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
    this.scroll=new BScroll(this.$refs.wrapper,{
        probeType:this.probeType1,
        click:true,
        pullUpLoad:this.pullUpLoad1
    });
    //监听滚动的位置
    this.scroll.on("scroll",position=>{
        this.$emit("showBackTop",position);
        this.$emit("scrollPositon",position)
    });

    //上拉加载更多
    this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp")
        this.scroll.finishPullUp();
    })
  },
  methods:{
      scrollToTop(x,y,time=500){
          this.scroll.scrollTo(x,y,time)
      },
      refresh(){
         this.scroll.refresh();
      },
      getScrollY(){
         return this.scroll.y;
      }
  }
}
</script>

<style>

</style>