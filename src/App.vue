<template>
  <div id="app">

    <router-view/>

  </div>
</template>
  
<script>
import Register from './components/registerOrLogin/register';
export default {
  name:'App',
  components:{
	Register
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

