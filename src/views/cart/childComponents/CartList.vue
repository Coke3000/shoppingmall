<template>
  <div id="cartList">
      <cart-list-item v-for="(item,index) in getCartList" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
import { mapGetters} from "vuex"
export default {
   components:{
       CartListItem
   },
   computed:{
       ...mapGetters(['getCartList'])
   }

}
</script>

<style>

</style>