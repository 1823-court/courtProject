<template>
  <div class="drag">
    <div class="header">
      <div>
        <div class="button" @click="goBack()">
          <img src="../../../../common/img/arrow-left.png" class="icons">
        </div>
        <div class="title">{{title}}</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_left" @click="goBackTo()">{{tabOne}}</div>
      <div class="footer_right" @click="goBackOk()">{{tabTwo}}</div>
    </div>
    <br>
    <div class="quotations">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        如果你无法简洁的表达你的想法, 那只说明你还不够了解它。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;——阿尔伯特·爱因斯坦 ​​​​
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "法官注册协议",
      single: false,
      tabOne: "不同意",
      tabTwo: "同意"
    };
  },
  methods: {
    goBackOk() {
      // alert('等待跳转')
      this.$router.push("/registerJudge");
    },
    goBackTo() {
      // alert('请同意')
      this.$router.go(-1);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped="">
@import "../../../../common/css/index.less";
.quotations {
  margin-top: 200px;
  font-size: 18px;
}
.drag {
  position: fixed;
  top: 0;
  bottom: 0;
  .w(375);
  background: #fff;
  font-size: 16px;

  .header {
    .w(375);
    .h(50);
    color: #fff;
    background: #3297f5;
    .title {
      font-size: @fontSize-xL;
    }
    .l_h(50);
    text-align: center;

    .button {
      position: absolute;
      left: 20px;
      .icons {
        .w(10);
        .h(10);
        position: absolute;
        .top(20);
        .left(24);
      }
    }
  }
  .footer {
    .w(375);
    .h(50);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    background: #3297f5;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #ccc;
    .footer_left,
    .footer_right {
      .w(287);
      .h(50);
      text-align: center;
      .l_h(50);
    }
    .footer_left {
      border-right: 1px solid #ccc;
    }
  }
}
</style>
