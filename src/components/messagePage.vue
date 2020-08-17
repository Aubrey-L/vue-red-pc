<template>
  <div>
    <inputview :name.sync="text1.value1" :leftName="leftfirm" :isNostar="isNostar" :placeholder="placeholder1"/>
    <inputview :name.sync="text1.value2" :leftName="leftPhone" :isNostar="isNostar" :placeholder="placeholder2"/>
    <chekoutList :parameter="parameter" :title="title" @onTap="parameterTap"/>
    <chekoutList :parameter="parameter1" :title="title1" @onTap="parameterTap"/>
    <div class="btn">
      <div>
        <button @click="bitSave">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import inputview from './comp/inputViews.vue';
  import chekoutList from './comp/chekoutList.vue';

  export default {
    data() {
      return {
        text1: {
          value1: '',
          value2: '',
        },
        title: '公司类型',
        title1: '主要涉及行业',
        parameter1: [{
          name: '军工',
          checked: true
        }, {
          name: '贸易',
        }, {
          name: '通讯',
        }, {
          name: '工业控制',
        }, {
          name: '贸易',
        }, {
          name: '贸易',
        }, {
          name: '贸易',
        }, {
          name: '贸易',
        }],
        parameter: [{
          name: '军工',
          checked: true
        }, {
          name: '贸易',
        }, {
          name: '通讯',
        }, {
          name: '工业控制',
        }, {
          name: '贸易',
        }, {
          name: '贸易',
        }, {
          name: '贸易',
        }, {
          name: '贸易',
        }],
        leftfirm: '公司名称',
        leftPhone: '联系人',
        placeholder1: '请输入公司名称',
        placeholder2: '请输入联系人',
        isNostar: false,
      }
    },
    methods: {
      parameterTap(index) {

      },
      bitSave() {
        console.log(this.text1)
        console.log(this.text1.value1)
        // this.$router.push('/inputs')
      }
    },
    components: {
      inputview,
      chekoutList
    }
  }
</script>

<style scoped>
  .btn {

    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .btn > div {
    padding: 0 25px 0 25px;
  }

  .btn > div > button {
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
</style>
