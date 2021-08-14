import {debounce} from "common/utils.js"
import BackTop from 'components/content/backTop/BackTop.vue'
export const itemListenerMixin={
    data(){
        return {
            itemImgListener:null,
        }
    },
    mounted(){
         //当商品图片加载完以后在事件总线中获取事件调用scroll的refresh方法
        const refresh=debounce(this.$refs.scroll.refresh,500)
        this.itemImgListener=()=>{
              refresh();
          }
        this.$bus.$on("imageLoad", this.itemImgListener)
     }
}

export const backTopMixin={
    data(){
        return {
            isShow:false,
        }
    },
    components:{
        BackTop 
    },
    methods:{
    /**
    * 回到顶部以及隐藏
    */
         backTopClick(){
             this.$refs.scroll.scrollToTop(0,0);
         },
         hideBackTop(position){
            this.isShow=-position.y>1000?true:false;
          },

    }
}