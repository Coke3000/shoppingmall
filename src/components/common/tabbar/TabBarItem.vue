<template>
<div id="tabBarItem" v-on:click="jump">
   <div v-if="!isAct" class="image"> 
      <slot name="image"></slot>
  </div>
  <div v-else class="imageAct">
      <slot name="imageAct"></slot>
  </div>
   <div class="text" :style="activeStyle">
       <slot name="text"></slot>
  </div>
</div>  
</template>

<script>
export default {
    props:{
        path:String,
        fontColor:{
            type:String,
            default:"red"
        }
    },
    methods:{
        jump(){
            if(this.$route.path!=this.path){
             this.$router.replace(this.path);
            } 
        }
    },
    computed:{
        isAct(){
            return this.$route.path==this.path
        },
        activeStyle(){
            return this.isAct?{color:this.fontColor}:{}
        }
    }

}
</script>

<style lang="less">
#tabBarItem{
    flex:1;
    text-align: center;
    font-size: 14px;
    img{
        width:23px;
        height: 23px;
        margin-top: 5px;
        vertical-align: middle;
    }
}
</style>