<template>
  <div>
    <mt-header fixed  title="匿名聊天">
      <router-link to="../home/center"  slot="left"> 
          <div class="back"><img src="../../../assets/img/back.png"></div>
      </router-link>
    </mt-header>
    <div class="apply-bg"></div>
    <div class="all">
      <p class="feedback"><span>匿名</span>聊天</p>
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :top-method="loadTop" 
        :bottom-method="loadBottom" :autoFill = "false"
        bottomPullText="上拉加载" topPullText="下拉刷新"
        :bottom-all-loaded="allLoaded" ref="loadmore">
            <mt-spinner type="triple-bounce" v-if="topLoading"  color="#26a2ff" class="loading"></mt-spinner>
            <div class="talkList" v-for="(i,index) in data" :key="index">
                    <div class="avatar">
                        <img :src="picture[Math.floor((Math.random()*3))]" alt="头像加载失败">
                    </div>
                    <p class="talk-content" @click="eject_applytype(i.content)">{{i.content}}</p>
                    <p class="timeage">{{i.create_time*1000 | timeago}}</p>
            </div>
            <!-- <div v-for="i,index in 100" class="details" style="display:flex; border-bottom: 1px solid rgba(187,187,187, 0.2);position: relative;"  :key="index">
                <div class="feedback-user"><img :src="i"></div>
                <p v-on:click="eject_applytype">{{i}}</p>
                <p class="time">{{i}}天前</p>
            </div> -->
            <mt-spinner type="triple-bounce" v-if="bottomLoading"  color="#26a2ff" class="loading"></mt-spinner>
        </mt-loadmore>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" style="width:80%;max-height:66%;overflow:scroll;border-radius:5px;padding:16px;">
                <p class="detailss">
                  {{talkContent}}
                </p>
        </mt-popup>
      </div>
        <div class="feedback-text">
        <!-- <textarea onpropertychange="this.style.height=this.scrollHeight + 'px'" oninput="this.style.height=this.scrollHeight + 'px'"></textarea> -->
          <mt-field id="textarea" v-model="content" class="pass bianji-textarea-l"  placeholder="我要匿名反馈" type="textarea" rows="1"></mt-field>
          <mt-button class="button" type="default" @click.native="addtalk">发送</mt-button>
        </div>
    </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      data: [],
      content:'',
      page:1,
      picture: [
        "./static/feedback1.png",
        "./static/feedback2.png",
        "./static/feedback3.png"
      ],
      popupVisible:false,
      allLoaded:false,
      topLoading:true,
      bottomLoading:false,
      talkContent:'',
      wrapperHeight: 0,
    }
  },
  methods:{
    eject_applytype: function (content){
        this.talkContent = content;
        this.popupVisible = true;
    },
    gettalk: function (type){
        var that = this;
        if(type == 0){//0:上啦加载  1：下拉刷新
            that.bottomLoading = true;
        }else if(type == 1){
            that.topLoading = true;
            that.page=1;
            that.data=[];
        }
        

        axios.get('/user/personalCenter/getTalk',{
          params:{page:that.page}
        }).then(function (response) {
                that.page++;
                var list = response.data.result;
                that.data.push.apply(that.data,list);
                that.bottomLoading = false;
                that.topLoading = false;
        })
        .catch(function (error) {
        });
    },
    addtalk: function (){
        
        var that = this;
        if(that.content.trim()==""){
            return;
        }
        axios.post('/user/personalCenter/addTalk',{
          content:that.content,
        })
          .then(function (response) {
            var feedback = response.data;
            if (feedback.code==0) {
              Toast({
                    message: feedback.msg,
                    iconClass: 'fa fa-check fa-5x'
                });
                that.content = "";
                document.getElementById('textarea').getElementsByTagName('textarea')[0].style.height = '29px';
                that.gettalk(1);
             } else {
              Toast({
                    message: feedback.msg,
                    iconClass: 'fa fa-remove fa-5x'
                });
             };
          })
          .catch(function (error) {
          });
    },
    loadTop: function() {
        this.gettalk(1);
        this.$refs.loadmore.onTopLoaded();
    },
    loadBottom:function() {  
        this.gettalk(0);
        this.$refs.loadmore.onBottomLoaded();
    },
    autoHeight(){
        // var el = document.getElementsByClassName('bianji-textarea-l')[0];
        // el.height = el.scrollHeight;
        // // $(".bianji-textarea-l").height($(".bianji-textarea-l")[0].scrollHeight);
        // // $(".bianji-textarea-l").on("keyup keydown", function(){
        // //     $(this).height(this.scrollHeight);
        // // })
        // el.addEventListener("keyup",function(){
        //     el.height = el.scrollHeight;
        // });
        // el.addEventListener("keydown",function(){
        //     el.height = el.scrollHeight;
        // });
    },
    makeExpandingArea(el) {  
        var setStyle = function(el) {  
            el.style.height = 'auto';
            if(el.scrollHeight < 200)el.style.height = el.scrollHeight + 'px';  
            else el.style.height = '200px'
            // console.log(el.scrollHeight);  
        }  
        var delayedResize = function(el) {  
            window.setTimeout(function() {  
                    setStyle(el)  
                },  
                0);  
        }  
        if (el.addEventListener) {  
            el.addEventListener('input', function() {  
                setStyle(el)  
            }, false);  
            setStyle(el)  
        } else if (el.attachEvent) {  
            el.attachEvent('onpropertychange', function() {  
                setStyle(el)  
            });  
            setStyle(el)  
        }  
        if (window.VBArray && window.addEventListener) { //IE9  
            el.attachEvent("onkeydown", function() {  
                var key = window.event.keyCode;  
                if (key == 8 || key == 46) delayedResize(el);  

            });  
            el.attachEvent("oncut", function() {  
                delayedResize(el);  
            }); //处理粘贴  
        }  
    }  
  },
  //页面加载后加载的方法
  mounted(){
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top-66;
        this.gettalk(1);
        // this.autoHeight();
        var el = document.getElementById('textarea').getElementsByTagName('textarea')[0];
        this.makeExpandingArea(el);
    // this.test();
  }
}
</script>
<style>
    .loading div{
        /* margin: 0 auto!important; */
        text-align: center;
    }
    #textarea textarea{
        resize:none!important;
    }
</style>

<style scoped>
  /*.all>div{
      display: flex;
  }*/
  .loading{
  }
  .back {
        z-index: 1;
        position: absolute;
        top: 8px;
        left: 10px;
    }
    .back>img {
        width: 25px;
    }
    .apply-bg {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 110px;
        background: url(../../../assets/img/feedback-bg.png) no-repeat center center;
        background-size: 100% 100%;
        margin-top: 40px;
    }

    /*反馈详情*/
    .feedback {
      font-size: 15px;
    }
    .feedback span{
      font-size: 15px;
      color: red;
    }
    .details {
      display: flex;
      border-bottom: 1px solid rgba(187,187,187, 0.2);
    }
    .details p:nth-child(2) {
      font-size: 14px;
      margin: 19px 0 0 5px;
      width: 170px;
      /*display: block;  */
      overflow: hidden;  
      white-space: nowrap;  
      text-overflow: ellipsis;
    }
    .time {
      margin: 20px 0 0 0;
      position: absolute;
      right: 25px;
      font-size: 12px;
      opacity: 0.5;
    }
    .feedback-user>img {
      width: 50px;
    }
    .feedback-text {
      display: flex;
      position: fixed;
      bottom: 10px;
      width:100%;
    }
    .button {
      margin: 10px 6px 0 15px;
      font-size: 12px;
      width: 70px;
      height: 49px;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .pass {
      margin: 10px 0 0 10px;
      /*color: black;*/
      /*height: 20px;*/
      width: 240px;
      background: #f5f5f5;
      flex:1;
      margin-right:80px;
    }

    .detailss {
        /*自动换行*/
        height: auto;  
        word-wrap:break-word;  
        word-break:break-all;  
        overflow: hidden;
        /*自动换行*/
        /* padding: 20px;        */
        /* width: 150px; */
        text-indent: 30px;
        line-height: 20px;
        padding:0;
        margin:0;
    }
    .talkList{
        /* background:red; */
        position:relative;
        border-bottom: 1px solid rgba(187,187,187, 0.2);
    }
    .timeage{
        width:70px;
        float:right;
        font-size:12px;
        line-height:40px;
        position:absolute;
        right:0;
        top:0;
        margin:0;
    }
    .talk-content{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin:0 50px 0 50px;
        font-size:16px;
        line-height:40px;
        margin-right:70px;
    }
    .avatar{
        width:40px;
        height:40px;
        float:left;
    }
    .avatar>img{
        width:100%;
        height:100%;
    }
    .page-loadmore-wrapper {
        overflow: scroll
    }
    ::-webkit-scrollbar {
        display: none;
    }
    
</style>
