import Vue from 'vue'
import Vuex from 'vuex'
import system from "@/config/system";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editor: {
      // 编辑器实例
      instance: null,
      currentItem: [],
      // 最大操作日志数，null 不限制
      maxLog: null,
      // 操作日志
      log: {
        current: null,
        list: []
      },
      // 工具列表
      sysList: system.sysToolBar,
      toolList: system.GUIToolBar,
      functionlist: system.functionlist,
    }
  },
  mutations: {
    'editor/instance/update': (state, data) => {
      state.editor.instance = data
    },
    'editor/currentItem/update': (state, data) => {
      state.editor.currentItem = data
    },
    'editor/sysList/update': (state, data) => {
      state.editor.sysList = data
    },
    'editor/toolList/update': (state, data) => {
      state.editor.toolList = data
    },
    'editor/functionlist/update': (state, data) => {
      state.editor.functionlist = data
    },
    'editor/log/update': (state, data) => {
      if (!data.hasOwnProperty('action') || !data.action) {
        return
      }
      let oldLog = state.editor.log
      let maxLog = state.editor.maxLog
      let log = {
        current: null,
        list: []
      }
      switch (data.action) {
        // 记录
        case 'record':
          if (oldLog.current === null) {
            oldLog.list = [null]
          } else if (oldLog.list.length - 1 > oldLog.current) {
            let removeCount = oldLog.list.length - 1 - oldLog.current
            oldLog.list.splice(oldLog.current + 1, removeCount)
          }
          if (maxLog !== null && oldLog.list.length > maxLog) {
            oldLog.list.splice(0, 1)
          }
          log.list = [
            ...oldLog.list,
            JSON.parse(JSON.stringify(data.data))
          ]
          log.current = log.list.length - 1
          break
        // 撤销
        case 'undo':
          log.list = [
            ...oldLog.list
          ]
          log.current = oldLog.current - 1 < 0 ? 0 : oldLog.current - 1
          break
        // 重做
        case 'redo':
          log.list = [
            ...oldLog.list
          ]
          if (oldLog.current === null) {
            log.current = oldLog.list.length ? 0 : null
          } else {
            log.current = oldLog.current + 1 > oldLog.list.length - 1 ? oldLog.list.length - 1 : oldLog.current + 1
          }
          break
        // 清空
        case 'clearLog':
          log.list = [
            oldLog.list[oldLog.current]
          ]
          log.current = 0
          break
        case 'loadData':
          if (oldLog.current === null) {
            log.list = [
              JSON.parse(JSON.stringify(data.data))
            ]
          } else {
            if (oldLog.list.length - 1 > oldLog.current) {
              let removeCount = oldLog.list.length - 1 - oldLog.current
              oldLog.list.splice(oldLog.current + 1, removeCount)
            }
            if (maxLog !== null && oldLog.list.length > maxLog) {
              oldLog.list.splice(0, 1)
            }
            log.list = [
              ...oldLog.list,
              JSON.parse(JSON.stringify(data.data))
            ]
          }
          log.current = log.list.length - 1
          break
      }
      state.editor.log = log
    }
  },
  actions: {},
  getters: {
    editor: state => state.editor.instance,
    currentItem: state => state.editor.currentItem,
    toolList: state => state.editor.toolList,
    sysList: state => state.editor.sysList,
    functionlist: state => state.editor.functionlist,
    log: state => state.editor.log
  }
})
