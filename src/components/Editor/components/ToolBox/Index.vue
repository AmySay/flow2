/**
* Created by OXOYO on 2019/5/18.
*
*/

<style scoped lang="less" rel="stylesheet/less">
  .tool-box {
    cursor: default;
    background-color: #fff;
    padding: 2px 20px;
    box-sizing: border-box;
    border-bottom: #cccccc solid 1px;
    -webkit-box-shadow: 0px 1px 1px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0px 1px 1px rgba(0,0,0,.1);
    -ms-box-shadow: 0px 1px 1px rgba(0,0,0,.1);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 10%);
    text-shadow: 0 1px 0 rgb(255 255 255 / 33%);
    // 水平
    &.horizontal {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: flex-start;
      flex-direction: row;

      .tool-item {
        min-width: 25px;
        height: 15px;
        line-height: 15px;
        vertical-align: middle;
        text-align: center;
        margin: 0 2px;
        color: #000000;

        &:hover {
          opacity: 1;
        }
        &.active {
          opacity: 1;
        }
        &.disabled {
          cursor: not-allowed;
        }

        .label {

        }
      }
    }
    // 垂直
    &.vertical {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: flex-start;
      flex-direction: column;

      .tool-item {
        text-align: left;
        min-width: 100px;
      }
    }
  }
</style>

<template>
  <div :class="['tool-box', mode]" @contextmenu.stop.prevent>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    props: {
      mode: {
        type: String,
        // 水平还是垂直类型，可选值为 horizontal 或 vertical
        default: 'horizontal'
      },
      tools: {
        type: Array
      }
    }
  }
</script>
