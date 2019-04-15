<template>
  <div class="box">
    <div class="modal">
      <div class="modalFrame">
        <div class="modalFT" v-show="dragone">
          <img src="../../common/img/icon2@2x.png" alt>
          <a @click="go()">我是法官</a>
        </div>
        <div class="circular" v-show="dragfirst">
          <div class="circular_r" @click="goDetail">注册</div>
          <div class="circular_l" @click="goJudge">登录</div>
        </div>
        <div class="modalFB" v-show="dragtwo">
          <img src="../../common/img/icon1@2x.png" alt>
          <a @click="goTo()">我是当事人</a>
        </div>
        <div class="circular" v-show="dragsecond">
          <div class="circular_r" @click="goPeople">注册</div>
          <div class="circular_l" @click="goParty">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      dragone: true,
      dragtwo: true,
      dragfirst: false,
      dragsecond: false
    };
  },
  methods: {
    handleAppear() {
      this.show = !this.show;
    },
    handleToggle(index) {
      this.$emit("handleToggle", index);
    },
    go() {
      console.log("跳转");
      this.dragone = !this.dragone;
      this.dragfirst = !this.dragfirst;
      this.dragtwo = true;
      this.dragsecond = false;
    },
    goTo() {
      console.log("跳转");
      this.dragtwo = !this.dragtwo;
      this.dragsecond = !this.dragsecond;
      this.dragone = true;
      this.dragfirst = false;
    },
    goDetail() {
      this.$router.push("/registerJudge");
    },
    goPeople() {
      this.$router.push("/registerParty");
    },
    goJudge() {
      this.$router.push("/LoginJudge");
    },
    goParty() {
      this.$router.push("/LoginParty");
    }
  }
};
</script>

<style lang="less" scoped="">
@import "../../common/css/index.less";
body,
html,
.box {
  width: 100%;
  height: 100%;
}
img {
  display: inline-block;
  .w(20);
  .h(20);
  margin-right: 10px;
}
.modal {
  .w(375);
  height: 100%;
  background: url(../../common/img/beijing@2x.png);
  -moz-background-size: 40% 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .modalFrame {
    .w(375);
    font-size: 16px;
    position: fixed;
    bottom: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .modalFT {
      .w(267);
      .h(37);
      background: #fff;
      .l_h(37);
      border-radius: 18px;
      a {
        color: #2493ed;
        display: inline-block;
      }
    }
    .circular {
      display: flex;
      flex-direction: row;
      .circular_r,
      .circular_l {
        .w(50);
        .h(50);
        .l_h(50);
        background: #fff;
        border-radius: 50%;
        margin-top: 20px;
      }
      .circular_r {
        margin-right: 30px;
      }
      .circular_l {
        margin-left: 30px;
      }
    }
    .modalFB {
      .w(267);
      .h(37);
      background: #fff;
      margin-top: 22px;
      .l_h(37);
      border-radius: 18px;
      a {
        color: #ec6d5e;
        display: inline-block;
      }
    }
  }
}
</style>
