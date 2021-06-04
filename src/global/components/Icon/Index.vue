/**
* Created by OXOYO on 2019/5/29.
*
* Icon
*/

<style scoped lang="less" rel="stylesheet/less">
.wrap{
  display: flex;
  align-items: center;
  height: 100%;
}
.toolbarIcon {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-size: cover;
}
</style>

<template>
  <div v-if="type" class="wrap">
      <img v-if='isCN(type)' class  = 'toolbarIcon' :src='require(`../../../assets/images/toolbar/${type}.png`)' alt=""/>
      <span v-else class="icon iconfont" :class="[type ? 'xfv-icon-' + type : '']"></span>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: String
  },
  data() {
    return {
      styleObj: {
        // background:'url(./flow2/src/assets/images/toolbar/${this.type}.png)`
      }
    }
  },
  methods: {
    isCN(v) {
      return /[\u4e00-\u9fa5]/.test(v)
    }
  }
}
</script>
