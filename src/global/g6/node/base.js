/**
 * Created by OXOYO on 2019/8/29.
 *
 * 节点基础方法
 */
import utils from '../utils'
import * as G6Util from '@antv/util'
export default {
  shape: null,
  group: null,
  drawShape(cfg, group) {
    const shapeType = this.shapeType
    const style = this.getShapeStyle(cfg)
    const shape = group.addShape(shapeType, {
      attrs: style,
      name: 'XFCNodeKeyShape',
      draggable: true
    })
    this.shape = shape
    this.group = group
    this.drawIcon(cfg, group)
    return shape
  },
  drawIcon(cfg, group) {
    let width, height;
    const size = this.getSize(cfg)
    width = size[0]
    height = size[1]
    if (this.options.icon) {
      let attrs = {
        x: this.options.iconStyle.left,
        y: this.options.iconStyle.top,
        width,
        height
      }
      group.icon = group.addShape('image', {
        attrs: {
          img: this.options.icon,
          ...attrs
        },
        draggable: true,
        name: 'image-shape',
      })
    }
  },
  ShowObjProperty1(Obj) {
    var attributes = '';
    var methods = '';
    for (const attr in Obj) {
      if (Obj.attr != null)
        attributes = attributes + attr + ' 属性： ' + Obj.i + '\r\n';
      else
        methods = methods + '方法: ' + attr + '\r\n';
    }
    console.log(attributes, methods)
  },
  update(cfg, node) {

    // 自定义节点配置
    const defaultStyle = this.options
    // 从新计算图形样式
    const shapeStyle = this.getShapeStyle(cfg)
    const style = G6Util.mix({}, defaultStyle, shapeStyle)
    // 更新图形
    this.updateShape(cfg, node, style)
    // const [width,height] = cfg.size
    const group = node.getContainer();
    // const style = {
    //   width,
    //   height,
    //   x:-width / 2,
    //   y:-height / 2,
    //   size:cfg.size
    // };
    group.icon.attr(style);
  },
  updateShape (cfg, item, style) {
    const keyShape = item.get('keyShape')
    keyShape.attr({
      ...style
    })
    // 更新图形文本
    this.updateLabel(cfg, item)
  },
  getAnchorPoints(cfg) {
    return [
      [0.5, 0], // top
      [1, 0.5], // right
      [0.5, 1], // bottom
      [0, 0.5] // left
    ]
  },
  setState(name, value, item) {
    // 设置锚点状态
    utils.anchor.setState(name, value, item)
    // 设置shapeControl状态
    utils.shapeControl.setState(name, value, item)
  },
  // 绘制后附加锚点
  afterDraw(cfg, group) {
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
