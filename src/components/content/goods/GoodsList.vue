<template>
  <div id="goodsList">
      <goods-list-item v-for="(item,index) in goodsList" :key="index" :goods-list-item="item">

      </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
    props:{
        goodsList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    }

}
</script>

<style lang="less">
    #goodsList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>