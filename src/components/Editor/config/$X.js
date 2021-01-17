/**
 * Created by OXOYO on 2019/7/22.
 *
 * $X命名空间
 *
 */

export default {
  fill: '#FFFFFF',
  fillOpacity: 1,
  lineColor: '#000000',
  strokeOpacity: 1,
  lineWidth: 1,
  lineType: 'x-line',
  lineDash: 'solid',
  startArrow: false,
  endArrow: false,
  iconStyle: {
    三相接地故障: {width: '196', height: '86', anchorPoints: [[0.5, 0]]},
    交流传输线: {width: '167', height: '27', anchorPoints: [[1, 0.5], [0, 0.5]]},
    交流母线: {width: '206', height: '40', anchorPoints: [[1, 0.5], [0, 0.5]]},
    光伏: {width: '165', height: '311', anchorPoints: [[0.5, 1]]},
    开关动作: {width: '113', height: '54', anchorPoints: [[1, 0.5], [0, 0.5]]},
    接地: {width: '93', height: '93', anchorPoints: [[0.5, 0]]},
    柴油发电机: {width: '93', height: '79', anchorPoints: [[0.5, 0]]},
    '电动机 Group：Motor': {width: '95', height: '58', anchorPoints: [[0, 0.5]]},
    电容直流支路: {width: '167', height: '29', anchorPoints: [[1, 0.5], [0, 0.5]]},
    电感直流线: {width: '215', height: '33', anchorPoints: [[1, 0.5], [0, 0.5]]},
    '电抗器/电容器': {width: '144', height: '29', anchorPoints: [[1, 0.5]]},
    电阻电容串联直流线: {width: '225', height: '40', anchorPoints: [[1, 0.5], [0, 0.5]]},
    电阻电容并联直流线: {width: '196', height: '60', anchorPoints: [[1, 0.5], [0, 0.5]]},
    '电阻、电感与电容串联直流线': {width: '232', height: '37', anchorPoints: [[1, 0.5], [0, 0.5]]},
    '电阻、电感与电容并联直流线': {width: '186', height: '79', anchorPoints: [[1, 0.5], [0, 0.5]]},
    电阻电感串联直流线: {width: '212', height: '37', anchorPoints: [[1, 0.5], [0, 0.5]]},
    电阻直流线: {width: '201', height: '30', anchorPoints: [[1, 0.5], [0, 0.5]]},
    直流节点: {
      width: '70', height: '26', anchorPoints: [[0.5, 0], // top
        [1, 0.5], // right
        [0.5, 1], // bottom
        [0, 0.5]]
    },
    直驱风机: {width: '117', height: '117', anchorPoints: [[1, 0.5]]},
    相角测量单元: {width: '115', height: '38', anchorPoints: [[0, 0.5]]},
    逆变单元: {width: '210', height: '53', anchorPoints: [[0, 0.5], [1, 0.25], [1, 0.75]]},
    频率测量单元: {width: '134', height: '42', anchorPoints: [[0, 0.5]]}
  },
  shapeControl: {
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
}
