<template>
  <div id="money">
      <div class="balance">
          <p>
             0.00
             <span>元</span>
          </p>
          <p class="text">我的余额</p>
      </div>
      <div class="coupons">
          <p>
              0
              <span>个</span>
          </p>
          <p class="text">我的优惠</p>
      </div>
       <div class="integral">
          <p>
              0
              <span>分</span>
          </p>
          <p class="text">我的积分</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    #money{
        padding-top: 5px;
        width:100%;
        height: 80px;
        background-color: white;
        display: flex;
        justify-content: space-around;
        text-align: center;
        .balance{
            .pAndSpan();
            padding:15px 25px;
            border-right: 1px solid #eee
        }
        .integral{
            .pAndSpan();
            padding:15px 25px;
        }
        .coupons{
             .pAndSpan();
              padding:15px 25px;
              border-right: 1px solid #eee
        }
    }

    .pAndSpan{
          p:first-child{
                color:orangered;
                font-size:24px;
                font-weight: 666;
                margin-bottom: 5px;
            }
            span{
                font-size: 14px;
                font-weight: normal;
                margin-left: 3px;
                margin-bottom: 3px;
                color: #666666;
            }
            .text{
                font-size: 14px;
            }
    }
</style>