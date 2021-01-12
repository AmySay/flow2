/**
 * Created by OXOYO on 2019/11/9.
 *
 * 注册自定义节点
 */

import general from './general'
import arrow from './arrow'
import base from './base'
import Util from '@antv/g6/src/util/index'
import _ from 'lodash'

const obj = {
  ...general,
  ...arrow
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
export default function (G6, devices) {
  console.log('----g6-------------------', devices)

  if (devices && devices.length) {
    devices = devices.map(device => {
      const height = iconStyle[device.name].height
      const width = iconStyle[device.name].width
      return {
        name: device.name,
        data: JSON.stringify(device),
        extendName: 'base-node',
        options: {
          ...base,
          shapeType: 'image',
          getShapeStyle (cfg) {
            const style = {
              x: 0,
              y: 0,
              width: width,
              height: height,
              fill: '#f9f9f9',
              stroke: '#bbb',
              cursor: 'default'
            }
            if (cfg.hasOwnProperty('color')) {
              style.fill = cfg.color
            }
            return style
          },
          options: Util.mix({}, {
            icon: null,
            iconStyle: {
              width: width / 2,
              height: height / 2,
              left: -width / 4,
              top: -height / 4
              // left: -width / 4,
              // top: -height / 4
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
          }, {
            icon: device.imgUrl
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
