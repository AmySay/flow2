/**
* Created by OXOYO on 2019/7/2.
*
* PanelRight 右侧面板
*/

<style scoped lang="less" rel="stylesheet/less">

.el-tabs{
  height: 100%;
}
</style>

<template>
  <CardBox placement="right" position="left" :width="300" :title="$t('L10100')" @expand="toggleHandler">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="物料" name="first">
        <PanelLeft :devices = 'devices'></PanelLeft>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <CardItem :title="$t('L10101')" :enableFold="true" :bold="true">
          <Options></Options>
        </CardItem>
        <CardItem title="属性设置" :enableFold="true" :bold="true">
          <Details :originDataObj='originDataObj' :eventItem='eventItem'></Details>
        </CardItem>

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
      devices: {
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
    data(){
      return {
        activeName:'first'
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
