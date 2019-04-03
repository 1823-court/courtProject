<template>
    <div class="recommend">
        <div class="warpper">
            <div class="content">
                <p class="time">{{nowTime}}</p>
                <ul>
                    <li v-for='(item,index) in list'
                    :key='index'
                    @click="goDetail"
                    >
                        <div class="left">
                            <p class="announcement">{{item.announcement}}</p>
                            <p class="type">{{item.type}}</p>
                            <p class=" parties_concerned">当事人：<span>{{item.parties_concerned}}</span></p>
                            <p class="case_no">{{item.case_no}}</p>
                        </div>
                        <div class="right">
                            <img src="../../../common/img/pic@2x.png"  alt="">
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
        goDetail(){
            this.$router.push('/judge/heaving/detail')
        },
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
          
            }, 500);
        }
    },
    created(){
        this.initRecommonedData();
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
        //background: greenyellow;
        //.bug(red);
        .w(375);
        position:fixed;
        .top(288);
        .bottom(0);   
        margin-top: 8px;  
        overflow: hidden;
        .time{
                background: #f5f5f5;
                font-size: @fontSize-m;
                color: #666;
                //margin-left: 15px;
                text-indent: 15px;
                .h(31);
                .l_h(31);
        };
        ul{
            background: white;
            li{
                border-bottom: 1px solid #d8d8d8;
            //background: white;
            .w(345);
            .h(126);
            margin: auto;
            //margin-bottom: 5px;
            //.padding(0,20,20,20);
            display:flex;
            align-items:center;
            .right{
                margin-left: 28px;
                img{
                   .w(98);
                   .h(98);
                }        
               
            }
            .left{
                .w(235);
                .h(100);
               // background: #f5f5;
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
                    
                    margin-bottom: 7px;
                };
                .case_no{
                    font-size:@fontSize-s;
                    }
                .type,.parties_concerned,.case_no{
                    color: #666;
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
