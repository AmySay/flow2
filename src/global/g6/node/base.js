/**
 * Created by OXOYO on 2019/8/29.
 *
 * 节点基础方法
 */
import utils from '../utils'

export default {
  shape: null,
  group: null,
  drawShape(cfg, group) {
    const shapeType = this.shapeType
    const style = this.getShapeStyle(cfg)
    const shape = group.addShape(shapeType, {
      attrs: style
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
  // update(cfg, group) {
  //   this.ShowObjProperty1(cfg, 'cfgupdate+++++++++++++++++++++')
  //   console.log(cfg, '---------cfg-update----------')
  //   console.log(group, '---------cfg---update--------')
  //   this.ShowObjProperty1(group, 'groupupdate___________________')
  //   const style = group.getKeyShapeStyle();
  //   console.log(style)
  //   // group.refresh()
  //   // this.group.get()
  //   // this.group.removeChild(group)
  //   // this.group.clear()
  //   // this.drawIcon(cfg, this.group)
  // },
  update(cfg, node) {
    const group = node.getContainer(); // 获取容器
    const style = {
      width:cfg.size[0],
      height:cfg.size[1],
      size:cfg.size
    };
    group.icon.attr(style);
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
  }
}
