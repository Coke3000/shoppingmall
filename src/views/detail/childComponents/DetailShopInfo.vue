<template>
  <div id="detailShopInfo">
      <!-- 店铺头像和名称 -->
      <div class="logoAndName">
          <img :src="storeInformation.shopLogo" alt="">
          <span>{{storeInformation.name}}</span>
      </div>
      <div class='storeContent'>
      <!-- 总销量和宝贝数量 -->
      <div class="sellsAndGoods">
          <div class="sells">
              <p>{{storeInformation.cSells | becomeTenThousand}}</p>
              <span>总销量</span>
          </div>
          <div class="goods">
              <p>{{storeInformation.cGoods}}</p>
              <span>全部宝贝</span>
          </div>
      </div>
      <!-- 店铺各项评价 -->
      <div class="score">
          <table>
              <tr v-for="(item,index) in storeInformation.score" :key="index">
                  <td>{{item.name}}</td>
                  <td :style="{color:item.isBetter ? 'red' : 'green'}">{{item.score}}</td>
                  <td class="better" :style="{background:item.isBetter ? '#f13e3a' : '#5ea732'}">{{item.isBetter?'高':'低'}}</td>
              </tr>
          </table>
      </div>
      </div>
       <div class="inShop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
         storeInformation:{
             type:Object,
             default(){
                 return {}
             }
         }
    },
    filters:{
        becomeTenThousand(num){
            return (num/10000).toFixed(1)+"万"
        }
    }

}
</script>

<style lang="less" scoped>
    #detailShopInfo{
        padding-bottom: 30px;
        border-bottom:5px solid #eee;
        .logoAndName{
            margin: 20px 10px;
            display: flex;
            align-items:center;
            img{
                width:50px;
                height:50px;
                border-radius:50%
            }
            span{
                font-size: 17px;
                padding-left: 10px;
            }
        }
        .storeContent{
            display: flex;
            margin:0px 25px;
            .sellsAndGoods{
                 display: flex;
                 align-items: center;
                 color:black;
            .sells{
                text-align: center;
                 margin-right: 30px;
                p{
                    font-size: 20px;
                }
                span{
                    font-size: 12px;
                }
            }
            .goods{
                text-align: center;
                padding-right:25px;
                border-right: 1px solid rgba(0,0,0,.1);
                 p{
                    font-size: 20px;
                }
                span{
                    font-size: 12px;
                }
            }
          }
          .score{
             margin-left: 15px;
             font-size: 14px;
             color: #333;
             td{
                 padding: 3px; 
             }
             .better{
                 color:white;
             }
          }
        }
        .inShop{
          margin-top:20px;
          text-align: center;
          span{
              padding: 10px 30px;
              background-color: #f2f5f8;
              border-radius: 10px;
              font-size: 14px;
              color: #333;
           }
        }
    }
</style>