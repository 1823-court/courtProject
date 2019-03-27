<template>
    <div class="d-head">
        <img  class='arrow_left' src="../../../common/img/arrow-left.png" alt="">
        <div class="ann_detail">
          
        </div>
    </div>
</template>

<script>
export default {

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
        background: yellowgreen;
        position: absolute;
        top: 6px;
        left: 10px;
    };
    .ann_detail{
        .h(45);
        background: yellowgreen;
        font-size: @fontSize-l;
        text-align: center;
        .l_h(45);
        color:@fontColorSel;        
    };

}
</style>
