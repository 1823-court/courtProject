<template>
    <div class="tab">
        <router-link tag='div' to='/judge' active-class='sel'>
        <img src="../../../common/img/1.png" alt="" class='sel_img_show'>
        <img src="../../../common/img/1@2x.png" alt="" class='sel_img'>
        首页</router-link>
        
        <router-link tag='div' to='/search' active-class='sel'>
        <img src="../../../common/img/2.png" alt="" class='sel_img_show'>
        <img src="../../../common/img/2@2x.png" alt="" class='sel_img'>     
         搜索</router-link>

         <router-link tag='div' to='/upload' active-class='sel'>
        <img src="../../../common/img/3.png" alt="" class='sel_img_show'>
        <img src="../../../common/img/3@2x.png" alt="" class='sel_img'>
        上传</router-link>

        <router-link tag='div' to='/mine' active-class='sel'>
        <img src="../../../common/img/4.png" alt="" class='sel_img_show'>
        <img src="../../../common/img/4@2x.png" alt="" class='sel_img'>
        我的</router-link>
       
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
    .h(54);
    color:#666;
    position: absolute;
    bottom: 0;
    z-index: 1;
    font-size: @fontSize-L;
    text-align: center;
    display: flex;
    justify-content: space-around;
    background: white;
     div{
        //.l_h(44);
        color: #666;
        //background: pink;
        font-size: 12px;
        img{
            .w(24);
            .h(24);
            margin: 4px 0;           
        }
        .sel_img_show{
             display:none; 
            }
    }
    .sel{
        .sel_img_show{
            display: block;
        }
        .sel_img{
            display: none;
        }
        color: #2493ed;
    }

}
</style>
