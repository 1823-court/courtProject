<template>
  <div id="app">
      <router-view></router-view>
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

<style lang="less" scoped>
#app{

}
 

</style>

