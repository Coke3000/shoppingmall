<template>
  <div id="bottomBar">
  <div class="bottomInfo">
    <div class="customerService">
        <el-badge  class="item">
          <div><i class="el-icon-chat-dot-round"></i></div>
          <span>客服</span>
        </el-badge>
    </div>
    <div class="store">
        <el-badge  class="item">
          <div> <i class="el-icon-goods"></i></div>
          <span>店铺</span>
        </el-badge>
    </div>
    <div class="shopCart" @click="jumpToCart">
        <el-badge  :value="getCartListLength" class="item">
          <div>
              <i class="el-icon-shopping-cart-2"></i>
          </div>
           <span>购物车</span>
        </el-badge>
    </div>
  </div>
    <div class="option">      
            <div class="addCart"  @click="addCart">加入购物车</div>
            <div class="buy"  @click="goToBuy" >立即购买</div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex"
export default {
  methods:{
    addCart(){
      this.$emit("addToCart")
    },
    jumpToCart(){
      this.$router.replace("/cart")
    },
    goToBuy(){
      this.$toast.show("此功能暂未实现！",1200)
    }
  },
  computed:{
    ...mapGetters(['getCartListLength'])
  }

}
</script>

<style lang="less" scoped>
    #bottomBar{
        width:100%;
        display: flex;
        justify-content: space-around;
        position:fixed;
        bottom:0px;
        right: 0px;
        left: 0px;
        background-color:white;
        height: 49px;
        text-align: center;
        box-shadow: 0px -1px 10px rgb(173, 173, 173);
        .bottomInfo{
            display: flex;
            margin: 5px 10px;
             i{
                 font-size: 20px;
             }
            span{
                font-size: 12px;
            }
        }
        .option{
            margin: 8px;
            display: flex;
            div{
              width:90px;
              height:35px;
              line-height: 35px;
              text-align: center;
              font-size: 15px;
              color:white;
            }
            .addCart{
              border-radius:10px 0 0 10px;
              background-color:#EB989E;
            }
            .buy{
               border-radius:0px 10px 10px 0px;
               background-color:#ff5777;
            }
          
        }
    }
    .item{
      margin-right: 20px;
    }

</style>