<template>
    <div>
    <div class="upload">
       <div class="announcement">
          发布公告
        </div>
        <div class="announcement_center">
            <form action="" method="get"> 
            <label>公告类别：</label> 
            <select name="" > 
            <option value="0">请选择公告类别</option> 
            <option value="1">开庭传票</option> 
            <option value="2">遗失声明</option> 
            <option value="3">判决书</option> 
            <option value="4">仲裁文书</option> 
            </select> 
            </form> 
            <form action="" method="get"> 
            <label>法院名称：</label> 
            <select name="" > 
            <option value="0">请选择所在人民法院</option> 
            <option value="1">深圳人民法院</option> 
            <option value="2">上海人民法院</option> 
            </select> 
            </form> 
            <form action="" method="get"> 
            <label>公告详情：</label> 
            <select name="" > 
            <option value="0">请选择登报区域</option> 
            <option value="1">全国</option> 
            <option value="2">区域</option> 
            </select> 
            </form> 
            <p>案 号：<span></span></p>
            <p>当事人:<span></span></p>
            <p>身份证号:<span></span></p>
            <p>手机号:<span></span></p>
           
        </div>
        <div  class="ann_pic">
            公布照片：
             <input class="add" name="add" type="file"/>   
        </div>
        <div class="published">发布</div>
        <div class="cancel">取消</div>
    </div>
    <tab/>
    </div>
</template>

<script>
	import Tab from '../../common/tab/tab'
export default {
    components:{
		Tab
	}
}
</script>

<style lang='less' scoped>
@import '~common/css/index.less';
.upload{
        background: @selfontColor;   
        .h(668); 
    .announcement{
        .h(45);
        background: @d-headerColor;
        font-size: @fontSize-L;
        text-align: center;
        .l_h(45);
        color:black;        
    };
    .announcement_center{
        .w(345);
        margin: 13px auto;
        background: white;
        font-size: @fontSize-s;
        text-indent: 10px;
       select{
           
           .h(40);
           .w(230);
           border:0;
           border-bottom: 1px solid gray
        }；
        option{
           margin-top: 44px;
           .h(40);
           .w(230);
           background: red;
        };
        p{
            .h(40);
           span{
                //background: blue;
                display: inline-block;
                .w(230);
                .h(27);
                border-bottom: 1px solid gray;
                text-align: center;
                margin-left: 15px;
            }
        }
    }
    .ann_pic{
        .w(345);
        .h(135);
        margin: 13px auto;
        background: white;
        font-size: @fontSize-s;
        text-indent: 10px;

        // .add{
        //     display: block;
        //     .w(90);
        //     .h(90);
        //     border: 1px solid grey;
        //     text-align: center;
        //     .l_h(75);
        //     font-size: 12px;
        //     margin: 10px;
        //     text-indent: 0px;

        // }
    }
    .published,.cancel{
        .w(190);
        .h(40);
        background: @d-headerColor;
        font-size: @fontSize-L;
        margin: 0 auto;
        text-align: center;
        .l_h(40);
        margin-bottom: 10px;
    }
}

</style>