<template>
  <div>

    <!--<login-input name="9" placeholder="请输入账号" ref="numberInput"></login-input>-->
    <!--<login-input placeholder="请输入密码" ref="passwordInput"></login-input>-->
      <LoginInput :name.sync="text1.value1" ></LoginInput>
    <button @click="submit">666</button>

  </div>

</template>

<script>
  import LoginInput from './Inputs'
  export default {
    name: 'Login',
    data(){
      return {
        text1:{
          value1:'6666'
        },
        lovingVue:'123132'
      }
    },
    components: {
      LoginInput
    },
    methods: {
      submit (e) {
        console.log(this.text1)
        // console.log(this.$refs.numberInput.value + '\n' + this.$refs.passwordInput.value)
      }
    }
  }
</script>

<style scoped>

</style>
