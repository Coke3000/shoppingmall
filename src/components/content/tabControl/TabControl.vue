<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="itemClick(index)">
          <span :style="isAct(index)" :class="{boderStyle:currentIndex==index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex:0,
            fontColor:"#ff5777"
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods:{
        isAct(index){
            return this.currentIndex==index?{color:this.fontColor}:{}; 
        },
        itemClick(index){
            this.currentIndex=index;
            this.$emit("tabClick",index)
        }
    }

}
</script>

<style lang="less">
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color:white;
    .tab-control-item{
        flex:1;
    .boderStyle{
        padding: 5px;
        border-bottom: 2px solid var(--color-high-text);
    }
    }
}

</style>