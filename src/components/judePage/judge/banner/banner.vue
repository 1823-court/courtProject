<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                v-for='(item,index) of list'
                :key='index'
                >
                <img :src="item.url" alt="" >
                </div>
                
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import ApiConfig from 'common/api/apiconfig.js'
//import ApiBanner from 'common/data/bannerApi.js'
export default {
       data(){
        return{
            list:[
              {url: require('../../../../common/img/banner1.png')},  
                {url: require('../../../../common/img/banner2.png')}, 
                {url: require('../../../../common/img/banner3.png')},  
             ]
        }
    },
    methods:{
        initswiper(){
            new Swiper ('.swiper-container', {
            
            loop: true, // 循环模式选项
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
                },
               
            })
        },
        initdata(){
          
            // let url=ApiConfig.bannerApi
            // this.$axios.get(url)
            // .then((data)=>{
            // this.list=data.data.slider
            // //在上一次数据更新结束并且页面加载完成执行
            // this.$nextTick(()=>{
            //     this.initswiper()
            // })        
            // })

            // let url = ApiConfig.ApiBanner
            // console.log(url)
            // this.$axios.get(url)
            // .then((data) => {
            //     this.list = data.index
            //     console.log(list)
            //     this.$nextTick(() => {
            //         this.initswiper()
            //     })
            // })
        //     setTimeout(() => {
        //        this.list = [
        //         { url: require("@/common/img/banner1.png") },
        //         { url: require("@/common/img/banner2.png") },
        //         { url: require("@/common/img/banner3.png") }
        // ];
          
        //     }, 500);
        }
    },
    created(){
        this.initdata()
    },
    mounted(){
        this. initswiper()
}
}
</script>

<style lang='less' scoped>
@import '../../../../../node_modules/swiper/dist/css/swiper.min.css';
@import '~common/css/index.less';
.banner{
    
    .swiper-container{
        .w(375);
        .h(250);
       .swiper-pagination{
           //background: red;
           .h(12);
       }
        img{
            width:100%;
            height: 100%;
           // padding: 5px;
           
        }
    }
}
</style>

