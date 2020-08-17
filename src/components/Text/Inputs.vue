<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <input
      v-model='curName'
    >
  </div>
</template>

<script>
  export default {
    // model: {
    //   prop: 'input',
    //   event: 'input'
    // },
    inheritAttrs: false,
    props: [ 'name'],
    watch : {
      'name' : function(newVal, oldVal){
        this.curName = newVal;
      },
      curName : function(newVal, oldVal){
        this.$emit("update:name", newVal);
      }
    },

    data () {
      return {
        curName : this.name
      }
    }
  }
</script>

<style scoped>

</style>
