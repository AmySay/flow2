/**
 * Created by OXOYO on 2019/8/29.
 *
 * 节点基础方法
 */
import * as G6Util from '@antv/util'
import utils from '../utils'

export default {
  type: null,
  // 自定义节点配置，需要配置时在各个图形中覆写
  drawShape (cfg, group) {
    const shapeType = this.shapeType
    const style = this.getShapeStyle(cfg)
    const keyShape = group.addShape(shapeType, {
      attrs: style,
      name: 'XFCNodeKeyShape',
      draggable: true
    })
    this.keyShape = keyShape
    console.log(cfg,group)
    return keyShape
  },
  ShowObjProperty1 (Obj) {
    var attributes = ''
    var methods = ''
    for (const attr in Obj) {
      if (Obj.attr != null) { attributes = attributes + attr + ' 属性： ' + Obj.i + '\r\n' } else { methods = methods + '方法: ' + attr + '\r\n' }
    }
    console.log(attributes, methods)
  },
  getAnchorPoints (cfg) {
    return [
      [0.5, 0], // top
      [1, 0.5], // right
      [0.5, 1], // bottom
      [0, 0.5] // left
    ]
  },
  setState (name, value, item) {
    // 设置锚点状态
    utils.anchor.setState(name, value, item)
    // 设置shapeControl状态
    utils.shapeControl.setState(name, value, item)
  },
  update (cfg, item) {
    // 从新计算图形样式
    const shapeStyle = this.getShapeStyle(cfg)
    const style = G6Util.mix({}, shapeStyle)
    // 更新图形
    this.updateShape(cfg, item, style)
  },
  updateShape (cfg, item, style) {
    const keyShape = item.get('keyShape')
    keyShape.attr({
      ...style
    })
    // 更新图形文本
    this.updateLabel(cfg, item)
  },
  // 绘制完成后附加锚点
  afterDraw (cfg, group) {
    // 绘制锚点
    utils.anchor.draw(cfg, group)
    // 绘制shapeControl
    utils.shapeControl.draw(cfg, group)
  },
  // 更新完成后更新锚点
  afterUpdate (cfg, item) {
    const group = item.getContainer()
    // 更新锚点
    utils.anchor.update(cfg, group)
    // 更新shapeControl
    utils.shapeControl.update(cfg, group)
  }
}
