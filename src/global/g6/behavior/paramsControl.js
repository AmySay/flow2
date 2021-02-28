/**
 * Created by OXOYO on 2019/7/17.
 *
 * 综合节点控制交互
 */

import G6 from '@antv/g6'
import config from '../config'
import utils from '../utils'
import {Message} from 'element-ui'


export default {
  name: 'params-control',
  options: {
    getDefaultCfg() {
      return {
        config: {
          dragNode: {
            // 是否在拖拽节点时更新所有与之相连的边
            updateEdge: false
          },
        }
      }
    },
    getEvents() {
      return {
        'node:mousedown': 'onNodeMousedown',
        'node:mouseup': 'onNodeMouseup',
        'edge:mousedown': 'onEdgeMousedown',
        'canvas:mouseup': 'onCanvasMouseup',
      }
    },
    onNodeMousedown(event) {
      if (event.event.button !== 0) { // 非左键忽略
        return
      }
      let _t = this
      let model = event.item.getModel()
      _t.graph.emit('editor:getItem', [
        {
          type: 'node',
          id: model.id,
          model: model
        }
      ])
      // 初始化数据
      _t.info = {
        type: null,
        node: event.item,
        target: event.target
      }
      if (_t.info.target && _t.info.target.attr('name')) {

      } else {
        _t.info.type = 'dragNode'
      }
      if (_t.info && _t.info.type && _t[_t.info.type].start) {
        _t[_t.info.type].start.call(_t, event)
      }
    },
    onNodeMouseup(event) {
      let _t = this
      if (_t.info && _t.info.type && _t[_t.info.type].stop) {
        _t[_t.info.type].stop.call(_t, event)
      }
    },
    onEdgeMousedown(event) {
      let _t = this
      let model = event.item.getModel()
      _t.graph.emit('editor:getItem', [
        {
          type: 'edge',
          id: model.id,
          model: model
        }
      ])
    },
    onCanvasMouseup(event) {
      let _t = this
      if (_t.info && _t.info.type && _t[_t.info.type].stop) {
        _t[_t.info.type].stop.call(_t, event)
      }
    },
    // 拖拽节点
    dragNode: {
      dottedNode: null,
      status: null,
      // 虚线框节点样式
      dottedNodeStyle: {
        ...config.dottedNode.style.default
      },
      createDottedNode(event) {
        let _t = this
        if (!_t.dragNode.dottedNode && _t.info.node) {
          let {width, height} = _t.info.node
          let group = _t.graph.get('group')
          _t.dragNode.dottedNode = group.addShape('rect', {
            attrs: {
              ..._t.dragNode.dottedNodeStyle,
              width,
              height,
              x: event.x - width / 2,
              y: event.y - height / 2
            }
          })
          _t.graph.paint()
          if (_t.config.tooltip.dragNode) {
            _t.toolTip.create.call(_t, {
              left: event.canvasX,
              top: event.canvasY + height / 2
            }, `X: ${event.x.toFixed(2)} Y: ${event.y.toFixed(2)}<br>W: ${width.toFixed(2)} H: ${height.toFixed(2)}`)
          }
        }
      },
      createNode(event) {
        let _t = this
        if (_t.dragNode.dottedNode && _t.info.node) {
          let {width, height, minWidth, minHeight, label} = _t.info.node
          let node = {
            ..._t.info.node,
            id: G6.Util.uniqueId(),
            x: event.x,
            y: event.y,
            size: [width, height],
            minWidth: minWidth,
            minHeight: minHeight,
            label: label,
            style: {
              fill: _t.graph.$X.fill,
              fillOpacity: _t.graph.$X.fillOpacity,
              stroke: _t.graph.$X.lineColor,
              strokeOpacity: _t.graph.$X.strokeOpacity,
              lineWidth: _t.graph.$X.lineWidth,
              ...config.edge.type[_t.graph.$X.lineDash]
            }
          }
          _t.graph.addItem('node', node)
        }
      },
      start(event) {
        let _t = this
        _t.dragNode.status = 'dragNode'
      },
      move(event) {
        let _t = this
        if (_t.dragNode.status === 'dragNodeToEditor') {

          if (_t.dragNode.dottedNode && _t.info.node) {
            let {width, height} = _t.info.node
            _t.dragNode.dottedNode.attr({
              x: event.x - width / 2,
              y: event.y - height / 2
            })
            _t.graph.paint()
            if (_t.config.tooltip.dragNode) {
              _t.toolTip.update.call(_t, {
                left: event.canvasX,
                top: event.canvasY + height / 2
              }, `X: ${event.x.toFixed(2)} Y: ${event.y.toFixed(2)}<br>W: ${width.toFixed(2)} H: ${height.toFixed(2)}`)
            }
            if (_t.config.alignLine.enable) {
              // 绘制对齐线
              _t.alignLine.move.call(_t, _t.dragNode.dottedNode)
            }
          }
        } else if (_t.dragNode.status === 'dragNode') {
          if (_t.info.node) {
            let {id, groupId, x, y} = _t.info.node.getModel()
            _t.graph.find('node', node => {
              let model = node.getModel()
              // 更新当节点
              if (model.id === id) {
                let attrs = {
                  // 处理点击移动 图形时的抖动
                  x: x + event.event.movementX,
                  y: y + event.event.movementY
                }
                // 更新节点
                _t.graph.updateItem(_t.info.node, attrs)
                if (_t.config.dragNode.updateEdge) {
                  // 更新边
                  utils.edge.update(_t.info.node, _t.graph)
                }
                if (_t.config.tooltip.dragNode) {
                  let {width, height} = _t.info.node.getModel()
                  _t.toolTip.update.call(_t, {
                    left: event.canvasX,
                    top: event.canvasY + height / 2
                  }, `X: ${event.x.toFixed(2)} Y: ${event.y.toFixed(2)}<br>W: ${width.toFixed(2)} H: ${height.toFixed(2)}`)
                }
              } else {
                if (groupId && model.groupId && model.groupId === groupId) {
                  // 更新同组节点
                  _t.graph.updateItem(node, {
                    x: model.x + event.event.movementX,
                    y: model.y + event.event.movementY
                  })
                }
              }
            })
            if (_t.config.alignLine.enable) {
              // 绘制对齐线
              _t.alignLine.move.call(_t, _t.info.node)
            }
          }
        }
      },
      stop(event) {
        let _t = this
        // 记录操作日志11
        _t.graph.emit('editor:record', 'dragNode stop')
        _t.dragNode.clear.call(_t)
        _t.graph.paint()
      },
      clear() {
        let _t = this
        if (_t.dragNode.dottedNode) {
          _t.dragNode.dottedNode.remove()
          _t.dragNode.dottedNode = null
        }
        _t.dragNode.status = null
        _t.info = null
      }
    },
  }
}
