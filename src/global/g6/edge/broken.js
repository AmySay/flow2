/**
 * Created by OXOYO on 2019/8/14.
 *
 * 折线
 */
import base from './base'
import { polylineFinding } from './polylineFinding'

export default {
  name: 'x-broken',
  extendName: 'single-line',
  currentCfg:null,
  options: {
    // ...base,
    draw (cfg, group) {
      const { startPoint, endPoint } = cfg
      const controlPoints = this.getControlPoints(cfg)
      let points = [startPoint]
      if (controlPoints) {
        points.push(controlPoints)
      }
      points.push(endPoint)
      this.currentCfg = cfg
      let path = this.getPath(points,cfg)
      console.log(points,'points')
      console.log(path,'path')
      const keyShape = group.addShape('path', {
        className: 'edge-shape',
        attrs: {
          ...cfg,
          path: path
        }
      })
      return keyShape
    },
    // 响应状态变化
    getPath (points,cfg) {
      const path = []
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        if (i === 0) {
          path.push([ 'M', point.x, point.y ])
          // 这里判断起点是否是母线
          if (this.currentCfg && this.currentCfg.sourceNode._cfg.currentShape === '交流母线'){
            // path.push([ 'L', point.x, point.y + 50 ])
            // path.push([ 'L', point.x - 10, point.y + 50 ])
            // path.push([ 'L', point.x - 20, point.y + 50 ])
          }
        } else if (i === points.length - 1) {
          path.push([ 'L', point.x, point.y ])
        } else {
          const prevPoint = points[i - 1]
          let nextPoint = points[i + 1]
          let cornerLen = 5
          if (Math.abs(point.y - prevPoint.y) > cornerLen || Math.abs(point.x - prevPoint.x) > cornerLen) {
            if (prevPoint.x === point.x) {
              path.push(['L', point.x, point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen])
            } else if (prevPoint.y === point.y) {
              path.push(['L', point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y])
            }
          }
          const yLen = Math.abs(point.y - nextPoint.y)
          const xLen = Math.abs(point.x - nextPoint.x)
          if (yLen > 0 && yLen < cornerLen) {
            cornerLen = yLen
          } else if (xLen > 0 && xLen < cornerLen) {
            cornerLen = xLen
          }
          if (prevPoint.x !== nextPoint.x && nextPoint.x === point.x) {
            path.push(['Q', point.x, point.y, point.x, point.y > nextPoint.y ? point.y - cornerLen : point.y + cornerLen])
          } else if (prevPoint.y !== nextPoint.y && nextPoint.y === point.y) {
            path.push(['Q', point.x, point.y, point.x > nextPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y])
          }
        }
      }
      return path
    },
    getControlPoints (cfg) {
      if (!cfg.sourceNode) {
        return cfg.controlPoints
      }
      return polylineFinding(cfg.sourceNode, cfg.targetNode, cfg.startPoint, cfg.endPoint, 40,cfg)
    }
  }
}
