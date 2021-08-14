<template>
  <div id="itemParams">
     <!-- 尺码说明 -->
     <div>
         <p>{{paramsInfo.sizeParameters}}</p>
         <table class="tableRule" v-for="(tableItem,tableIndex) in paramsInfo.rule" :key="tableIndex">
           <tr class="trRule" v-for="(trItem,trIndex) in tableItem" :key="trIndex">
               <td v-for="(tdItem,tdIndex) in trItem" :key="tdIndex">
                   {{tdItem}}
               </td>
           </tr>
         </table>
     </div>
     <!-- 产品参数 -->
     <div class="info">
         <p>{{paramsInfo.productParameters}}</p>
         <table class="infoTable">
             <tr v-for="(item,index) in paramsInfo.info" :key="index" class="infoTr">
                 <td class="infoTdkey">{{item.key}}</td>
                 <td class="infoTdValue">{{item.value}}</td>
             </tr>  
         </table>
     </div>
     <!-- 图片 -->
     <div>
         <img :src="paramsInfo.image" alt="" style="width: 100%">
     </div>
  </div>
</template>

<script>
export default {
    props:{
        paramsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }

}
</script>

<style lang="less" scoped>
    #itemParams{
        padding:10px;
        padding-bottom: 20px;
        border-bottom:5px solid #eee;
        width: 100%;
        .tableRule{
            width:100%;
            .trRule{
                display: flex;
                width: 100%;
                font-size: 14px;
                border-bottom: 1px solid hsla(0,0%,39.2%,.1);
                td{
                    padding: 10px 0;
                    width: 20%;
                }
            }
        }
        .info{
            margin-top:10px;
        .infoTable{
            padding-top:10px;
            width:100%;
            .infoTr{
                display: flex;
                width:100%;
                font-size: 14px;
                border-bottom: 1px solid hsla(0,0%,39.2%,.1);
                td{
                    width:30%;
                    padding: 10px 0;
                }
                .infoTdValue{
                    flex:1;
                    color: #eb4868;
                }
            }
        }
      }
    }

</style>