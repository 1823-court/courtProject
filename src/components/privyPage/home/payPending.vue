<template>
  <div id="contains">
    <p class="time">2017-06-06</p>
    <div class="content" @click="goDetail()">
      <img src="../../../common/img/pic1.jpg">
      <div class="tit">
      <h4>公告名称：公司法人变更</h4>
      <p>公告类别：开庭传票</p>
      <p>案号（2017）桂0620民初668号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>当事人：张三三</span></p>
      </div>
      <span class="iconfont">&#xe64a;</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
   methods: {
    goDetail(){
     this.$router.push({name:'payPendingDetail'})
    }
  },
  components:{

  },
  created() {

  },
}
</script>

<style lang="less" scoped>
@import '../../../common/css/index.less';
@import '../../../common/font/myfont.css';
#contains{
  margin-top: 7px;
  margin-bottom: 7px;
.time{
  .w(90);
  .h(25);
  .l_h(25);
  text-align: center;
  background: #fff;
  border-radius: 8px;
  margin: 0 auto;
  font-size:@fontSize-s;
  color:@fontColornormal;
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
.iconfont{
  .w(15);
  .h(15);
  position: relative;
  top:16px;
}

</style>
