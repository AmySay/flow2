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

  const shapeControl = {
    // 控制器
    controllers: [
      [0, 0, 'nwse-resize'],
      [0, 0.5, 'ew-resize'],
      [0, 1, 'nesw-resize'],
      [0.5, 0, 'ns-resize'],
      [0.5, 1, 'ns-resize'],
      [1, 0, 'nesw-resize'],
      [1, 0.5, 'ew-resize'],
      [1, 1, 'nwse-resize']
    ],
    // 旋转
    rotate: true
  }

  // 锚点坐标
  const anchorPoints = [
    [0, 0],
    [0.25, 0],
    [0.5, 0],
    [0.75, 0],
    [1, 0],
    [1, 0.25],
    [1, 0.5],
    [1, 0.75],
    [1, 1],
    [0.75, 1],
    [0.5, 1],
    [0.25, 1],
    [0, 1],
    [0, 0.75],
    [0, 0.5],
    [0, 0.25]
  ]
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
                  return {
                    shape: item.name,
                    label: item.name,
                    defaultLabel: '',
                    enable: true,
                    width: 80,
                    height: 40,
                    minWidth: 20,
                    minHeight: 20,
                    anchorPoints: anchorPoints,
                    shapeControl: shapeControl,
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
