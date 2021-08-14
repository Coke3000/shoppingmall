<template>
  <div id="detailDressEffect">
      <div class="detailDesc">
        <div class="desc_before"></div>
             {{detailInfo.desc}}
         <div class="desc_after"></div>
      </div>
      <div class="detailImage" v-for="(item,index) in detailInfo.detailImage" :key="index">
          <p>{{item.key}}</p>
          <div v-for="(item2,index2) in item.list" :key="index2">
              <img :src="item2" alt="" @load="imageLoad">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data() {
            return {
                imgNum:0,
            }
        },
    methods:{
        imageLoad(){
            const imageLength=this.detailInfo.detailImage[0].list.length;
            if(++this.imgNum === imageLength){
                this.$emit("imageLoad")
            }

        }
    }

}
</script>

<style lang="less" scoped>
    #detailDressEffect{
        .detailDesc{
            padding: 10px;
            font-size: 14px;
            .desc_before{
                width: 90px;
                height: 1px;
                position: relative;
                background-color: #666666;
                margin-bottom:15px;
                margin-top: 10px;
                &::before{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    bottom: 0;
                    width: 5px;
                    height: 5px;
                    background-color: black;
                }
             }
            .desc_after{ 
                position: relative;
                left: 75%;
                width: 90px;
                height: 1px;
                background-color: #666666;
                margin-bottom:15px;
                margin-top: 10px;
                &::after{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    bottom: 0;
                     right: 0;
                    width: 5px;
                    height: 5px;
                    background-color: black;
                 }
            }
        }
        .detailImage{
            padding:5px 10px;
            img{
                padding-top:10px;
                width:100%;
            }
        }
    }
</style>