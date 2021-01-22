/**
 * Created by OXOYO on 2019/11/9.
 *
 * 注册自定义节点
 */

import general from './general'
import arrow from './arrow'
import base from './base'
import Util from '@antv/g6/src/util/index'
import Global from '@antv/g6/src/global'
import $X from '../../../components/Editor/config/index'

const obj = {
  ...general,
  ...arrow
}
export default function (G6, devices) {
  console.log('----g6-------------------', devices)

  if (devices && devices.length) {
    devices = devices.map(device => {
      let height = $X.$X.iconStyle[device.name].height
      let width = $X.$X.iconStyle[device.name].width
      return {
        name: device.name,
        data: JSON.stringify(device),
        extendName: 'base-node',
        options: {
          ...base,
          shapeType: 'image',
          getShapeStyle(cfg) {
            const size = this.getSize(cfg)
            width = size[0]
            height = size[1]
            const x = 0 - width / 2
            const y = 0 - height / 2
            const color = cfg.color || Global.defaultNode.color
            const style = Util.mix({}, Global.defaultNode.style, {
              // 节点的位置在上层确定，所以这里仅使用相对位置即可
              x,
              y,
              width,
              height,
              stroke: color
            }, cfg.style)
            return style
          },
          options: Util.mix({}, {
            icon: device.imgUrl,
            iconStyle: {
              width: width / 2,
              height: height / 2,
              left: -width / 4,
              top: -height / 4
            },
            style: {
              fill: '#f9f9f9',
              stroke: '#bbb',
              cursor: 'default'
            },
            stateStyles: {
              selected: {
                fill: '#eee'
              }
            }
          })
        }
      }
    })
  }
  let obj2 = {}
  devices && devices.map((e) => {
    obj2[e.name] = e
  })

  Object.assign(obj, obj2)
  console.log(obj2, '++++++++++++++=')
  Object.values(obj).map(item => {
    G6.registerNode(item.name, item.options, item.extendName)
  })
}
