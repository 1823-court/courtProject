<template>
    <div class="recommend">
        <div class="warpper">
            <div class="content">
                <p class="time">{{nowTime}}</p>
                <ul>
                    <li v-for='(item,index) in list'
                    :key='index'
                   
                    >
                        <div class="left">
                            <img src="../../../common/img/okc.jpg" width='100' height='100' alt="">
                        </div>
                        <div class="right">
                            <p class="announcement">{{item.announcement}}</p>
                            <p class="type">{{item.type}}</p>
                            <p class=" parties_concerned">当事人：<span>{{item.parties_concerned}}</span></p>
                            <p class="case_no">{{item.case_no}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
        
    </div>
</template>

<script>
import HeavingData from 'common/data/heavingdata.js'
import BScroll from 'better-scroll'

export default {
    data(){
        return{
            list:[],
            nowTime:{}
        }
    },
    components:{

    },
    methods:{
        initScroll(){
            new BScroll('.warpper',{click:true})
        },
        timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear();
            let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
            let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
            // let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
            // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
            this.nowTime = year + "-" + month + "-" + date ;
        },
        nowTimes(){
            this.timeFormate(new Date());
            setInterval(this.nowTimes,30*1000);
            },
        initRecommonedData(){
            setTimeout(() => {
                let toplist = HeavingData.data.topList;
               
                let arr=[]
                toplist.forEach(element=>{
                   arr.push({
                         announcement:`公告名称： ${element.songList[0].songname}`,
                         
                         type:`公告类型: ${element.songList[1].singername}`,
                         parties_concerned:` ${element.songList[2].singername}`,
                         case_no:`案号： {2018}京02行初8号`,                       
                         imgurl:element.picUrl
                     })
                })
                this.list=arr
                console.log(arr)
            }, 500);
        }
    },
    created(){
        this.initRecommonedData()
        this.nowTimes();
    },
    mounted(){
        this.initScroll()
    }
}
</script>

<style lang='less' scoped>
@import '~common/css/index.less';
.recommend{
    .warpper{
        //.bug(red);
        .w(375);
        position:fixed;
        .top(218);
        .bottom(0);   
        margin-top: 8px;  
        overflow: hidden;
        .time{
            font-size: @fontSize-m;
           padding:5px;
          // margin-top: 4px;
        };
        ul{
            margin-top: -30px;
            li{
            .w(375);
            .h(130);
            margin-left: 5px;
            margin-bottom: 10px;
            //.padding(0,20,20,20);
            display:flex;
            align-items:center;
            .left{
                //.padding(0,20,0,0);
               
                .w(60);
                .h(60);
            }
            .right{
                margin-left: 50px;
                margin-top: 40px;
                //background: #333;
                .w(235);
                .h(100);
                p{
                    .h(20);
                    .w(200);
                    .l_h(20);
                    font-size:@fontSize-m;
                     color:black;
                     //margin-top: 10px;
                     overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-left: 25px;
                    margin-bottom: 7px;
                };
                .type,.parties_concerned,.case_no{
                    color: gray;
                }
                span{
                    color: blue;
                }
            }
        }
        }
        
    }
}
</style>
