<template>
  <div id="wrap">
    <img class="sousuo" src="../../../common/img/sousuo.png" alt>
    <input type="text" placeholder="请输入查询案号" class="commoninput">
    <img class="xiaoxi" src="../../../common/img/xiaoxi.png" alt>
  </div>
</template>

<style lang="less" scoped>
@import "../../../common/css/index.less";
#wrap {
  .w(375);
  .sousuo {
    position: absolute;
    top: 17px;
    left: 18px;
    z-index: 1202;
  }
  .commoninput {
    border: 0;
    outline: 0;
    position: absolute;
    top: 12px;
    left: 10px;
    padding-left: 29px;
    z-index: 1200;
    .w(306);
    .h(30);
    // background: #fff;
    opacity: 0.3;
    border-radius: 5px;
  }
  ::-webkit-input-placeholder {
    font-size: @fontSize-m;
    color: #666;
  }
  .xiaoxi {
    position: absolute;
    top: 12px;
    right: 14px;
    z-index: 1200;
  }
}
</style>
