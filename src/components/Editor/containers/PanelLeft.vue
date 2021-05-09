/**
* Created by OXOYO on 2019/7/2.
*
* PanelLeft 左侧面板
*/

<style scoped lang="less" rel="stylesheet/less">
  .panel-left {
    .card-item {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
    }
  }
</style>

<template>
  <CardBox class="panel-left" placement="left" position="right" :width="250" :title="$t('L10300')"
           @expand="toggleHandler">
    <CardItem
      v-for="(item, index) in materials"
      :key="index"
      :title="$t(item.lang) || item.label"
      :enableFold="true"
      :bold="true"
    >
      <NodeElement
        v-for="(child, childIndex) in item.children.filter(target => target.enable)"
        :key="childIndex"
        :title="child.label"
        :info="child"
      >
      </NodeElement>
    </CardItem>
  </CardBox>
</template>

<script>
  import CardBox from '../components/CardBox'
  import CardItem from '../components/CardItem'
  import NodeElement from '../components/NodeElement'
  import $X from './../config/index'

  export default {
    name: 'PanelLeft',
    components: {
      CardBox,
      CardItem,
      NodeElement
    },
    data() {
      return {}
    },
    props: {
      devices: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
      materials() {
        const materials = []
        if (this.devices && Object.entries(this.devices).length) {
          for (let k in this.devices) {
            const temp = {
              name: this.devices[k][0].type || '',
              label: this.devices[k][0].type || '',
              icon: '',
              enable: true,
              children: this.devices[k].map(item => {
                let height,width,anchorPoints = 80;
                height = $X.$X.iconStyle[item.name].height
                width = $X.$X.iconStyle[item.name].width
                anchorPoints = $X.$X.iconStyle[item.name].anchorPoints
                  return {
                    shape: item.name,
                    originId: item.id,
                    label: item.name,
                    data: JSON.stringify(item),
                    defaultLabel: '',
                    enable: true,
                    width: Number(width) / 2,
                    height: Number(height) / 2,
                    minWidth: 20,
                    minHeight: 5,
                    anchorPoints,
                    shapeControl: $X.$X.shapeControl,
                    icon: item.imgUrl
                  }
                }
              )
            }
            materials.push(temp)
          }
        }
        return materials
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
