<template>
  <div id="commentInfo" v-if="Object.keys(rate).length!=0&&rate.cRate!=0">
      <!-- 用户评价头部-->
      <div class="header">
          <p>用户评价</p>
          <div class="more">
              <a href="#">更多</a>
              <img src="~assets/img/detail/back.png" alt="">
          </div>
      </div>
    <!-- 用户评价内容 -->
    <div class="commentContent">
        <div class="user" v-if="rate.list[0].user">
            <img :src="rate.list[0].user.avatar" alt="">
            <p>{{rate.list[0].user.uname}}</p>
        </div>
        <div class="contentInfo">
            <p>{{rate.list[0].content}}</p>
            <div class="timeAndStyle">
                <span>{{rate.list[0].created | changeTime}}</span>
                <span>{{rate.list[0].style}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils.js"
export default {
    props:{
        rate:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        changeTime(value){
            const time=new Date(value*1000)
            return formatDate(time,'yyyy-MM-dd')
      }
    }

}
</script>

<style lang="less" scoped>
    #commentInfo{
        padding: 10px;
        padding-bottom:10px;
        border-bottom:5px solid #eee;
        .header{
            display: flex;
            padding-bottom: 10px;
            justify-content: space-between;
            border-bottom: 1px solid hsla(0,0%,39.2%,.1);
            p{
                font-size: 16px;
                color:black;
            }
            .more{
                img{
                    width:15px;
                    height:15px;
                }
            }
        }
        .commentContent{
            padding-top:10px;
            .user{
                display:flex;
                align-items: center;
                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    margin-right: 10px;;
                }
            }
            .contentInfo{
                padding-top:10px;
                p{
                    font-size: 14px;
                    color: #777;
                }
                .timeAndStyle{
                    padding-top:10px;
                    font-size:12px;
                    span{
                        margin-right:10px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>