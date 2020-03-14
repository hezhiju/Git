<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div  uk-scrollspy="cls: uk-animation-slide-right; repeat: true">{{this.$store.state.token}}</div>
    <div v-for="(e,i) in goods_list" :key="i">
      <img :src="e.pict_url" style="width:20vw;height:20vw;float:left;" alt="">
    </div>
    <div>
        <div>
            <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import request from "../request/index";

export default {
  name: 'home',
  data () {
    return {
      goods_list: {name:'hzj'}
    }
  },
  components: {
  },
  methods:{
    getdata(){
      request.user.shareshop().then(res => {
          // eslint-disable-next-line no-console
          console.log('------------首页----------');
          // eslint-disable-next-line no-console
          console.log(res);
      })
    },
    git(){
       this.$toast.loading({
            message: '加载中'
        })
      request.user.commodity({
        page:1
      }).then(res => {
          // eslint-disable-next-line no-console
          console.log('------------淘宝客返利-商品列表接口----------');
          // eslint-disable-next-line no-console
          console.log(res);
          this.goods_list=res.data.data;
          this.$toast.clear();
      })
    }
  },
  mounted() {
      this.getdata();
      let t=0;
      setInterval(()=>{
        t++;
        if(t==2){
          this.git();
        }
      },1000);
      
      
  }
}
</script>
