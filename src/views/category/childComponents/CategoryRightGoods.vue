<template>
  <div id="right-goods">
      <div class="right-goods-item" v-for="(item,index) in subCategory" :key="index">
          <img :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
         subCategory:{
             type:Array,
             default(){
                 return []
             }
         }
    }

}
</script>

<style lang="less" scoped>
    #right-goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .right-goods-item{
            width:30%;
            padding: 10px;
            img{
                width:100%;
            }
            .item-text{
                padding-top: 5px;
                font-size: 15px;
                text-align:center;
            }
        }
    }
</style>