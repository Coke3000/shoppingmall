<template>
  <div id="goodsListItem" @click="goToDetial" >
   <img v-lazy="showImage" alt="图片不见了" @load="imageLoad">
   <div class="goodsInfo">
       <P>{{goodsListItem.title}}</P>
       <span class="price">{{goodsListItem.price}}</span>
       <span class="collection">{{goodsListItem.cfav}}</span>
   </div>
  </div>
</template>

<script>
export default {
    props:{
        goodsListItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imageLoad(){
            this.$bus.$emit("imageLoad");
        },
        goToDetial(){
            this.$router.push({
                path:"/detail",
                query:{
                    iid:this.goodsListItem.iid
                }
            })
        }
    },
    computed:{
        showImage(){
                //  return this.goodsListItem.show?this.goodsListItem.show.img:this.goodsListItem.image;
                if(this.goodsListItem.show || this.goodsListItem){
                    return this.goodsListItem.img || this.goodsListItem.image || this.goodsListItem.show.img 
                }
        }
    }

}
</script>

<style lang="less">
    #goodsListItem{
        width:48%;
        padding-bottom: 10px;
        img{
            width:100%;
            height: 280px;
            border-radius: 5px;
        }
        .goodsInfo{
            font-size: 14px;
            text-align: center;
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .price{
                margin-right: 10px;
                color:var(--color-high-text);
            }
            .collection::before{
                content:"⭐";
                font-size: abs(14px);
            }
        }
    }
</style>