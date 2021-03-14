/**
* Created by OXOYO on 2019/6/28.
*
* MaterialsEditor 物料编辑器
*/

<style scoped lang="less" rel="stylesheet/less">
.materials-editor {
  display: inline-block;
  width: 100%;
  height: 100%;
  user-select: none;
  overflow: hidden;
  background: #f8f9fa;
}

.run {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f8f9fa;

  .sketchpad-box {
    left: 0 !important;
    overflow-x: hidden;


    .sketchpad {
      width: 100% !important;
      height: 100% !important;
      left: 0% !important;
      margin-left: 0 !important;
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }

  }

  .right_content {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 300px;
    right: 0;
  }

  .button_content {
    padding: 10px;
  }
}

.flex_layout {
  height: calc(100% - 94px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .flex—item {
    flex: 1;
    flex-shrink: 0;
  }
}
</style>

<template>
  <!--  <run v-if="mode === 'run'" class="run">-->
  <!--    <Sketchpad></Sketchpad>-->
  <!--  </run>-->
  <div v-if="mode === 'run'" class="run">
    <Sketchpad :sketchpadStyle="{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0
      }"></Sketchpad>
    <div class="right_content">

      <div class='button_content'>
        <el-button @click="dialogVisible = true">开始仿真</el-button>
        <el-button type="" @click='getRegtogglers'>获取开关倒闸方案</el-button>
        <div style="margin-top: 10px">
          <el-button @click='settoggleractionFn'>开关设置</el-button>
          <el-button @click='getelementparasFn'>查看仿真波形</el-button>
        </div>
      </div>
      <div class="flex_layout">
        <div class="table flex—item">
          <el-divider content-position="left">负荷转供倒闸方案</el-divider>
          <el-card class="box-card">
            <el-table
              :data="tableData"
              border
              empty-text='暂无数据'
              height="250px"
              style="width: 100%">
              <el-table-column
                v-for='item in tableHeader'
                align="center"
                :prop="item.prop"
                :label="item.label">
              </el-table-column>

            </el-table>
          </el-card>
        </div>

        <div class='history flex—item'>
          <el-divider content-position="left">操作轨迹</el-divider>
          <el-card class="box-card">
          </el-card>
        </div>

        <div class="flex—item">
          <el-divider content-position="left">曲线图</el-divider>
          <div id="main" style="height: 100%">
          </div>
        </div>
      </div>
    </div>

    <!---设置运行参数-->
    <el-dialog
      title="设置运行参数"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form
        :model="formData"
        label-width="110px"
      >
        <el-form-item
          label="文件名："
          prop="file"
        >
          <el-select v-model="formData.file" style="width: 100%;">
            <el-option label="文件一" value="fileName"></el-option>
            <el-option label="文件二" value="fileName1"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item
          label="故障路线编号："
          prop="lineNo"
        >
          <el-input v-model="formData.lineNo"/>
        </el-form-item>

        <el-form-item
          label="比例："
          prop="ratio"
        >
          <el-input v-model="formData.ratio"/>
        </el-form-item>

        <el-form-item
          label="故障时间："
          prop="faultTime"
        >
          <el-input v-model="formData.faultTime"/>
        </el-form-item>


      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="settingparametersFn">确 定</el-button>
      </span>
    </el-dialog>

  </div>


  <div class="materials-editor" @click="handleEditorClick" v-else>
    <ToolBar></ToolBar>
    <Sketchpad></Sketchpad>
    <PanelLeft :devices='devices'></PanelLeft>
    <PanelRight :originDataObj='originDataObj' :eventItem='eventItem'></PanelRight>
    <PreviewModel></PreviewModel>
    <ContextMenu></ContextMenu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import run from './containers/run'
import ToolBar from './containers/ToolBar'
import Sketchpad from './containers/Sketchpad'
import PanelLeft from './containers/PanelLeft'
import PanelRight from './containers/PanelRight'
import PreviewModel from './containers/PreviewModel'
import ContextMenu from './containers/ContextMenu'
import utils from '@/global/g6/utils'
// 扩展了节点、边的G6
import G6 from '@/global/g6/index'
// 导航器
// 自定义栅格插件
// import XGrid from '@/global/g6/plugins/XGrid'
// 背景图
import XBackground from '@/global/g6/plugins/XBackground'
// 全屏
import screenfull from 'screenfull'
// 热键
import Mousetrap from 'mousetrap'
import config from './config/index'
import {
  getDevice,
  getSvgById
} from '../../api/svg'
import {
  settingparameters,
  startrunning,
  regtogglers,
  settoggleraction,
  getelementparas
} from '../../api/yuTao'
import XLSX from 'xlsx'
import _ from 'lodash'
import moment from 'moment'

import * as echarts from 'echarts/core';
import {BarChart} from 'echarts/charts';
import {LineChart} from 'echarts/charts';
import {GridComponent} from 'echarts/components';
// 注意，新的接口中默认不再包含 Canvas 渲染器，需要显示引入，如果需要使用 SVG 渲染模式则使用 SVGRenderer
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([LineChart, GridComponent, CanvasRenderer]);


export default {
  name: 'MaterialsEditor',
  components: {
    run,
    ToolBar,
    Sketchpad,
    PanelLeft,
    PanelRight,
    PreviewModel,
    ContextMenu,
  },
  data() {
    return {
      dialogVisible: false,
      formData:
        {"faultTime": 0.2, "ratio": 0.6, "lineNo": 111, "file": "filename"}
      ,
      tableData: [],
      tableHeader: [
        {
          label: '开关编号',
          prop: 'name'
        },
        {
          label: '操作时间',
          prop: 'date'
        }
      ],
      devices: {},
      eventItem: {},
      originDataObj: {},
      editorInfo: {},
      defInfo: {
        // 编辑器状态：add || edit || preview
        status: 'add'
      },
      editor: null,
      mode: 'edit',
      isFullScreen: false,
      clipboard: {
        data: null,
        // 粘贴计数器
        count: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentItem',
      'toolList',
      'log'
    ])
  },
  methods: {
    settingparametersFn(){
      console.log(this.formData)
      settingparameters({...this.formData}).then(() => {
        startrunning()
      })
    },
    getelementparasFn() {
      getelementparas({"eleNo": 123})
      let res = {
        "element_paras": {
          "qSlack": 777,
          "aBus": 444,
          "pSlack": 666,
          "time": 15129,
          "deltaGENROU": 30,
          "vBou": 555,
          "omegaGENROU": 45,
          "iLine": 5
        }
      }
      let option = {
        xAxis: {
          type: 'category',
          data: ['15129', '15130', '15131', '15132', '15133', '15134', '15135']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [620, 732, 801, 934, 1090, 1130, 1320],
          type: 'line',
          smooth: true
        }]
      };
      this.drawChart(option)
    },
    settoggleractionFn() {
      settoggleraction({"togglerNo": 123})
    },
    getRegtogglers() {
      regtogglers().then(res => {
        this.tableData = res.reg_togglers.map(item => {
          return {
            name: item,
            date: moment().format("YYYY-MM-DD")
          }
        })
      })
    },
    async drawChart(option) {
      if (option) {
        let myChart = echarts.init(document.getElementById("main"));
        myChart.setOption(option);
      }
    },
    getDevices() {
      let res = {
        data: ''
      }
      if (localStorage.getItem('devices')) {
        res.data = JSON.parse(localStorage.getItem('devices'))
        this.devices = _.groupBy(res.data, 'typeId')
      } else {
        getDevice().then(res => {
          localStorage.setItem('devices', JSON.stringify(res.data))
          this.devices = _.groupBy(res.data, 'typeId')
          window.location.reload()
        })
      }
      this.devices = _.groupBy(res.data, 'typeId')
    },
    init() {
      let _t = this
      let el = _t.$el
      // 画板
      let sketchpad = el.querySelector('#sketchpad')
      // const grid = new XGrid()
      // const background = new XBackground()
      const plugins = []
      const background = new XBackground(_t.$X.config.background)
      plugins.push(background)
      // 生成编辑器实例
      _t.editor = new G6.Graph({
        plugins,
        container: sketchpad,
        width: sketchpad.clientWidth,
        height: sketchpad.clientHeight,
        enableStack: true,
        fitView: true,
        fitViewPadding: 20,
        // 模式
        modes: {
          edit: [
            // 'zoom-canvas',
            // 'drag-canvas',
            // 'click-select',
            {
              type: 'node-control',
              config: {
                shapeControlPoint: {
                  // 是否在缩放、旋转节点时更新所有与之相连的边
                  updateEdge: false
                },
                dragNode: {
                  // 是否在拖拽节点时更新所有与之相连的边
                  updateEdge: false
                },
                // 是否支持在节点上添加文本
                nodeLabel: true,
                // 是否支持在边上添加文本
                edgeLabel: true,
                // tooltip 是否启用
                tooltip: {
                  shapeControl: true,
                  dragNode: true,
                  dragEdge: true
                },
                // 是否启用对齐线
                alignLine: {
                  enable: true,
                  style: {
                    stroke: '#FFA500',
                    lineWidth: 1
                  }
                }
              }
            }
          ],
          // 微调
          paramsEdit: [
            {
              type: 'params-control',
              config: {
                dragNode: {
                  // 是否在拖拽节点时更新所有与之相连的边
                  updateEdge: false
                },
              }
            }
          ],
          // 只读，
          preview: [
            'zoom-canvas',
            'drag-canvas',
            'preview-canvas'
          ],
        },
        // 节点交互样式
        nodeStateStyles: {
          // 默认样式
          default: {
            fill: '#FFFFFF',
            fillOpacity: 1,
            stroke: '#000000',
            strokeOpacity: 1,
            cursor: 'move'
          },
          // active 状态下的样式
          active: {},
          // selected 状态下的样式
          selected: {},
          // hover 状态下的样式
          hover: {}
        },
        // 边交互样式
        edgeStateStyles: {
          default: {
            stroke: '#000000',
            strokeOpacity: 1,
            // 扩展响应范围
            lineAppendWidth: 10,
            cursor: 'pointer'
          }
        },
        // 分组样式
        groupType: 'rect',
        groupStyle: {
          default: {
            lineWidth: 1,
            stroke: '#29B6F2',
            // lineDash: [ 5, 5 ],
            strokeOpacity: 1,
            fill: '#29B6F2',
            fillOpacity: 0.1,
            opacity: 1,
            minDis: 0,
            maxDis: 0
          }
        }
      })
      // 挂载编辑器$X命名空间，用于Vue组件与Graph之间传值
      _t.editor.$X = {
        ...config.$X
      }
      // 挂载设备
      this.getDevices()
      // 挂载G6配置
      _t.editor.$C = G6.$C
      // 设置模式为编辑 todo
      _t.doSetMode('edit')
      // 设置默认中心
      _t.doZoom({
        name: 'actualSize'
      })
      // 绑定事件
      _t.editor.on('canvas:mousedown', _t._canvasMousedown)
      // 绑定事件
      _t.editor.on('canvas:mouseup', _t._canvasMouseup)
      // _t.editor.on('click', _t._editorClick)
      _t.editor.on('node:click', _t._nodeClick)
      _t.editor.on('node:mousedown', _t._nodeMousedown)
      _t.editor.on('node:mouseover', _t._nodeHover)
      _t.editor.on('node:mouseout', _t._nodeOut)
      // _t.editor.on('node:contextmenu', _t._nodeContextmenu)
      _t.editor.on('edge:mousedown', _t._edgeMousedown)
      _t.editor.on('editor:getItem', function (data) {
        _t.$store.commit('editor/currentItem/update', data)
      })
      _t.editor.on('editor:setItem', function (data) {
        data.forEach((item, index) => {
          let node = _t.editor.findById(item.id)
          if (!index) {
            // 更新第一个节点
            _t.editor.updateItem(node, item.model)
          } else {
            // FIXME 更新同组节点，只更新样式部分
            _t.editor.updateItem(node, {
              style: data[0].model.style
            })
          }
        })
        _t.editor.paint()
      })
      _t.editor.on('editor:contextmenu', function (data) {
        _t.$X.utils.bus.$emit('editor/contextmenu/open', data)
      })
      _t.editor.on('editor:record', function (from) {
        console.log('editor:record from', from)
        // 更新操作日志
        _t.$store.commit('editor/log/update', {
          action: 'record',
          data: {
            time: new Date(),
            content: _t.editor.save()
          }
        })
      })
      // 绑定热键
      _t.bindShortcuts()
      // 绑定unload
      _t.bindUnload()
      // 更新编辑器实例
      _t.$store.commit('editor/instance/update', _t.editor)
    }
    ,
    _canvasMousedown() {
      let _t = this
      _t.doClearAllStates()
      // 更新currentItem
      _t.$store.commit('editor/currentItem/update', [])
    }
    ,
    _canvasMouseup() {
      // let _t = this
      // _t.editor.setMode('edit')
    }
    ,
    _editorClick(event) {
    }
    ,
    _nodeClick: _.debounce(function (event) {
      let _t = this
      const id = event.item._cfg.model && event.item._cfg.model.originId
      this.eventItem = event.item
      if (id) this.getOriginData(id)
      _t.editor.setItemState(event.item, 'active', true)
    }),
    _nodeMousedown(event) {
      let _t = this
      _t.doClearAllStates()
      _t.editor.setItemState(event.item, 'active', true)
    }
    ,
    _nodeHover(event) {
      let _t = this
      // FIXME 当节点未激活时才可设置hover true状态 11
      if (!event.item.hasState('active')) {
        _t.editor.setItemState(event.item, 'hover', true)
      }
    }
    ,
    _nodeOut(event) {
      let _t = this
      _t.editor.setItemState(event.item, 'hover', false)
    }
    ,
    _nodeContextmenu(event) {
    }
    ,
    _edgeMousedown(event) {
      let _t = this
      _t.doClearAllStates()
      if (event.item && !event.item.destroyed) {
        _t.editor.setItemState(event.item, 'active', !event.item.hasState('active'))
      }
    }
    ,
    // 清除所有状态
    doClearAllStates() {
      let _t = this
      if (!_t.editor) {
        return
      }
      // 批量操作时关闭自动重绘，以提升性能
      _t.editor.setAutoPaint(false)
      _t.editor.getNodes().forEach(function (node) {
        _t.editor.clearItemStates(node, ['active', 'hover', 'selected'])
      })
      _t.editor.getEdges().forEach(function (edge) {
        _t.editor.clearItemStates(edge, ['active', 'hover', 'selected'])
      })
      _t.editor.paint()
      _t.editor.setAutoPaint(true)
    }
    ,
    doZoom(info, position) {
      let _t = this
      // 缩放率
      let ratio = 1
      let center
      if (position) {
        center = position
      } else {
        let width = _t.editor.get('width')
        let height = _t.editor.get('height')
        center = {
          x: width / 2,
          y: height / 2
        }
      }
      if (info.name === 'zoom') {
        _t.editor.zoomTo(info.data, center)
      } else if (['zoomIn', 'zoomOut'].includes(info.name)) {
        let currentRatio = _t.editor.getZoom()
        let step = 0.1
        ratio = info.name === 'zoomOut' ? currentRatio - step : currentRatio + step
        ratio = ratio.toFixed(1)
        // 缩放视窗窗口到一个固定比例
        _t.editor.zoomTo(ratio, center)
      } else if (info.name === 'actualSize') {
        ratio = 1
        // _t.editor.zoomTo(ratio)
        _t.editor.zoomTo(ratio, center)
      }
    }
    ,
    doAddNode(info) {
      let _t = this
      let node = {
        id: G6.Util.uniqueId(),
        shape: info.shape,
        label: info.defaultLabel,
        originId: info.originId,
        data: info.data,
        labelCfg: {
          position: 'bottom',
          style: {
            fontSize: 16,
            stroke: '#000000'
          }
        },
        width: info.width,
        height: info.height,
        minWidth: info.minWidth,
        minHeight: info.minHeight,
        // FIXME 定义锚点坐标
        anchorPoints: info.anchorPoints,
        // 定义shapeControl
        shapeControl: info.shapeControl
      }
      // 广播事件，通过自定义交互 node-control 添加节点
      _t.editor.emit('editor:addNode', node)
    }
    ,
    doEditorClick: _.debounce(function (info) {
      // 左边和右边联动
      const _t = this
      const id = JSON.parse(info.data).id
      _t.getOriginData(id)
    }, 300),
    getOriginData(id) {
      const originDataObj = JSON.parse(localStorage.getItem('originDataObj' + String(id)))
      if (originDataObj) {
        this.originDataObj = {...originDataObj}
      } else {
        getSvgById(id).then(res => {
          this.originDataObj = {
            originData: res.data,
            originId: id
          }
          localStorage.setItem('originDataObj' + String(id), JSON.stringify({
            originData: res.data,
            originId: id
          }))
        })
      }
    }
    ,
    doSetMode(name) {
      let _t = this
      _t.mode = name
      _t.editor.setMode(name)
      // 更新toolList
      let toolList
      toolList = _t.toolList.map(item => {
        if (item.hasOwnProperty('enableMode') && Array.isArray(item.enableMode)) {
          item.enable = item.enableMode.includes(name)
        }
        if (item.hasOwnProperty('disabledMode') && Array.isArray(item.disabledMode)) {
          item.disabled = !item.disabledMode.includes(name)
        }
        return item
      })
      _t.$store.commit('editor/toolList/update', toolList)
    }
    ,
    handleToolTrigger(info) {
      let _t = this
      // 是否记录日志标识
      let isRecord = false
      switch (info.name) {
        case 'undo':
        case 'redo':
        case 'clearLog':
          // 更新操作日志
          _t.$store.commit('editor/log/update', {
            action: info.name
          })
          if (['undo', 'redo'].includes(info.name)) {
            _t.$nextTick(function () {
              if (_t.log.list.length) {
                if (_t.log.current === 0) {
                  let data = _t.log.list[0]
                  if (data === null) {
                    // 清除
                    _t.editor.clear()
                    _t.editor.paint()
                  } else {
                    // 渲染
                    _t.editor.read(data.content)
                    _t.editor.paint()
                    // 缩放到实际大小
                    _t.doZoom({
                      name: 'actualSize'
                    })
                  }
                } else {
                  let data = _t.log.list[_t.log.current]
                  // 渲染
                  _t.editor.read(data.content)
                  _t.editor.paint()
                  // 缩放到实际大小
                  _t.doZoom({
                    name: 'actualSize'
                  })
                }
              }
            })
            // 更新currentItem
            _t.$store.commit('editor/currentItem/update', [])
          }
          break
        case 'copy':
          (() => {
            // FIXME 目前只支持节点的复制，不支持边的复制，边只能通过拖拽生成
            let data = _t.currentItem ? _t.currentItem.filter(item => item.type === 'node') : []
            _t.clipboard = {
              data,
              count: 0
            }
          })()
          break
        case 'paste':
          (() => {
            let data = _t.clipboard.data
            _t.clipboard.count++
            if (data.length) {
              data.forEach((item, index) => {
                let model = item.model
                // 计算坐标，添加一定偏移量，防止重叠
                let x = model.x + 10 * _t.clipboard.count
                let y = model.y + 10 * _t.clipboard.count
                // 如果通过右键菜单触发的，则获取触发菜单时的canvas坐标
                if (info && info.context === 'ContextMenu' && info.data) {
                  if (info.data.hasOwnProperty('canvasX')) {
                    x = model.x + info.data.canvasX - data[0].model.x
                  }
                  if (info.data.hasOwnProperty('canvasY')) {
                    y = model.y + info.data.canvasY - data[0].model.y
                  }
                }
                let node = {
                  ...model,
                  id: G6.Util.uniqueId(),
                  groupId: '',
                  x,
                  y
                }
                _t.editor.addItem('node', node)
              })
            }
          })()
          break
        case 'delete':
          // 删除逻辑
          _t.editor.getNodes().forEach(node => {
            if (node.hasState('active')) {
              isRecord = true
              _t.editor.removeItem(node)
            }
          })
          _t.editor.getEdges().forEach(edge => {
            if (edge.hasState('active')) {
              isRecord = true
              _t.editor.removeItem(edge)
            }
          })
          // 更新currentItem
          _t.$store.commit('editor/currentItem/update', [])
          break
        case 'zoom':
        case 'zoomIn':
        case 'zoomOut':
        case 'actualSize':
          _t.doZoom(info)
          break
        case 'fit':
          _t.editor.fitView()
          break
        case 'run':
          _t.doSetMode(info.data)
          console.log(info)
          break
        case 'preview':
          _t.doSetMode(info.name)
          let previewData = {
            type: info.data,
            content: ''
          }
          if (info.data === 'image') {
            previewData.content = _t.editor.toDataURL()
          } else if (info.data === 'json') {
            previewData.content = _t.editor.save()
          }
          // 显示预览弹窗
          _t.$X.utils.bus.$emit('editor/previewModel/open', previewData)
          break
        case 'edit':
          _t.doSetMode(info.data)
          break
        case 'fill':
          _t.editor.$X.fill = info.data
          _t.editor.getNodes().forEach(node => {
            if (node.hasState('active')) {
              isRecord = true
              let {style} = node.getModel()
              _t.editor.updateItem(node, {
                style: {
                  ...style,
                  fill: info.data
                }
              })
            }
          })
          break
        case 'lineColor':
          _t.editor.$X.lineColor = info.data
          _t.editor.getEdges().forEach(edge => {
            if (edge.hasState('active')) {
              isRecord = true
              let {style} = edge.getModel()
              _t.editor.updateItem(edge, {
                style: {
                  ...style,
                  stroke: info.data
                }
              })
            }
          })
          _t.editor.getNodes().forEach(node => {
            if (node.hasState('active')) {
              isRecord = true
              let {style} = node.getModel()
              _t.editor.updateItem(node, {
                style: {
                  ...style,
                  stroke: info.data
                }
              })
            }
          })
          break
        case 'lineWidth':
          _t.editor.$X.lineWidth = info.data
          _t.editor.getEdges().forEach(edge => {
            if (edge.hasState('active')) {
              isRecord = true
              let {style} = edge.getModel()
              _t.editor.updateItem(edge, {
                style: {
                  ...style,
                  lineWidth: info.data
                }
              })
            }
          })
          _t.editor.getNodes().forEach(node => {
            if (node.hasState('active')) {
              isRecord = true
              let {style} = node.getModel()
              _t.editor.updateItem(node, {
                style: {
                  ...style,
                  lineWidth: info.data
                }
              })
            }
          })
          break
        case 'lineDash':
          let edgeConfig = _t.editor.$C.edge
          _t.editor.$X.lineDash = info.data
          _t.editor.getEdges().forEach(edge => {
            if (edge.hasState('active')) {
              isRecord = true
              let {style} = edge.getModel()
              _t.editor.updateItem(edge, {
                style: {
                  ...style,
                  ...edgeConfig.type[info.data]
                }
              })
            }
          })
          _t.editor.getNodes().forEach(node => {
            if (node.hasState('active')) {
              isRecord = true
              let {style} = node.getModel()
              _t.editor.updateItem(node, {
                style: {
                  ...style,
                  ...edgeConfig.type[info.data]
                }
              })
            }
          })
          break
        case 'lineType':
          _t.editor.$X.lineType = info.data
          _t.editor.getEdges().forEach(edge => {
            if (edge.hasState('active')) {
              isRecord = true
              _t.editor.updateItem(edge, {
                shape: info.data
              })
              _t.editor.refreshItem(edge)
            }
          })
          break
        case 'startArrow':
        case 'endArrow':
          _t.editor.$X[info.name] = info.data
          // 根据端点类型更新边
          _t.editor.getEdges().forEach(edge => {
            if (edge.hasState('active')) {
              isRecord = true
              let {style} = edge.getModel()
              _t.editor.updateItem(edge, {
                style: {
                  ...style,
                  [info.name]: info.data
                }
              })
            }
          })
          break
        case 'clear':
          _t.$Modal.confirm({
            title: _t.$t('L10200'),
            // 确认清空画布？
            content: _t.$t('L10201'),
            onOk: function () {
              // 更新操作日志
              _t.$store.commit('editor/log/update', {
                action: 'clear'
              })
              _t.editor.clear()
              _t.editor.paint()
            }
          })
          // 更新currentItem
          _t.$store.commit('editor/currentItem/update', [])
          break
        case 'toFront':
        case 'toBack':
          if (Array.isArray(info.data)) {
            info.data.forEach(data => {
              if (data.hasOwnProperty('id') && data.id) {
                isRecord = true
                let item = _t.editor.findById(data.id)
                if (item && item[info.name]) {
                  // 执行操作
                  item[info.name]()
                  _t.editor.paint()
                }
              }
            })
          }
          break
        case 'fullscreen':
          if (screenfull.enabled) {
            screenfull.toggle()
          }
          break
        case 'upload':
          _t.$Modal.confirm({
            title: _t.$t('L10200'),
            // 上传JSON数据将覆盖当前画布，确认上传？
            content: _t.$t('L10206'),
            onOk: function () {
              // 打开文件选择窗口
              let input = document.createElement('input')
              input.type = 'file'
              // 限定文件类型
              input.accept = '.json'
              input.click()
              input.onchange = function () {
                let file = input.files[0]
                // FileReader实例
                let reader = new FileReader()
                // 读取文件
                reader.readAsText(file, 'UTF-8')
                // 处理数据
                reader.onload = function (event) {
                  try {
                    let fileString = event.target.result
                    let fileJson = JSON.parse(fileString)
                    // 清空画布
                    _t.editor.clear()
                    // 更新currentItem
                    _t.$store.commit('editor/currentItem/update', [])
                    // 设置数据
                    _t.editor.data(fileJson)
                    // 渲染
                    _t.editor.render()
                    _t.editor.getNodes().forEach(node => {
                      let model = node.getModel()
                      let radian = model.radian
                      let keyShape = node.getKeyShape()
                      keyShape.resetMatrix()
                      keyShape.rotate(radian)
                      let group = _t.editor.get('group')
                      // 更新shapeControl
                      utils.shapeControl.rotate(model, group, radian)
                      // 更新锚点
                      utils.anchor.rotate(model, group, radian)
                    })
                    // 加载数据后保存记录
                    // 更新操作日志
                    _t.$store.commit('editor/log/update', {
                      action: 'loadData',
                      data: {
                        time: new Date(),
                        content: _t.editor.save()
                      }
                    })
                  } catch (e) {
                    // 提示
                    _t.$Message.error(_t.$t('L10207'))
                    console.error('Editor Error:: upload JSON failed!', e)
                  }
                }
              }
            }
          })
          break
        case 'download':
          let fileName = _t.$X.config.system.name + '_' + _t.$X.utils.filters.formatDate(new Date(), 'YYYYMMDDhhmmss')
          if (info.data === 'image') {
            _t.editor.downloadImage(fileName)
          } else if (info.data === 'json') {
            let content = _t.editor.save()
            content = JSON.stringify(content)
            let blob = new Blob([content], {
              type: 'application/json;charset=UTF-8'
            })
            let url = URL.createObjectURL(blob)
            let link = document.createElement('a')
            link.textContent = 'download json'
            link.href = url
            link.download = fileName
            link.click()
            // no longer need to read the blob so it's revoked
            URL.revokeObjectURL(url)
          } else if (info.data === 'excel') {
            /!* create a new blank workbook *!/
            let wb = XLSX.utils.book_new();
            let dataList = []
            _t.editor.getNodes().forEach((node, index) => {
              const model = node.getModel()
              if (model.params) {
                dataList.push(model.params)
              }
            })
            if (!dataList.length) return
            const excelData = _.groupBy(dataList, 'originId')
            Object.entries(excelData).forEach(sheet => {
              const sheetData = sheet[1]
              const sheetName = sheetData[0].form.modelName
              let s = sheetData.map((row, rowIndex) => {
                let obj = {}
                row.paramList.map(cell => {
                  const name = cell.name
                  obj = {
                    'uid': rowIndex, ...obj,
                    [name]: cell.defaultValue
                  }
                });
                return obj
              })
              console.log(s)
              XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(s), sheetName);
            })
            // let sheetData = [{department: "行政部", count: 2}, {department: "前端部", count: 2}];
            const workbookBlob = this.workbook2blob(wb);
            this.openDownloadDialog(workbookBlob, `GUI.xlsx`);
          }
          break
        case 'selectAll':
          let groupId = G6.Util.uniqueId()
          _t.editor.getNodes().forEach(node => {
            // 更新节点
            _t.editor.updateItem(node, {
              groupId
            })
            _t.editor.setItemState(node, 'active', true)
          })
          break
        case 'canvasBackground':
          switch (info.data) {
            case 'default':
              _t.editor.emit('background:reset')
              break
            case 'image':
              // 打开文件选择窗口
              let input = document.createElement('input')
              input.type = 'file'
              // 限定文件类型
              input.accept = 'image/png, image/jpeg, image/jpg'
              input.click()
              input.onchange = function () {
                let file = input.files[0]
                // FileReader实例
                let reader = new FileReader()
                // 读取图片
                if (file) {
                  reader.readAsDataURL(file)
                  // 处理数据
                  reader.onload = function (event) {
                    try {
                      let imgFile = reader.result
                      _t.editor.emit('background:update', imgFile)
                    } catch (e) {
                      console.error('Editor Error:: update background failed!', e)
                    }
                  }
                }
              }
              break
          }
          break
        case 'canvasBackgroundColor':
          _t.editor.emit('background:set', info.data)
          break
        case 'up':
        case 'down':
        case 'left':
        case 'right':
          _t.editor.getNodes().forEach(node => {
            if (node.hasState('active')) {
              isRecord = true
              let model = node.getModel()
              let position = {
                x: model.x,
                y: model.y
              }
              switch (info.name) {
                case 'up':
                  position.y--
                  break
                case 'down':
                  position.y++
                  break
                case 'left':
                  position.x--
                  break
                case 'right':
                  position.x++
                  break
              }
              _t.editor.updateItem(node, position)
            }
          })
          break
      }
      if (isRecord) {
        // 记录操作日志
        _t.editor.emit('editor:record', 'handleToolTrigger')
      }
    }
    ,
    initInfo(data = {}) {
      let _t = this
      _t.editorInfo = {
        ..._t.defInfo,
        ...data
      }
    }
    ,
    openDownloadDialog(blob, fileName) {
      if (typeof blob == "object" && blob instanceof Blob) {
        blob = URL.createObjectURL(blob); // 创建blob地址
      }
      var aLink = document.createElement("a");
      aLink.href = blob;
      // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
      aLink.download = fileName || "";
      var event;
      if (window.MouseEvent) event = new MouseEvent("click");
      //   移动端
      else {
        event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      }
      aLink.dispatchEvent(event);
    }
    ,
    workbook2blob(workbook) {
      // 生成excel的配置项
      var wopts = {
        // 要生成的文件类型
        bookType: "xlsx",
        // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        bookSST: false,
        type: "binary"
      };
      var wbout = XLSX.write(workbook, wopts);

      // 将字符串转ArrayBuffer
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }

      var blob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
      });
      return blob;
    }
    ,


    bindShortcuts() {
      let _t = this
      _t.toolList.forEach(item => {
        if (item.enable && item.shortcuts) {
          Mousetrap.bind(item.shortcuts, function (e) {
            if (e.preventDefault) {
              e.preventDefault()
            } else {
              // internet explorer
              e.returnValue = false
            }
            _t.handleToolTrigger({
              name: item.name,
              data: {}
            })
            return false
          })
        }
      })
      // 绑定按键事件
      document.addEventListener('keyup', function () {
        _t.$X.utils.bus.$emit('editor/contextmenu/close')
      })
    }
    ,
    bindUnload() {
      // todo
      window.onbeforeunload = function (event) {
        event.returnValue = false
        return false
      }
    }
    ,
    handleEditorClick() {
      let _t = this
      _t.$X.utils.bus.$emit('editor/contextmenu/close')
    }
  },
  created() {
    let _t = this
    // 处理操作类型，初始化编辑器
    _t.initInfo()
    _t.$nextTick(_t.init)

    _t.$X.utils.bus.$on('editor/add/node', _t.doAddNode)
    _t.$X.utils.bus.$on('editor/click', function (data) {
      _t.doEditorClick(data)
    })
    _t.$X.utils.bus.$on('editor/tool/trigger', _t.handleToolTrigger)
    _t.$X.utils.bus.$on('editor/currentItem/update', function (data) {
      _t.editor.emit('editor:setItem', data)
    })


  },
  mounted() {

    setTimeout(function () {
      this.drawChart();
    }.bind(this))
  }
}
</script>
