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
            <p>案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<input type="text" placeholder="中文汉字，阿拉伯数字及括号"></p>
            <p>当 &nbsp;事&nbsp; 人: &nbsp;<input type="text" placeholder="请输入当事人"></p>
            <p>身份证号 :&nbsp;&nbsp;<input type="text" placeholder="请输入身份证号码"></p>
            <p>手 机 号 &nbsp;:&nbsp;&nbsp;<input type="text" placeholder="当事人手机号"></p>
           
        </div>
        <div  class="ann_pic">
            公布照片：
             <!-- <input class="add" name="add" type="file"/>    -->
             <div class="add">
                 <img src="../../../common/img/add_nor@2x.png" alt="">
             </div>
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
        //background: @selfontColor;   
        .h(668); 
    .announcement{
        .h(45);
        background: rgb(36,147,237);
        font-size: 17px;
        text-align: center;
        .l_h(45);
        color:rgb(255,255,255);        
    };
    .announcement_center{
        .w(345);
        .h(310);
        margin: 13px auto;
        background: white;
        font-size: @fontSize-s;
        text-indent: 10px;
        border-radius: 8px;
        label{
            font-size: @fontSize-L;
        }
       select{
            // appearance:none;
            // -moz-appearance:none;
            // -webkit-appearance:none;
            // background: url("../../../common/img/arrow_down@2x.png") no-repeat scroll right center transparent;

            margin-top: 15px;
            .h(30);
            .w(235);
            border-radius: 6px;
            border-bottom: 1px solid gray;
            text-indent: 10px;
            
        }；
        option{
           margin-top: 44px;
           .h(30);
           .w(230);
           background: red;
        };
        
        p{
            font-size: @fontSize-L;
            .h(40);
           input{
               margin-top: 15px;
        text-indent: 10px;

                .h(30);
                .w(235);
                border-radius: 6px;
                font-size: @fontSize-s;
                color: @fontColornormal;
                border-radius: 5px;
                border: 1px solid #ddd;
                outline: none;
                margin-left: 5px;
           }
        }
    }
    .ann_pic{
        .w(345);
        .h(135);
        margin: 13px auto;
        background: white;
        font-size: @fontSize-L;
        text-indent: 10px;
    
        .add{
            // display: block;
            .w(98);
            .h(98);
             border: 1px solid rgb(216,216,216); 
            font-size: 70px;
            margin: 10px;
            text-indent: 0px;
            margin-left: 95px;
            margin-top: -20px;
            img{
                .w(40);
                .h(40);
                margin: 0 auto;
                margin-top: 25px;
            }
        }
    }
    .published,.cancel{
        .w(94);
        .h(30);
        color: rgb(255,255,255);
        opacity:0.5;
        font-size: @fontSize-L;
        margin: 0 auto;
        text-align: center;
        .l_h(30);
        margin-bottom: 10px;
        float: left;
        margin-top: 20px;
    }
    .published{
        margin-left: 57px;
        margin-right: 73px;
        background: #feb834;
        border-radius: 8px;
    }
    .cancel{
        background: #888888;
        border-radius: 8px;
    }
}

</style>