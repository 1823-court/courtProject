<template>
    <div class="detail" >
        <img  @click='goBack' class='arrow_left' src="../../../../common/img/arrow-left.png" alt="">
        <div class="ann_detail">
          公告费用支付
        </div>
        <!-- <Dheader>{{title}}</Dheader> -->
        <div class="ann_center">
            <div class="detail_p">
                <p>公告类别：<span>开庭传票</span></p>
                <p>公告类别：<span>开庭传票</span></p>
                <p>公告类别：<span>开庭传票</span></p>
                <p>公告类别：<span>开庭传票</span></p>
                <p>公告类别：<span>开庭传票</span></p>
                <p>公告类别：<span>开庭传票</span></p>
                <p>公告类别：<span>开庭传票</span></p>
                <p>公告类别：<span>开庭传票</span></p>
                <div class="ann_time">公告进展：公告三天</div>
            </div>
        </div>
            <div class="pay">支付</div>
         <router-view></router-view>
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
    z-index: 1;
    .arrow_left{
        .w(30);
        .h(30);
        background: @d-headerColor;
        position: absolute;
        top: 6px;
        left: 10px;
    };
    .ann_detail{
        .h(45);
        background: yellowgreen;
        font-size: @fontSize-L;
        background: @d-headerColor;
        font-size: @fontSize-L;
        text-align: center;
        .l_h(45);
        color:@selfontColor;        
    };
    .ann_center{
        
        .detail_p{
            margin-left: 20px;
            font-size: @fontSize-m;
            //background: red;
            margin-top: 15px;
            p{
                margin-bottom: 15px;
            }
            span{
                //background: blue;
                display: inline-block;
                .w(230);
                .h(27);
                border-bottom: 1px solid gray;
                text-align: center;
            }
        }
        .pay{
             .w(200);
            .h(45);
            background: green;
    
            margin-left: 90px;
            margin-top: 20px;
            font-size: @fontSize-L;
            text-align: center;
            .l_h(45);
            color:@selfontColor; 
        }
    }
}
</style>

