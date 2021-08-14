<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false,
            message:""
        }
    },
    methods:{
        show(message,duration=1000){
            this.message=message;
            this.isShow=true;
            setTimeout(()=>{
                this.message="";
                this.isShow=false;
            },duration)
            
        }
    }

}
</script>

<style>
    .toast{
        position:fixed;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        padding:15px 20px;
        color:#fff;
        background-color: rgba(0,0,0,0.6);
        z-index: 999999;
        border-radius:5px;
    }
</style>