<template>
    <div class="detail" >
        <img  @click='goBack' class='arrow_left' src="../../../../common/img/arrow_left@2x.png" alt="">
        <div class="ann_detail">
          公告详情
        </div>
        <!-- <Dheader>{{title}}</Dheader> -->
        <div class="ann_center">
            <div class="gray"></div>
            <p class="space_pic">版面照片：</p>
            <div class="img_box">
                <img src="../../../../common/img/content_pic@2x.png" alt="">
                <img src="../../../../common/img/content_pic@2x.png" alt="">
                <img src="../../../../common/img/content_pic@2x.png" alt="">
            </div>
            <div class="detail_p">
                <p>公告类别：<span>开庭传票</span></p>
                <p>法院名称：<span>北京朝阳第一人民法院</span></p>
                <p>案 件 号 ：<span>(2017)桂0602民初668</span></p>
                <p>当 事 人 ：<span>欧阳三十</span></p>
                <p>公告进展：<span class="ann_time">公告3天</span></p>
                
            </div>
            
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
//import Dheader from '../detail-header/d-header.vue'
export default {
    //components:{Dheader},
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        goPay(){
            this.$router.push('/judge/heaving/detail/pay')            
        }
    }
}
    
</script>

<style lang='less' scoped>
@import '~common/css/index.less';
.detail{
    position:fixed;
    top:0;
    bottom:0;
    .w(375);
    background: white;
    z-index: 3;
    .arrow_left{
        .w(9);
        .h(16);
       // background: @d-headerColor;
        position: absolute;
        .top(14);
        .left(20);
    };
    .ann_detail{
        .h(44);
        //background: yellowgreen;
        font-size: @fontSize-L;
        font-weight: 800;
        text-align: center;
        .l_h(45);
        color:rgb(51,51,51);        
    };
    .ann_center{
       
        .img_box{
            .margin(0,0,0,20);
            
            img{
                .h(106);
                .w(78);
                .margin(0,28,0,0)
            }
        }
        .gray{
            .h(10);
            background:rgb(245,245,245);
        }
        .space_pic{
        font-size: @fontSize-L;
        .margin(10,20,10,20);
        }
        img{
            .w(100);
            .h(180);
            display: inline;
        }
        .detail_p{
            .margin(30,0,0,20);
            font-size: @fontSize-m;
            //background: red;
            p{
                .margin(0,0,25,0);
            }
            span{
                //background: blue;
                display: inline-block;
                .w(230);
                .h(27);
                color:  rgb(102,102,102);
                border-bottom: 1px solid rgb(216,216,216);
                text-align: center;
            }
            .ann_time{
                border-bottom:none;
                text-align: left;
            }
        }
    }
}
</style>
