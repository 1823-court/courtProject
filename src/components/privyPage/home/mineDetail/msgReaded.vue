<template>
  <div id="contains">
    <ul class="msgReaded">
      <li>
        <div class="top"><span>已登报</span><span class="times">2019-08-30</span></div>
        <div class="content">晚点去股份个人任务分为非非非我和覅武汉佛凤凰网发货未付浮球阀玩儿体育分工会尽快是东方去股份个人任务分为非非非我和覅武汉国际</div>
        <span class='man'>---斯皮尔伯格</span>
      </li>
      <li>
        <div class="top"><span>已登报</span><span class="times">2019-08-30</span></div>
        <div class="content">晚点去股份个人任务分为非非非我和覅武汉佛凤凰网发货未付浮球阀玩儿体育分工会尽快是东方去股份个人任务分为非非非我和覅武汉国际</div>
        <span class='man'>---斯皮尔伯格</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../../../../common/css/index.less";
@import "../../../../common/font/myfont.css";
#contains {
  .w(375);
  position: absolute;
  top: 104px;
  bottom: 0;
  .msgReaded {
    .w(375);
    li {
      .w(375);
      border-bottom: 2px solid #ddd;
      font-size: @fontSize-m;
      color: rgb(87, 82, 82);
    padding-left: 24px;
    padding-right: 24px;
      .top{
        .w(320);
        .h(30);
        .l_h(30);
          display: flex;
          justify-content:space-between;
      }
      .content{
         .w(320);
        .l_h(22); 
      }
      .man{
        .w(300);
        text-align: left;
        padding-left: 15px;
        display: inline-block;
        margin-top:10px ;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
