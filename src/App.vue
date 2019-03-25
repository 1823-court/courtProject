<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
  
<script>
import privyindex from './components/privyPage/index';
export default {
  name:'App',
  components:{
  privyindex,
  }
}
</script>

<style lang="less" scoped>
#app{

}
 

</style>

