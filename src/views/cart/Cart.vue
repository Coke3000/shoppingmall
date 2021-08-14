<template>
  <div id="cart">
    <!-- 顶部导航 -->
    <nav-bar class="header">
      <div slot="center">
        购物车({{getCartListLength}})
      </div>
    </nav-bar>
    <!-- 内容 -->
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <!-- 结算部分 -->
    <div class="calcItem">
      <div class="checkBox">
        <check-box class="checkAll" :isCheck="isCheckAll" @click.native="checkAllClick"></check-box>
         <span>全选</span>
      </div>
      <div class="totalPrice">合计：{{getTotalPrice}}</div>
      <div class="submitOrders">提交订单({{getTotalCount}})</div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {mapGetters} from "vuex"
import Scroll from 'components/common/scroll/Scroll.vue'
import CartList from './childComponents/CartList.vue'
import CheckBox from './childComponents/CheckBox.vue'
export default {
  data(){
    return {
      isAllCheck:false
    }
  },
  components:{
    NavBar,
    Scroll,
    CartList,
    CheckBox
  },
    
  computed:{
    ...mapGetters(["getCartListLength","getCartList"]),
    getTotalPrice(){
      return "￥" +this.getCartList.filter(item=>{
        return item.isCheck==true
      }).reduce((preValue,n)=>{
        return preValue+(n.price*n.count)
      },0).toFixed(2)+"元"
    },
    getTotalCount(){
      return this.getCartList.filter(item=>{
        return item.isCheck==true;
      }).reduce((preValue,n)=>{
        return preValue+n.count
      },0)
    },
    isCheckAll(){
      let result= this.getCartList.filter(item=>{
         return item.isCheck==true;
      })
      if(result.length==this.getCartListLength&&this.getCartListLength!=0)
      {
        this.isAllCheck=true;
        return true;
      }else{
        this.isAllCheck=false;
        return false;
      }
    }
    
  },
  methods:{
    checkAllClick(){
      if(this.isAllCheck){
        this.$store.commit("checkToFalse")
      }else{
        this.$store.commit("checkToTrue")
      }
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  }

}
</script>

<style lang="less" scoped>
  #cart{
    height: 100vh;
    .header{
      background-color: var(--color-tint);
      color: white;
      font-size: 18px;
    }
    .content{
      height: calc(100% - 44px - 49px - 49px);
      overflow: hidden;
    }
    .calcItem{
      border-top: 1px solid rgb(204, 203, 203);
      padding: 10px 0px;
      width:100%;
      height: 49px;
      line-height: 49px;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .checkBox{
        display: flex;
        align-items: center;
        .checkAll{
          padding-top: 7px;
          margin:0px 10px;
        }
      }
      .submitOrders{
        width: 30%;
        text-align: center;
        background-color: var(--color-high-text);
        color:white;
      }
    }
  }
</style>