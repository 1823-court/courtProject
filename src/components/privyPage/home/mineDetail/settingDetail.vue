<template>
    <div id="contains">
        <router-view></router-view>
          <header>设置</header>
         <img src="../../../../common/img/arrow-left.png" class="icons" @click='back()'>
         <ul class="wrap">
        <li @click="updateName()">修改用户名</li><div id='iconfont2'><span class="iconfont">&#xe64a;</span></div>
        <li @click="psdReset()">密码重置</li><div id='iconfont3'><span class="iconfont">&#xe64a;</span></div>
        <li @click="changeNum()">更换手机号</li><div id='iconfont4'><span class="iconfont">&#xe64a;</span></div>
         </ul>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
          this.$router.go(-1);
        },
    updateName(){  
        console.log(this);       
        this.$router.push({name:'updateName'})
    },
    psdReset(){
        this.$router.push({name:'psdReset'})
    },
    changeNum(){
       this.$router.push({name:'changeNum'})
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
    background:#fff;
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
 li{
.h(40);
.l_h(40);
border-bottom: 1px solid #ddd;
 font-size:@fontSize-m;
 color:#000;
 margin-bottom: 10px;
 padding-left: 24px;

 }
  #iconfont2{
  .w(40);
  .h(40);
   position: absolute;
   top:39px;
   right:0px;
 }
  #iconfont3{
  .w(40);
  .h(40);
   position: absolute;
   top:92px;
   right:0px;
 }
 #iconfont4{
  .w(40);
  .h(40);
   position: absolute;
   top:140px;
   right:0px;
 }
}
}
</style>
