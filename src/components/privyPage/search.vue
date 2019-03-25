<template>
    <div id="search">
    <header>
        <span class="notice">公告查询</span>
        <input type="text" placeholder="请输入案号">
         <img class='ser' src="../../common/img/search.png">
    </header>
    <ul class="botm">
    <router-link tag="li" to="/privyindex" active-class='sel'>首页</router-link>
    <router-link tag="li" to="/privysearch" active-class='sel'>搜索</router-link>
    <router-link tag="li" to="/privymine" active-class='sel'>我的</router-link>
  </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import '../../common/css/index.less';
@import '../../common/font/myfont.css';
#search{
    .w(375);
    background: @mybgColor;
    position: absolute;
    top:0;
    bottom:0;  
 header{
   .w(340);
   .h(45);
   .l_h(45);
   margin:27px auto;
   background: #fff;
   font-size:@fontSize-m;
   .notice{
   .w(57);
   .h(45);
   margin-left: 8px; 
   margin-right: 8px;
   }
   input{
    .w(238);
   .h(28);
   .l_h(28);
   padding-left: 5px;
  font-size:@fontSize-s;
   }
  .ser{
    .w(20);
    .h(20);
    position: absolute;
    top:41px;
    right:54px;
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
