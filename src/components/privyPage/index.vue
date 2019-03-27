<template>
  <div id="wraps">
     <div class="head">
     <router-link tag="div" to="/privyindex/payPending" active-class='sels'>待付费</router-link>
     <router-link tag="div" to="/privyindex/noticing" active-class='sels'>待付费公告</router-link>
     <router-link tag="div" to="/privyindex/noticed" active-class='sels'>已公告</router-link>
     </div>
    <router-view></router-view>
  <ul class="botm">
    <router-link tag="li" to="/privyindex" active-class='sel'>首页</router-link>
    <router-link tag="li" to="/privysearch" active-class='sel'>搜索</router-link>
    <router-link tag="li" to="/privymine" active-class='sel'>我的</router-link>
  </ul>
   </div>
</template>

<script>


export default {
 
  components:{
   
  }
}
</script>

<style lang="less" scoped>
@import '../../common/css/index.less';
#wraps{
  .w(375);
  position: absolute;
  top:0;
  bottom:0;
  background: @mybgColor;
  .head{
     .w(375);
     .h(35);
     .l_h(35);
     font-size:@fontSize-m;
     color:@fontColornormal;
     background: @whiteColor;
     display: flex;
     div{
      .w(130);
      text-align: center; 
     }
     .sels{
       background: @fontbgColor;
       color:#fff;
     }
  }
  .botm{
    .w(375);
    .h(45);
    position: fixed;
    bottom:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #f8f8f8;
    border-top: 1px solid #bbb;
    .sel{
      color: rgb(229, 28, 35);
    }
    li{
      font-size:@fontSize-L;
     color:@fontColornormal;
    }
  }
}
</style>
