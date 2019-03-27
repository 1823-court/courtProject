<template>
  <div id="app">

    <tab></tab>
    <router-view/>

  </div>
</template>
  
<script>

import privyindex from './components/privyPage/index';
//import Judge from './components/judePage/judge/judge.vue';
import Tab from 'components/common/tab/tab'
export default {
  name:'App',
  components:{
  Tab,
  }
}
</script>

<style lang ='less' scoped>
@import "~common/css/index.less";

#app{
  // background:red;
   .w(375);
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;

}
 

</style>

