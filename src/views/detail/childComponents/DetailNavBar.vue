<template>
  <div id="detailNavBar">
      <nav-bar>
          <div slot="left" class="backImage" @click="back">
              <img src="~assets/img/detail/back.png" alt="图片不见了">
          </div>
          <div slot="center" class="title">
               <div class="title-item"  v-for="(item,index) in title" :key="index" @click="titleClick(index)" :class="{isActive:currentIndex==index}">
                {{item}}
            </div>
          </div>
     </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components:{
        NavBar
    },
    methods:{
        titleClick(index){
            this.currentIndex=index;
            this.$emit("titleClick",index)
        },
        back(){
            this.$router.back();
        }
    }
}
</script>

<style scoped lang="less">
    #detailNavBar{
        .backImage{
            margin-top: 7px;
            img{
                width: 25px;
                height: 25px;
            }
        }
        .title{
            display: flex;
            font-size: 14px;
            .title-item{
                flex:1
            }
            .isActive{
                color:var(--color-high-text);
            }
        }
        
    }
</style>