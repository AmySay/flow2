/**
* Created by OXOYO on 2019/7/2.
*
* PanelRight 右侧面板
*/

<style scoped lang="less" rel="stylesheet/less">

.el-tabs{
  height: 100%;
  .content{
    .toolbarIcon{
      width: 25px;
      height: 25px;
      display: inline-block;
      background-size: cover;
      margin-right: 5px;
    }
  }
}
</style>

<template>
  <CardBox v-dialog-drag placement="right" position="left" :width="300" title="控制面板" @expand="toggleHandler">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="元件设备" name="first">
        <PanelLeft :devices = 'devices'></PanelLeft>
      </el-tab-pane>
      <el-tab-pane label="配置" name="second">
        <CardItem :title="$t('L10101')" :enableFold="true" :bold="true">
          <Options></Options>
        </CardItem>
      </el-tab-pane>
      <el-tab-pane :label="toolbarInfo && toolbarInfo.item && toolbarInfo.item.icon" name="three">
        <div class="content" title="title" v-if  = 'toolbarInfo.item && toolbarInfo.item.child'>
          <img  v-for  = '(item,key) in toolbarInfo.item.child' :key = 'key' class  = 'toolbarIcon' :src='require(`../../../assets/images/toolbar/${item.icon}.png`)' alt=""/>
        </div>
      </el-tab-pane>
    </el-tabs>
  </CardBox>
</template>

<script>
  import CardBox from '../components/CardBox'
  import CardItem from '../components/CardItem'
  import Options from '../components/Options'
  import Navigator from '../components/Navigator'
  import Details from '../components/Details'
  import  PanelLeft from './PanelLeft'
  export default {
    name: 'PanelRight',
    components: {
      CardBox,
      CardItem,
      Options,
      Navigator,
      Details,
      PanelLeft
    },
    props: {
      originDataObj: {
        type: Object,
        default: () => {
          return {}
        }
      },
      toolbarInfo: {
        type: Object,
        default: () => {
          return {}
        }
      }, devices: {
        type: Object,
        default: () => {
          return {}
        }
      },
      eventItem: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed:{
      activeName:{
        get(){
          if(Object.entries(this.toolbarInfo).length) return 'three'
          return 'first'
        },
        set(val){
          return val
        }
      }
    },
    methods: {
      toggleHandler(data) {
        let _t = this
        _t.$X.utils.bus.$emit('editor/panel/toggle', data)
      }
    }
  }
</script>
