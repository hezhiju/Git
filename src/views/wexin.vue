<template>
  <div class="home">
    <div id="text" @click="fenxiang">分享</div>
    <div>{{text}}</div>
    <van-uploader id="up"  v-model="fileList" multiple="true" :after-read="afterRead" />
    <van-uploader v-model="fileList" :after-read="afterRead" accept="video/*" />
    <van-uploader v-model="fileList" :after-read="afterRead" accept="audio/*" />
    <van-uploader :after-read="afterRead" />
    <van-uploader :after-read="afterRead" />
    <van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
<div class="div">{{meta}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import request from "../request/index";
import * as wx from "weixin-js-sdk";
import upload from "../plugins/upload";

export default {
  name: 'home',
  data(){
    return{
      text:'',
      fileList:[],
      meta:{},
    }
  },
  mounted() {
    this.text=process.env.NODE_ENV;
      request.user.share().then(res => {
          // eslint-disable-next-line no-console
          console.log('------------分享签名----------');
          // eslint-disable-next-line no-console
          console.log(res.data);
          wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wxd961ff0e015fb05f', // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo",
              "onMenuShareQZone", "updateAppMessageShareData"
            ]
          });
      })
  },
  methods:{
    afterRead(){
          upload.uploadFiles(this.fileList).then(res=>{
              // eslint-disable-next-line no-console
              console.log("得到的图片信息");
              // eslint-disable-next-line no-console
              console.log(res);
          })
    },
      fenxiang(){
          wx.updateAppMessageShareData({
            title: '何志军',
            desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
            link: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
            imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
            trigger: function () {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                alert('用户点击发送给朋友');
            },
            success: function () {
                alert('已分享');
            },
            cancel: function () {
                alert('已取消');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
      }
  }
}
</script>

<style scoped>
#text{
  color:red !important;
  font-size: 32px;
}
.div{
  width:375px;
  height:375px;
  background: red;

}

</style>
