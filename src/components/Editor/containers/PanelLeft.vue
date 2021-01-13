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

  const iconStyle = {
    三相接地故障: { width: '196', height: '86' },
    交流传输线: { width: '167', height: '27' },
    交流母线: { width: '206', height: '40' },
    光伏: { width: '165', height: '311' },
    开关动作: { width: '113', height: '54' },
    接地: { width: '93', height: '93' },
    柴油发电机: { width: '93', height: '79' },
    '电动机 Group：Motor': { width: '95', height: '58' },
    电容直流支路: { width: '167', height: '29' },
    电感直流线: { width: '215', height: '33' },
    '电抗器/电容器': { width: '144', height: '29' },
    电阻电容串联直流线: { width: '225', height: '40' },
    电阻电容并联直流线: { width: '196', height: '60' },
    '电阻、电感与电容串联直流线': { width: '232', height: '37' },
    '电阻、电感与电容并联直流线': { width: '186', height: '79' },
    电阻电感串联直流线: { width: '212', height: '37' },
    电阻直流线: { width: '201', height: '30' },
    直流节点: { width: '70', height: '26' },
    直驱风机: { width: '117', height: '117' },
    相角测量单元: { width: '115', height: '38' },
    逆变单元: { width: '210', height: '53' },
    频率测量单元: { width: '134', height: '42' }
  }

  // 锚点坐标
  const anchorPoints = [
    [0.5, 0], // top
    [1, 0.5], // right
    [0.5, 1], // bottom
    [0, 0.5] // left
  ]
  export default {
    name: 'PanelLeft',
    components: {
      CardBox,
      CardItem,
      NodeElement
    },
    data () {
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
      materials () {
        const materials = []
        if (this.devices && Object.entries(this.devices).length) {
          for (let k in this.devices) {
            const temp = {
              name: this.devices[k][0].type || '',
              label: this.devices[k][0].type || '',
              icon: '',
              enable: true,
              children: this.devices[k].map(item => {
                const height = iconStyle[item.name].height
                const width = iconStyle[item.name].width
                console.log(height, width)
                return {
                  shape: item.name,
                  label: item.name,
                  data: JSON.stringify(item),
                  defaultLabel: '',
                  enable: true,
                  width: Number(width) / 2,
                  height: Number(height) / 2,
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
      toggleHandler (data) {
        let _t = this
        _t.$X.utils.bus.$emit('editor/panel/toggle', data)
      }
    }
  }
</script>
