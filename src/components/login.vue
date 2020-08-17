<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
      <div class="header-image">
        <img src="./../assets/Bottomrmb.png">
        <div>欢迎注册</div>
        <img src="./../assets/opacity.png">
      </div>
      <div>
        <inputview   :name.sync="text1.value1"  :leftName="leftPhone" :isNostar="isNostar" :placeholder="placeholder"/>
        <inputview  :name.sync="text1.value2"  :leftName="leftcode" :isNostar="isNostar" :placeholder="placeholder1">
          <div @click="_getCode" v-bind:style="isCode?'color:#333':'color:#2967ff'" class="gain_time">{{codeTitle}}
          </div>
        </inputview>
        <inputview  :name.sync="text1.value3"  :leftName="leftEventcode" :isNostar="isNostar" :placeholder="placeholder2"/>
      </div>
      <div class=" div-radio">
        <input id="item1" @click="_radio( $event)" type="checkbox" name="item" checked="checked" >
        <label for="item1"></label>
        <span>我已阅读同意《华强旗舰服务协议》</span>
      </div>
      <div class="btn">
        <button @click="submit">提交</button>
      </div>


  </div>
</template>

<script>
  import inputview from './comp/inputViews.vue';

  export default {
    components: {
      inputview
    },
    data() {
      return {
        text1:{
          value1:'',
          value2:'',
          value3:''
        },
        datas:{
          currentValue:'66',
          currentValue2:'626'
        },
        checked:true,
        placeholder: '请输入手机号码',
        placeholder1: '请输入手机验证码',
        placeholder2: '请输入跟工作人员领取的活动码',
        leftPhone: '手机号码',
        leftcode: '验证码',
        leftEventcode: '活动码',
        isNostar: false,
        codeTitle: '获取验证码',
        isCode: true
      }
    },
    methods: {
      submit(){
        console.log(this.text1)
      },
      _getCode: function () {
        if (this.isCode){
          var total=60
          let clock = window.setInterval(() => {
            if (total>0){
              total--
              this.codeTitle = '倒计时' + total + ' s',
                this.isCode=false
            } else{
              total=60
              this.codeTitle =   '获取验证码'
              this.isCode=true
              clearInterval(clock);
            }
          },1000)
        }

      },
      chcekRadio(e) {

      },
      _radio( $event){
        // window.setTimeout(() => {
        //   if (!this.changed) {
        //     $event.target.checked = true
        //     // 可以写些单选框没有选中的代码处理
        //
        //   }
        // }, 0);

      }
    }
  }

</script>

<style scoped>
  .div-radio {
    position: relative;
    padding-left: 30px;
    margin-top: 18px;
    font-size: 14px;
  }

  input[type="checkbox"] {
    width: 17px;
    height: 17px;
    opacity: 0;
    border-radius: 4px;

  }

  label {
    margin-left: 25px;
    border-radius: 4px;
    position: absolute;
    left: 5px;
    top: 3px;
    width: 17px;
    height: 17px;
    border: 1px solid #999;
    margin-top: 2px;
  }

  /*设置选中的input的样式*/
  /* + 是兄弟选择器,获取选中后的label元素*/
  input:checked + label {
    background-color: #2967FF;
    border: 1px solid #2967FF;
    border-radius: 4px;
  }

  input:checked + label::after {
    position: absolute;
    content: "";
    width: 2.5px;
    height: 6px;
    top: 3px;
    left: 6px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg)
  }

  .header-image div {
    margin-top: 11px;
    margin-left: 25px;
    font-size: 13px;
  }

  .btn {
    padding: 25px 25px 0 25px;
  }

  .btn > button {
    width: 100%;
    border-radius: 4px;
    background-color: #1B66D4;
    font-size: 13px;
    height: 49px;
    line-height: 49px;
    color: white;
    margin-bottom: 10px;
    border: none;
  }

  .header-image {
    width: 100%;
    background: #1B66D4;
    height: 83px;
    color: white;
    position: relative;
  }

  .header-image > img:nth-child(3) {
    height: 83px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .header-image > img:nth-child(1) {
    width: 70px;
    height: 25px;
    margin-top: 18px;
    margin-left: 25px;
  }

  .gain_time {
    text-align: center;
    width: 50%;

  }

</style>
