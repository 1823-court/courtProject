<template>
    <div class="tab">
        <router-link
        tag='div'
        to='/judge'
        active-class='sel'
        >首页</router-link>
         <router-link
        tag='div'
        to='/search'
        active-class='sel'
        >搜索</router-link>
         <router-link
        tag='div'
        to='/upload'
        active-class='sel'
        >上传</router-link>
         <router-link
        tag='div'
        to='/mine'
        active-class='sel'
        >我的</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
@import '~common/css/index.less';
.tab{
    .w(375);
    .h(44);
    color:@fontColorWO;
    position: absolute;
    bottom: 0;
    z-index: 1;
    font-size: @fontSize-l;
    text-align: center;
    display: flex;
    justify-content: space-around;
    background: white;
     div{
        .l_h(44);
        color: black;
    }
    .sel{
        //border-bottom: 2px solid red;
        color: red;
    }
}
</style>
