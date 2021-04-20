/**
* Created by OXOYO on 2019/8/22.
*
* App
*/

<style scoped lang="less">
  @import "./index.less";
</style>


<template>
  <div id = ''>



  </div>
</template>

<script>
  import d3 from 'd3';
  import renderApp from './renderApp2'
  console.log(renderApp)
  export default {
    name: 'App',
    components: {
    },
    created () {
      // 阻止浏览器默认右键菜单
      document.oncontextmenu = function (event) {
        if (event.stopPropagation) {
          event.stopPropagation()
        }
        if (event.preventDefault) {
          event.preventDefault()
        }
      }
    }
  }
</script>
