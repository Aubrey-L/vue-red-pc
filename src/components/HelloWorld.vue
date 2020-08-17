<template xmlns="http://www.w3.org/1999/html" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="hello">
    <div class="red-peack">
      <img src="./../assets/logo.png">
      <p>现场注册, 领红包</p>
      <div class="xinx">
        <img src="./../assets/Toprmb.png">
        <div style="display: flex;flex-direction: column;margin-left: 12px;margin-top: 8px;">
          <p>现场注册HQBUY账号并完善信息</p>
          <p>可领取 <span style="font-size:13px;color:rgba(255,218,171,1);
opacity:1;">10元</span> 现金红包</p>
        </div>
      </div>
    </div>
    <div class="box">
      <img class="imgs" src="./../assets/Toprmb.png">
      <tetleView :title="parentMessage"></tetleView>
      <flowview/>
      <tetleView :title="parentMessage2"></tetleView>
      <div v-for="item in let">
        <textview :leftName="item.leftName" :rightName="item.rightName"/>
      </div>
      <div class="but">
        <button v-on:click="btnClick">立即注册</button>
        <button v-on:click="btnClickT">完善信息</button>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import tetleView from './comp/titleView.vue';
  import flowview from './comp/flowView.vue';
  import textview from './comp/text.vue';

  export default {
    components: {
      tetleView,
      flowview,
      textview
    },
    data() {
      return {
        parentMessage: '参与步骤',
        parentMessage2: '活动说明',
        let: [{
          leftName: '活动时间: ',
          rightName: '2020年8月13日-15日，共2天'
        }, {
          leftName: '活动规则: ',
          rightName: '活动期间内，现场注册账号并完善     信息的用户，均视为成功参与此次活动；每个用户只可参与一次'
        }, {
          leftName: '活动奖励: ',
          rightName: '成功参与此次活动的用户，均可获得5元现金红包'
        }, {
          leftName: '补充说明: ',
          rightName: '活动码请咨询现场工作人员领取'
        }]
      }
    },
    methods: {
      btnClick() {
        this.$router.push('/login')
      },
      btnClickT(){
        this.$router.push('/messagePage')
      }
    }
  }
</script>


<style scoped>
  .but {
    display: flex;
    flex-direction: column;
    padding: 32px 25px 10px 25px
  }

  .but > button:nth-child(1) {
    border-radius: 4px;
    background-color: #DC6372;
    font-size: 13px;
    height: 49px;
    line-height: 49px;
    color: white;
    margin-bottom: 10px;
    border: none;
  }

  .but > button:nth-child(2) {
    border-radius: 4px;
    background-color: #2967ff;
    border: none;
    font-size: 13px;
    height: 49px;
    line-height: 49px;
    color: white;
    margin-bottom: 10px;
  }

  p {
    margin: 0px;
  }

  .hello {
    display: flex;
    flex-direction: column;
    background: #1B66D4;
  }

  .red-peack {
    color: white;
    margin: 0 17px 0 17px;

  }

  .red-peack > img {
    width: 70px;
    height: 25px;
    margin-top: 21px;
    margin-left: 8px;

  }

  .red-peack > p {
    font-size: 25px;
    padding-top: 23px;
    text-align: center;
    font-size: 25px;
    font-family: FZLTHJW--GB1-0;
    opacity: 1;
  }

  .xinx {
    display: flex;
    flex-direction: row;
    text-align: center;

  }

  .xinx > img {
    width: 69px;
    height: 69px;
  }

  .xinx p {
    font-size: 13px;
    font-family: FZLTHJW--GB1-0;
    line-height: 21px;
    opacity: 0.6;

  }

  .box {
    background-color: white;
    margin: 0 18px 0 18px;
    position: relative;
    border-radius: 4px 4px 0 0;

  }
  .imgs{
    width: 69px;
    height: 69px;
    position: absolute;
    top: -35px;
    right: 9px;
    position: absolute;
  }
</style>
