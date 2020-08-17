<template>
  <div class="body-box">
    <div class="body-box-flow">
      <div>
        <span class="icon iconfont iconuser-plus" style="color:#1B66D4;font-size:21px;"></span>
      </div>
      <span>注册账号</span>
    </div>
    <div>
      <div class="circle-dot"></div>
      <div class="circle-dot"></div>
      <div class="circle-dot"></div>
      <div class="circle-dot"></div>
      <div class="circle-dot"></div>
    </div>
    <div class="body-box-flow">
      <div>
        <span class="icon iconfont iconpencil-edit" style="color:#1B66D4;font-size:21px;"></span>
      </div>
      <span>完善信息</span>
    </div>
    <div>
      <div class="circle-dot-red"></div>
      <div class="circle-dot-red"></div>
      <div class="circle-dot-red"></div>
      <div class="circle-dot-red"></div>
      <div class="circle-dot-red"></div>
    </div>
    <div class="body-red-packet">
      <div>
        <span class="icon iconfont iconPocketMoney" style="color:#DC6372;font-size:21px;"></span>
      </div>
      <span>领取红包</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

  .body-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .body-box>div:nth-child(2) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 60px;
    height: 4px;
    margin-top:20px;
  }

  .body-box>div:nth-child(4) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 60px;
    height:4px;
    margin-top: 20px;
  }

  .circle-dot {
    width: 100%;
    width: 4px;
    height:4px;
    border-radius: 50%;
    background: #1B66D4;
  }
  .circle-dot-red {
    width: 100%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #DC6372;
  }
  .body-box-flow {
    display: flex;
    flex-direction: column;

  }

  .body-box-flow>div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background-color: #D1E0F7;
    border-radius: 50%;
    margin: 0 4px 10px 4px;
  }

  .body-box-flow>span {
    color: #1B66D4;
    font-size: 13px;
  }

  .body-red-packet {
    display: flex;
    flex-direction: column;
  }

  .body-red-packet>div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background-color: #F8E0E3;
    border-radius: 50%;
    margin: 0 4px 10px 4px;
  }

  .body-red-packet>span {
    color: #DC6372;
    font-size: 13px;
  }
</style>
