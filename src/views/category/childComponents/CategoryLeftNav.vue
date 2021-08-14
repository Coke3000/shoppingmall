<template>
  <div id="leftNav">
     <div class="left-item" v-for="(item,index) in categoryData" :key="index" @click="leftItemClick(index)" :class="{active:currentIndex==index}">
       {{item.title}}
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    categoryData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    leftItemClick(index){
      this.currentIndex=index
      this.$emit("leftItemClick",index)
    }
  }


}
</script>

<style lang="less" scoped>
  #leftNav{
    width: 25%;
    background-color:#eee;
    .left-item{
      height:40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
    }
    .active{
      border-left: 2px solid #ff5777;
      font-size: 15px;
      background-color: white;
      color:#ff5777;
      font-weight: 666;
    }
  }
  
</style>