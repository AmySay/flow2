/**
 * Created by OXOYO on 2019/7/3.
 *
 * 封装G6
 */

import G6 from '@antv/g6'
import registerBehavior from './behavior/index'
import registerEdge from './edge/index'
import registerNode from './node/index'

import config from './config/index'
import Cookies from 'js-cookie'


// 挂载config
G6.$C = config

// 注册自定义交互
registerBehavior(G6)
// 注册自定义边
registerEdge(G6)
// 注册自定义节点
registerNode(G6,G6.devices)

export default G6
