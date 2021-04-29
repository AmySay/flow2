/**
 * Created by OXOYO on 2019/7/22.
 *
 * $X命名空间
 *
 */
const points = [[0.01,0],[0.01,1],[0.02,0],[0.02,1],[0.03,0],[0.03,1],[0.04,0],[0.04,1],[0.05,0],[0.05,1],[0.060000000000000005,0],[0.060000000000000005,1],[0.07,0],[0.07,1],[0.08,0],[0.08,1],[0.09,0],[0.09,1],[0.09999999999999999,0],[0.09999999999999999,1],[0.10999999999999999,0],[0.10999999999999999,1],[0.11999999999999998,0],[0.11999999999999998,1],[0.12999999999999998,0],[0.12999999999999998,1],[0.13999999999999999,0],[0.13999999999999999,1],[0.15,0],[0.15,1],[0.16,0],[0.16,1],[0.17,0],[0.17,1],[0.18000000000000002,0],[0.18000000000000002,1],[0.19000000000000003,0],[0.19000000000000003,1],[0.20000000000000004,0],[0.20000000000000004,1],[0.21000000000000005,0],[0.21000000000000005,1],[0.22000000000000006,0],[0.22000000000000006,1],[0.23000000000000007,0],[0.23000000000000007,1],[0.24000000000000007,0],[0.24000000000000007,1],[0.25000000000000006,0],[0.25000000000000006,1],[0.26000000000000006,0],[0.26000000000000006,1],[0.2700000000000001,0],[0.2700000000000001,1],[0.2800000000000001,0],[0.2800000000000001,1],[0.2900000000000001,0],[0.2900000000000001,1],[0.3000000000000001,0],[0.3000000000000001,1],[0.3100000000000001,0],[0.3100000000000001,1],[0.3200000000000001,0],[0.3200000000000001,1],[0.3300000000000001,0],[0.3300000000000001,1],[0.34000000000000014,0],[0.34000000000000014,1],[0.35000000000000014,0],[0.35000000000000014,1],[0.36000000000000015,0],[0.36000000000000015,1],[0.37000000000000016,0],[0.37000000000000016,1],[0.38000000000000017,0],[0.38000000000000017,1],[0.3900000000000002,0],[0.3900000000000002,1],[0.4000000000000002,0],[0.4000000000000002,1],[0.4100000000000002,0],[0.4100000000000002,1],[0.4200000000000002,0],[0.4200000000000002,1],[0.4300000000000002,0],[0.4300000000000002,1],[0.4400000000000002,0],[0.4400000000000002,1],[0.45000000000000023,0],[0.45000000000000023,1],[0.46000000000000024,0],[0.46000000000000024,1],[0.47000000000000025,0],[0.47000000000000025,1],[0.48000000000000026,0],[0.48000000000000026,1],[0.49000000000000027,0],[0.49000000000000027,1],[0.5000000000000002,0],[0.5000000000000002,1],[0.5100000000000002,0],[0.5100000000000002,1],[0.5200000000000002,0],[0.5200000000000002,1],[0.5300000000000002,0],[0.5300000000000002,1],[0.5400000000000003,0],[0.5400000000000003,1],[0.5500000000000003,0],[0.5500000000000003,1],[0.5600000000000003,0],[0.5600000000000003,1],[0.5700000000000003,0],[0.5700000000000003,1],[0.5800000000000003,0],[0.5800000000000003,1],[0.5900000000000003,0],[0.5900000000000003,1],[0.6000000000000003,0],[0.6000000000000003,1],[0.6100000000000003,0],[0.6100000000000003,1],[0.6200000000000003,0],[0.6200000000000003,1],[0.6300000000000003,0],[0.6300000000000003,1],[0.6400000000000003,0],[0.6400000000000003,1],[0.6500000000000004,0],[0.6500000000000004,1],[0.6600000000000004,0],[0.6600000000000004,1],[0.6700000000000004,0],[0.6700000000000004,1],[0.6800000000000004,0],[0.6800000000000004,1],[0.6900000000000004,0],[0.6900000000000004,1],[0.7000000000000004,0],[0.7000000000000004,1],[0.7100000000000004,0],[0.7100000000000004,1],[0.7200000000000004,0],[0.7200000000000004,1],[0.7300000000000004,0],[0.7300000000000004,1],[0.7400000000000004,0],[0.7400000000000004,1],[0.7500000000000004,0],[0.7500000000000004,1],[0.7600000000000005,0],[0.7600000000000005,1],[0.7700000000000005,0],[0.7700000000000005,1],[0.7800000000000005,0],[0.7800000000000005,1],[0.7900000000000005,0],[0.7900000000000005,1],[0.8000000000000005,0],[0.8000000000000005,1],[0.8100000000000005,0],[0.8100000000000005,1],[0.8200000000000005,0],[0.8200000000000005,1],[0.8300000000000005,0],[0.8300000000000005,1],[0.8400000000000005,0],[0.8400000000000005,1],[0.8500000000000005,0],[0.8500000000000005,1],[0.8600000000000005,0],[0.8600000000000005,1],[0.8700000000000006,0],[0.8700000000000006,1],[0.8800000000000006,0],[0.8800000000000006,1],[0.8900000000000006,0],[0.8900000000000006,1],[0.9000000000000006,0],[0.9000000000000006,1],[0.9100000000000006,0],[0.9100000000000006,1],[0.9200000000000006,0],[0.9200000000000006,1],[0.9300000000000006,0],[0.9300000000000006,1],[0.9400000000000006,0],[0.9400000000000006,1],[0.9500000000000006,0],[0.9500000000000006,1],[0.9600000000000006,0],[0.9600000000000006,1],[0.9700000000000006,0],[0.9700000000000006,1],[0.9800000000000006,0],[0.9800000000000006,1],[0.9900000000000007,0],[0.9900000000000007,1],[1.0000000000000007,0],[1.0000000000000007,1]]

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
    交流母线: {width: '206', height: '40', anchorPoints: points},
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
