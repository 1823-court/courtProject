<template>
<div>
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
import Banner from 'components/common/banner/banner.vue'
import configApi from 'common/api/apiconfig.js'
import Tab from '../../common/tab/tab'
export default {
    
    components:{
        Banner,
		Tab
    },
}
</script>

<style lang='less' scoped>
@import '~common/css/index.less';
.nav{
    .w(375);
    .h(35);
    color:@fontColornormal;
    display: flex;
    font-size: @fontSize-L;
    text-align: center;
    justify-content: space-around;
    font-weight: 800;
    padding: 5px;
    div{
       // border-bottom: 2px solid @bgColor;
        .w(185);
        .h(35);
        .l_h(35);
    }
    .sel{
        background: @mybgColor;
        color:@selfontColor;
    }
}
</style>

