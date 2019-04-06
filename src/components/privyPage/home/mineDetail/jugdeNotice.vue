<template>
    <div id="contains">
        <router-view></router-view>
          <header>关于人民法院公告</header>
         <img src="../../../../common/img/arrow-left.png" class="icons" @click='back()'>
        <div class="wrap">
            <div class='pic1' ><img src="../../../../common/img/pic1.png"></div>
             <div class='pic2' ><img src="../../../../common/img/pic2.png"></div>
             <div class='pic3' ><img src="../../../../common/img/pic3.png"></div>
             <div class='pic4' ><img src="../../../../common/img/pic4.png"></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
          this.$router.go(-1);
        }
    } 
}
</script>

<style lang="less" scoped>
@import "../../../../common/css/index.less";
@import "../../../../common/font/myfont.css";
#contains{
    .w(375);
    position: absolute;
    top:0;
    bottom:0;
    z-index: 999;
  header{
   .w(375);
   .h(45);
   .l_h(45);
   text-align: center;
   background: rgb(175, 97, 49);
   color: #fff;
   font-size:@fontSize-xL;
   font-weight: 500;
   margin-bottom: 10px;
}
.icons {
      .w(24);
      .h(24);
      position: absolute;
      top:10px;
      left:5px;
    }
    .wrap{
     .w(375); 
     position: absolute;
     top:55px;
     bottom: 0;
     img{
      .w(375);    
     }
     .pic1{
        margin-top: -10px;
        .h(70); 
     }
     .pic2{
        .h(160);  
     }
     .pic3{
        .h(250);  
     }

    .pic4{
        // flex: 1;
     }
    }
    
}
</style>
