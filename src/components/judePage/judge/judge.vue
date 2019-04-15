<template>
<div>
    <header>
        <div class="search">
            <img src="../../../common/img/search@2x.png" alt="">
            <input type="text" placeholder="请输入案号">
        </div>
        <div class="notice">
            <img src="../../../common/img/notice@2x.png" alt="">
        </div>
    </header>
    <!-- <img src="../../../common/img/banner@2x.png" class="banner"/> -->
    <banner></banner>
    <div class='nav'>
          <router-link tag='div' to='/judge/heaving' active-class='sel'>已登报</router-link>
          
          <router-link tag='div' to='/judge/noHeaving' active-class='sel'>未登报</router-link>
         
    </div>   
    <router-view></router-view>
     <tab/>
</div>
</template>

<script>
import configApi from 'common/api/apiconfig.js'
import Tab from '../../common/tab/tab'
import Banner from './banner/banner.vue'
export default {
    
    components:{
		Tab,
        Banner,
    },
}
</script>

<style lang='less' scoped>
@import '~common/css/index.less';
header{
    z-index: 2;
    position: relative;
    background: red;
    .search{
    //background: pink;
    // .w(375);
    position: absolute;
    .margin(0,0,0,20);
    input{
        .w(306);
        .h(30);
        background: rgba(225,225,225,0.5);
        border-radius: 8px;
        border: 0;
        .t_i(36);
        outline: none;
        .margin(20,0,0,0);
    }
    img{
       .w(20);
       .h(20); 
       position: absolute;
       .top(27);
      .margin(0,0,0,10);
    }
}
.notice{  
    img{
        .w(20);
       .h(20);
       display: inline-block;
       position: absolute;
       .right(15);
       .top(25);
    }
}
}
.nav{
    .w(375);
    //.h(35);
    color:@fontColornormal;
    display: flex;
    font-size: @fontSize-L;
    text-align: center;
    justify-content: space-around;
    font-weight: 800;
    .padding(5,5,5,5);
    background: white;
    div{
        background: white;  
        .w(62);
        .h(35);
        .l_h(35);
    }
    .sel{
        background: @mybgColor;
        color:#2493ed;
        border-bottom :2px solid #2493ed;
        background: white;    
    }
}
</style>

