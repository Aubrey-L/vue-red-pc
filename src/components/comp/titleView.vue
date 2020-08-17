<template>
  <div class="body-box-flow">
    <div class="circle-first"></div>
    <div  class="circle"></div>
    <div>{{title}}</div>
    <div></div>
    <div></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        title: {
          type: String,
          default: '可以',
        }
      }
    }
</script>

<style scoped>
  .body-box-flow {
    padding: 29px 0 18px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .body-box-flow  div:nth-child(1){
    width: 8px;
    height: 8px;
    background-color: #1B66D4;
    opacity: 0.1;
    border-radius: 50%;
  }
  .body-box-flow  div:nth-child(2){
    width: 8px;
    height: 8px;
    background-color: #DC6372;
    opacity: 0.1;
    border-radius: 50%;
    margin-left: -4px;
  }

  .body-box-flow  div:nth-child(3){
    margin-left: 8px;
    margin-right: 8px;
    color: #333333;
    font-size:13px;
    font-weight:600;
  }
  .body-box-flow  div:nth-child(4){
    width: 8px;
    height: 8px;
    background-color: #1B66D4;
    opacity: 0.1;
    border-radius: 50%;
  }
  .body-box-flow  div:nth-child(5){
    width: 8px;
    height: 8px;
    background-color: #DC6372;
    opacity: 0.1;
    border-radius: 50%;
    margin-left: -4px;
  }

</style>
