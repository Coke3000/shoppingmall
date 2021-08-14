<template>
  <div id="loginAndRegister">
      <div class="photo">
          <img src="~assets/img/profile/me.jpg" alt="图片不见了">
      </div>
      <div class="login-register">
          <div class="login">登录/注册</div>
          <div class="bingdingPhone">
              <i class="el-icon-mobile"></i>
              暂未绑定手机号
            </div>
      </div>
      <div class="arrow">
          <img src="~assets/img/profile/arrow_right.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    #loginAndRegister{
        padding:10px 15px;
        width:100%;
        height: 100px;
        background-color: var(--color-tint);
        display: flex;
        justify-content:space-between;
        align-items: center;
        .photo{
            width:60px;
            height: 60px;
            img{
                width:100%;
                border-radius: 50%;
            }
        }
        .login-register{
            flex: 2;
            margin-left:15px;
            .login{
                padding-bottom: 10px;
                font-size: 18px;
                color:white;
            }
            .bingdingPhone{
                font-size: 14px;
                color: white;
            }
        }
    }
</style>