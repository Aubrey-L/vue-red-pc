<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class='box' hidden='inputShow'>
    <span class="textInt" v-bind:class="isNostar?'':'textstar'">{{leftName}}</span>
    <div class='body-box'>
      <input      v-model='curName'    :placeholder="placeholder"/>
      <slot></slot>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        curName: this.name
      }
    },
    methods:{
      handleChange(){
      }
    },
    watch : {
      'name' : function(newVal, oldVal){
        this.curName = newVal;
      },
      curName : function(newVal, oldVal){
        this.$emit("update:name", newVal);
      }
    },
    props: {
      name:{
        type: String,
        default: ''
      },
      leftName:{
        type: String,
        default: '标题'
      },
      isNostar:{
        type:Boolean,
        default: true
      },
      value: {
        type: String,
        default: ''
      },placeholder:{
        type: String,
        default: ''
      }

    }
  }
</script>

<style scoped>
  .box {
    background: white;
    display: flex;
    flex-direction: column;
  }

  .textInt {
    font-size: 13px;
    color: #333333;
    padding: 10px 18px 0 33px;
    margin-bottom: 10px;
  }

  .inputText {
    position: relative;
    font-size: 15px;
    color: #333;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid #E0E0E0;
  }
  .textstar::after {
    content: '  *';
    color: #ff3e43;

  }
  .place-holder-style {
    color:#ccc;
  }
input{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #E0E0E0;
  outline:none;
  width: 100%;
}
  .body-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:33px;
    margin-right: 18px;

  }




</style>
