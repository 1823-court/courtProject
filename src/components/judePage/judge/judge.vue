<template>
<div>
    <banner></banner>
    <div class='tab'>
          <router-link tag='div' to='/judge/heaving' active-class='sel'>已登报</router-link>
          
          <router-link tag='div' to='/judge/noHeaving' active-class='sel'>未登报</router-link>
         
    </div>   
    <router-view></router-view>

</div>
</template>

<script>
import Banner from 'components/common/banner/banner.vue'
import configApi from 'common/api/apiconfig.js'

export default {
    
    components:{
        Banner
    },
}
</script>

<style lang='less' scoped>
@import '~common/css/index.less';
.tab{
    .w(375);
    .h(35);
    color:@fontColorNormal;
    display: flex;
    font-size: @fontSize-l;
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
        background: @fontColorSelbg;
        color: @fontColorSel;
    }
}
</style>

