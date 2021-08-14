<template>
  <div id="cartListItem">
      <check-box :isCheck="product.isCheck" @click.native="change(product.iid)"></check-box>
      <div class="goodsImg">
          <img :src="product.image" alt="">
      </div>
      <div class="goodsText">
           <p class="goodstitle">{{product.title}}</p>
           <p class="goodsdesc">{{product.desc}}</p>
           <div class="countPrice">
               <span class="price">￥{{product.price}}</span>
               <span class="count">x{{product.count}}</span>
           </div>
      </div>
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue'
export default {
  components: {
     CheckBox,
    },
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        change(iid){
            this.$store.commit("changeCheck",iid)
        }
    }

}
</script>

<style lang="less" scoped>
    #cartListItem{
        padding:10px;
        border-bottom: 2px solid #eee;
        display: flex;
        justify-content:space-between;
        align-items: center;
        .goodsImg{
            img {
                width:80px;
                height: 100px;
                border-radius: 5px;
            }
        }
        .goodsText{
            width:65%;
            p{
               padding-bottom: 18px;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
            }
            .goodstitle{
                font-size: 16px;
                color:#333;
            }
            .goodsdesc{
                font-size: 13px;
                color:#666;
            }
            .countPrice{
                display: flex;
                justify-content: space-between;
                .price{
                     color: #ff4500;
                     font-size: 18px;
                }
                .count{
                    font-size: 18px;
                    color: #333333;
                    padding-right: 10px;
                }
            }
        }
    }
</style>