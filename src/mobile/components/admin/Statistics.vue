<template>
    <div>
        <div class="nav">
            <mt-header title="统计">
                <router-link to="/home/record" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class="select-div" @click="popupVisible=!popupVisible">
                {{gradeSelect}}
                <i v-if="!popupVisible" class="fa fa-caret-down"></i>
                <i v-else class="fa fa-caret-up"></i>
            </div>
        </div>
        <div style="height:80px"></div>
        <!-- <div style="border-bottom: 3px solid #EBEBEB;height: 40px;overflow: hidden;padding: 10px 20px;" v-if="user.curRank!=0">
            <span style="display: inline-block;line-height: 40px;vertical-align: text-bottom;width:40px;height:40px;text-align:center;">{{user.curRank}}</span>
             <img style="height:40px;border-radius: 50%;margin: 0 10px 0 0;" :src="'http://q1.qlogo.cn/g?b=qq&nk='+user.qq_account+'&s=100'">
             <div style="display: inline-block;vertical-align: top;">
                 <p style="margin:0;padding:0;font-size: 16px;line-height: 20px;">{{user.name}}</p>
                 <p style="margin:0;padding:0;font-size: 12px;line-height: 20px;">共 {{user.renqi}} 点人气</p>
             </div>
            <span style="display: inline-block;line-height: 40px;vertical-align: text-bottom;float: right;font-size:14px">
                <span style="color:#FF9800;">+</span><span style="color:#FF9800;font-size:20px">{{user.zan}} </span>个赞
            </span>
        </div>
        <div style="margin-bottom:55px;">
            <div style="border-bottom: 1px solid #EBEBEB;height: 40px;overflow: hidden;padding: 10px 20px;" v-for="(l,index) in list" :key="index">
                <img style="height:40px" src="../../assets/img/one.png" v-if="rank[index]==1">
                <img style="height:40px;transform: scale(0.9);" src="../../assets/img/two.png" v-else-if="rank[index]==2">
                <img style="height:40px;transform: scale(0.8);" src="../../assets/img/three.png" v-else-if="rank[index]==3">
                <span style="display: inline-block;line-height: 40px;vertical-align: text-bottom;width:40px;height:40px;text-align:center;" v-else>{{rank[index]}}</span>
                <img style="height:40px;border-radius: 50%;margin: 0 10px 0 0;" :src="'http://q1.qlogo.cn/g?b=qq&nk='+l.qq_account+'&s=100'">
                <div style="display: inline-block;vertical-align: top;">
                    <p style="margin:0;padding:0;font-size: 16px;line-height: 20px;">{{l.name}}</p>
                    <p style="margin:0;padding:0;font-size: 12px;line-height: 20px;">共{{l.renqi}}点人气</p>
                </div>
                <span style="display: inline-block;line-height: 40px;vertical-align: text-bottom;float: right;font-size:14px">
                    <span style="color:#FF9800;">+</span><span style="color:#FF9800;font-size:20px">{{l.zan}} </span>个赞
                </span>
            </div>
        </div>  -->

        <div>
            <div style="padding: 6px 0 6px 30px;border-bottom: 3px solid rgba(235, 235, 235,.3);">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=qq&s=100" alt="" style=" border-radius: 50%;height: 40px;width: 40px;vertical-align: middle;">
                <span style="vertical-align: middle;">累计发放 <strong style="color:red;font-weight:100;">{{list[0]}}</strong> 个点赞币</span>
            </div>
            <div style="padding: 6px 0 6px 30px;border-bottom: 3px solid rgba(235, 235, 235,.3);">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=qq&s=100" alt="" style=" border-radius: 50%;height: 40px;width: 40px;vertical-align: middle;">
                <span style="vertical-align: middle;">累计申请 <strong style="color:red;font-weight:100;">{{list[1]}}</strong> 个点赞币</span>
            </div>
            <div style="padding: 6px 0 6px 30px;border-bottom: 3px solid rgba(235, 235, 235,.3);">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=qq&s=100" alt="" style=" border-radius: 50%;height: 40px;width: 40px;vertical-align: middle;">
                <span style="vertical-align: middle;">累计卖出 <strong style="color:red;font-weight:100;">{{list[2]}}</strong> 个点赞币 </span>
            </div>
            <div style="padding: 6px 0 6px 30px;border-bottom: 3px solid rgba(235, 235, 235,.3);" @click="flag=!flag">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=qq&s=100" alt="" style=" border-radius: 50%;height: 40px;width: 40px;vertical-align: middle;">
                <span style="vertical-align: middle;">累计消费 <strong style="color:red;font-weight:100;">{{list[3]+list[4]+list[5]+list[6]}}</strong> 个点赞币 </span>
                <i class="fa fa-angle-right fa-lg" style="margin-left: 20px;vertical-align: middle;" v-if="!flag"></i>
                <i class="fa fa-angle-down fa-lg" style="margin-left: 20px;vertical-align: middle;" v-else></i>
            </div>
            <div style="padding: 6px 0 6px 30px;border-bottom: 3px solid rgba(235, 235, 235,.3);" v-if="flag">
                <!-- <img src="http://q1.qlogo.cn/g?b=qq&nk=qq&s=100" alt="" style=" border-radius: 50%;height: 40px;width: 40px;vertical-align: middle;"> -->
                <p style="vertical-align: middle;margin-left: 45px;">用于购物 <strong style="color:blue;font-weight:100;">{{list[3]}}</strong> 个点赞币</p>
                <p style="vertical-align: middle;margin-left: 45px;">用于请假 <strong style="color:blue;font-weight:100;">{{list[4]}}</strong> 个点赞币</p>
                <p style="vertical-align: middle;margin-left: 45px;">用于销假 <strong style="color:blue;font-weight:100;">{{list[5]}}</strong> 个点赞币</p>
                <p style="vertical-align: middle;margin-left: 45px;">兑换现金 <strong style="color:blue;font-weight:100;">{{list[6]}}</strong> 个点赞币</p>
            </div>
        </div>
        
        <mt-popup
        v-model="popupVisible"
        position="top" class="popup-div">
            <div style="padding-top:75px;width:100%">
                    <mt-cell :title="grade.label">
                        <i class="fa fa-angle-down"></i>
                    </mt-cell>
                    <span class="option-span" v-for="(g,index) in grade.option" 
                    :class="{'select-span':gradeSelect==g}" @click="gradeChange(g,index)">
                    {{g}}
                    </span>
                    <mt-cell :title="time.label">
                        <i class="fa fa-angle-down"></i>
                    </mt-cell>
                    <span class="option-span" v-for="(t,index) in time.option" 
                    :class="{'select-span':timeSelect==t}" @click="timeChange(t,index)">
                    {{t}}
                    </span>
                    <div>
                        <mt-button type="default" size="large" @click.native="getAllRank">查询</mt-button>
                    </div>
            </div>
        </mt-popup>
        
        <NavBottom class="nav-bottom"></NavBottom>
    </div>
</template>

<script>
import NavBottom from '../NavBottom.vue';
import { Indicator } from 'mint-ui';
import { filters } from '../../filter.js';
import {waitData} from '../../wait';
export default {
    components:{
        NavBottom,
    },
    data () {
        return {
            popupVisible: false,
            grade: {
                    label:'年级',
                    option: ['全部','大一','大二','大三']
            },
            rank: [],
            time: {
                label: '时间区域',
                option: ['全部','本周','上周']
            },
            timeSelect: '全部',
            gradeSelect: '全部',
            timeCode: {
                start_date: 0,
                over_date: 0,
            },
            gradeCode: 0,
            user: {
                name:'',
                qq_account:'undefined',
                curRank: 0,
                zan: 0,
                renqi: 0
            },
            list: [0,0,0,0,0,0,0],
            flag:true,
        }
    },
    methods:{
        getAllRank () {
            this.popupVisible=false;
            Indicator.open({
                text: waitData[Math.floor(Math.random()*(waitData.length))],
                spinnerType: 'fading-circle'
            });
            axios.get('admin/coin/stat?countGrade='+this.gradeCode+'&startDate='+this.timeCode.start_date+'&endDate='+this.timeCode.over_date).then((res)=>{
                if(res.data.result!=null){
                    this.list = [];
                    for(let item in res.data.result){
                        this.list.push(res.data.result[item])
                    }
                }
                Indicator.close()
            })
        },
        gradeChange (g,index) {
            this.gradeSelect=g;
            this.gradeCode = index;
        },
        timeChange (t,index) {
            this.timeSelect=t;
            if(index==0) {
                this.timeCode = filters.weekNum(0);
                this.timeCode.start_date = "2000-1-1";
            }else this.timeCode = filters.weekNum(index-1);
        }
    },
    mounted(){
        this.timeCode = filters.weekNum(0);
        this.timeCode.start_date = "2000-1-1";
        this.getAllRank()
    }
}
</script>

<style scoped>
    .nav-bottom {
        position: fixed;
    }
    .nav {
        width: 100%;
        position: fixed;
        z-index: 5000;
    }
    .select-div {
        font-size: 16px;
        line-height: 35px;
        text-align: center;
        background-color: #F8F8F8;
    }
    .popup-div {
        width: 100%;
    }
    .option-span {
        display: inline-block;
        font-size: 14px;
        padding: 10px 25px;
        margin-left: 35px;
        margin-bottom: 15px;
        background-color: #EBEBEB;
    }
    .select-span {
        color: #E83436;
        background-color: #FFDEB8;
    }
</style>
