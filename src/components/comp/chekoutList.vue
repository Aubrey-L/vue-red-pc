<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class='tilte'>{{title}}</div>
    <div class='parameter-wrap'>
      <label v-for="(item, index) in parameter" :key="item.id">
        <span class='parameter-text parameter-info text-over '
              v-bind:class="item.checked?'checked_parameter':'checked'"
              @click='parameterTap(index)'>{{item.name}}
        </span>
      </label>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        // parameter:[]
      }
    },
    methods: {
      parameterTap(index) {
        this.$emit('onTap', index)
        this.parameter.map((item, i) => {
          item.checked = false
        })
       let cha= this.parameter[index]
        cha.checked=true
        this.$set(this.parameter,index,cha)
      }
    },
    props: {
      parameter: {
        type: Array,
        default: []
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  label {
    height: 45px;
  }

  .tilte {
    margin-left: 33px;
    font-size: 13px;
    color: #333333;
    margin-bottom: 12px;
    margin-top: 22px;
  }

  .tilte::before {
    margin-top: 5px;
    color: red;
    content: '*';
  }

  .parameter-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
    padding: 0 19px 0 33px;
  }

  .parameter-text {
    width: 100%;
  }

  .checked_parameter {
    background: #E5F4FF;
    color: #2967FF;
    border-radius: 14px;
    padding: 7px 28px 7px 28px;
    margin-right: 14px;
    margin-bottom: 18px;
    font-size: 13px;
    box-sizing: border-box;
    border: 1px solid #2967FF;
  }

  .checked {
    margin-bottom: 18px;
    box-sizing: border-box;
    border: 1px solid #F5F5F5;
    background: #F5F5F5;
    color: #333333;
    border-radius: 14px;
    padding: 7px 28px 7px 28px;
    margin-right: 14px;
    font-size: 13px;
  }
</style>
