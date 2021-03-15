/**
 * Created by OXOYO on 2019/11/9.
 *
 * 注册自定义节点
 */

// import general from './general'
// import arrow from './arrow'
import base from './base'
import Util from '@antv/g6/lib/util/index'
import Global from '@antv/g6/lib/global'
import $X from '../../../components/Editor/config/index'

const obj = {
  // ...general,
  // ...arrow
}
export default function (G6, devices) {
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
            const style = Util.mix({}, {
              x,
              y,
              width,
              height,
              img: device.imgUrl,
              anchorPoints:$X.$X.iconStyle[device.name].anchorPoints ,
              shapeControl: $X.$X.shapeControl,
            }, cfg.style)
            return style
          },
        }
      }
    })
  }
  let obj2 = {}
  devices && devices.map((e) => {
    obj2[e.name] = e
  })

  Object.assign(obj, obj2)
  Object.values(obj).map(item => {
    G6.registerNode(item.name, item.options, item.extendName)
  })
}
