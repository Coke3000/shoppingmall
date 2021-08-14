<template>
  <div id="checkBox">
      <img v-if="isCheck" class="checkImg" src="~assets/img/cart/check.png" alt="图片不见了">
      <img v-else class="unCheck" src="~assets/img/cart/unCheck.png" alt="图片不见了">
    </div>
</template>

<script>
export default {
    props:{
        isCheck:{
            type:Boolean,
            default:false
        }
    },
    methods:{
       
    }

}
</script>

<style  lang="less" scoped>
    #checkBox{
        .unCheck{
            width:22px;
            height: 22px;
            border: 2px solid #eee;
            border-radius: 50%;
        }
        .checkImg{
            width:22px;
            height: 22px;
            border-radius: 50%;
        }
    }

</style>