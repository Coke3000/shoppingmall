<template>
  <div id="profileList">
    <div class="list1">
      <div>
          <i class="el-icon-user-solid"></i>
          我的消息
      </div>
       <div>
          <i class="el-icon-s-shop"></i>
          积分商城
      </div>
       <div>
          <i class="el-icon-s-finance"></i>
          会员卡
      </div>
      </div>
      <div class="list2">
          <div>
            <i class="el-icon-s-goods"></i>
            我的购物车
          </div>
          <div>
            <i class="el-icon-star-on"></i>
            点赞购物APP
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    #profileList{
        .list1{
            .basis();
            border-bottom: 10px solid #eee;
        }
        .list2{
            .basis();
        }

    }

    .basis(){
        div{
            padding: 5px 0px;
            width:100%;
            height: 40px;
            line-height: 40px;
            background-color: white;
            border-bottom: 1px solid #eee;
            font-size: 15px;
            i{
               padding:0px 15px;
               font-size: 24px;
             }
        }
    }
</style>