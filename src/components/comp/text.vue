<template>
  <div class='body-text  text-class' v-show="showText">
    <span class='left-text'>{{leftName}}
    </span>
    <div class='right-text right-view-hidden'>{{rightName}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      showText: {
        type: Boolean,
        default: true
      },
      leftName: {
        type: String,
        default: '在'
      },
      rightName: {
        type: String,
        default: '不在'
      }
    }
  }
</script>

<style scoped>
  .right-text {
    margin-left: 13px;
    word-wrap: break-word;
    word-break: normal;
    flex: 1;
    width: 25px;
  }

  .left-text {
    color: #333333;
    font-size: 10px;
  }

  .body-text {
    display: flex;
    flex-direction: row;
    color: #333333;
    font-size: 10px;
    padding:0px 39px 10px 39px;
  }
</style>
