<template>
    <div>
       <div id="search">
    <header>
        <span class="notice">公告查询</span>
        <input type="text" placeholder="请输入案号">
         <img class='ser' src="../../../common/img/search.png">
    </header>
    <article>
        <h5>已刊登的最新公告</h5>
      <div class="content" @click="goDetail()">
      <img src="../../../common/img/pic1.jpg">
      <div class="tit">
      <h4>公告名称：公司法人变更</h4>
      <p>公告类别：开庭传票</p>
      <p>案号（2017）桂0620民初668号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>当事人：张三三</span></p>
      </div>
      <span class="iconfont">&#xe64a;</span>
    </div>
      <div class="content" @click="goDetail()">
      <img src="../../../common/img/pic1.jpg">
      <div class="tit">
      <h4>公告名称：公司法人变更</h4>
      <p>公告类别：开庭传票</p>
      <p>案号（2017）桂0620民初668号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>当事人：张三三</span></p>
      </div>
      <span class="iconfont">&#xe64a;</span>
    </div>
      <div class="content" @click="goDetail()">
      <img src="../../../common/img/pic1.jpg">
      <div class="tit">
      <h4>公告名称：公司法人变更</h4>
      <p>公告类别：开庭传票</p>
      <p>案号（2017）桂0620民初668号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>当事人：张三三</span></p>
      </div>
      <span class="iconfont">&#xe64a;</span>
    </div>
    </article>
       </div>
      <tab/>
    </div>
</template>
  
<script>
  import Tab from '../../common/tab/tab'
  
export default {
     components:{
		 Tab
   },
     methods: {
    goDetail(){
     this.$router.push({name:'payPendingDetail'})
    }
  },
}
</script>

<style lang='less' scoped>
@import '~common/css/index.less';
@import '../../../common/font/myfont.css';
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
    article{
      .w(375);
      h5{
         .w(200);
         .h(24);
         margin:0 auto;
         text-align: center;
        font-size:@fontSize-L;
        color:red;
        font-weight: 400;
      }
      .content{
  .w(375);
  .h(72);
  margin-top: 8px;
  padding-top:10px;
  background: #fff;
  font-size:@fontSize-s;
  color:#000;
  display: flex;
  img{
  .w(60);
  .h(60);
  margin-right: 16px;
  }
  .tit{
    .l_h(20);
  }
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
  .iconfont{
    .w(20);
    .h(20);
    position: relative;
    top:20px;
  }
}
</style>