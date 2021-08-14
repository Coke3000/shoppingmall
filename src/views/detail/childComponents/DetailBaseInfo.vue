<template>
  <div id="detailBaseInfo" v-if="Object.keys(goodsBaseData).length!==0">
      <!-- title内容 -->
      <div class="title">{{goodsBaseData.title}}</div>
      <!-- 价格 -->
      <div class="price">
          <span class="newPrice">{{goodsBaseData.price}}</span>
          <span class="oldPrice">{{goodsBaseData.oldPrice}}</span>
          <span v-if="goodsBaseData.discountDesc!=''" class="discountText" :style="discountBgColor">{{goodsBaseData.discountDesc}}</span>
      </div>
      <!-- 销量 -->
      <div class="columns" >
          <span>{{goodsBaseData.columns[0]}}</span>
          <span>{{goodsBaseData.columns[1]}}</span>
          <span>{{goodsBaseData.services[goodsBaseData.services.length-1].name}}</span>
      </div>
      <!--七天无理由退货-->
      <div class="services">
          <div class="services-item" v-for="index in goodsBaseData.services.length-1" :key="index">
              <img :src="goodsBaseData.services[index-1].icon" alt="">
              <span>{{goodsBaseData.services[index-1].name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:{
         goodsBaseData:{
             type:Object,
             default(){
                 return {}
             }
         }
    },
    computed:{
        discountBgColor(){
            return {backgroundColor:this.goodsBaseData.discountBgColor}
        }
    }

}
</script>

<style lang="less" scoped>
    #detailBaseInfo{
        padding: 10px;
        padding-bottom: 10px;
        border-bottom: 5px solid #eee;
        .title{
            margin-top:5px;
            color:black;
        }
        .price{
            margin-top:8px;
            .newPrice{
                font-size: 24px;
                color: var(--color-high-text);
                margin-right:5px;
            }
            .oldPrice{
                font-size: 14px;
                text-decoration: line-through;
                color: #999;
                margin-right:5px;
            }
            .discountText{
                position: relative;
                bottom: 7px;
                display:inline-block;
                width: 70px;
                height: 23px;
                line-height: 23px;
                color: white;
                text-align: center;
                font-size: 12px;
                border-radius: 15px;
            }

        }
        .columns{
            padding-bottom: 5px;
            margin-top:10px;
            display: flex;
            justify-content:space-between;
            color: #999;
            font-size: 14px;
            border-bottom: 2px solid #eee;
        }
        .services{
            margin-top:20px;
            display:flex;
            justify-content: space-between;
            .services-item{
                font-size: 12px;
                color: #000;
                img{
                    width:10px;
                    height:10px;
                }
            }
        }

    }
</style>