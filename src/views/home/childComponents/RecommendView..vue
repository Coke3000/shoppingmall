<template>
  <div class="recommend">
     <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
         <a :href="item.link">
             <img :src="item.image" alt="图片不见了">
             <div>{{item.title}}</div>
         </a>
     </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return [];
            }
        }
    }

}
</script>

<style lang="less">
.recommend{
    display: flex;
    text-align: center;
    padding:10px 0 20px;
    border-bottom: 8px solid #eee;
    font-size: 14px;
    .recommend-item{
        flex:1;
        img{
            width:80px;
            height: 80px;
            margin-bottom: 5px;
        }
    }
}
</style>