/**
 * Created by OXOYO on 2019/5/18.
 *
 * 系统相关配置
 */

export default {
  name:'GUI',
  sysToolBar: [
    {
      name: '系统',
      label: 'File',
      type: 'normal',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
    },{
      name: '系统',
      label: 'Edit',
      type: 'normal',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
    },{
      name: '系统',
      label: 'View',
      type: 'normal',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
    },{
      name: '系统',
      label: 'Help',
      type: 'normal',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
    },
  ],
  functionlist: [
    {
      name: '绘图模式',
      label: '绘图模式',
      type: 'normal',
      icon: '绘图模式',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
    },
    {
      name: '绘图模式',
      label: '绘图模式',
      type: 'normal',
      icon: '潮流计算模式',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
      child: [
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '开始潮流计算',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '波形单位设定',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '生成结果报告',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
      ]
    },
    // 谐波分析模式
    {
      name: '绘图模式',
      label: '绘图模式',
      type: 'normal',
      icon: '谐波分析模式',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
      child: [
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '开始谐波计算',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '扫频分析',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '谐波波形',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '波形单位设定',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
      ]
    },

    {
      name: '绘图模式',
      label: '绘图模式',
      type: 'normal',
      icon: '短路计算',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
      child: [
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '三相接地短路',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '单相接地短路',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '三相断路',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
      ]
    },

    // 继电保护
    {
      name: '绘图模式',
      label: '绘图模式',
      type: 'normal',
      icon: '继电保护',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
      child: [
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '设置故障',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '运行继电保护',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
      ]
    },

    // 可靠性计算模式
    {
      name: '绘图模式',
      label: '绘图模式',
      type: 'normal',
      icon: '可靠性计算模式',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
      child: [
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '可靠性计算',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
      ]
    },
    // 时域仿真模式
    {
      name: '绘图模式',
      label: '绘图模式',
      type: 'normal',
      icon: '时域仿真模式',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      toolbar: {
        enable: true,
        position: 'left',
        style: {},
        divider: false
      },
      child: [
        {
          name: '绘图模式',
          label: '绘图模式',
          type: 'normal',
          icon: '时域仿真',
          enable: true,
          enableMode: ['edit'],
          disabled: false,
          disabledMode: ['edit'],
          toolbar: {
            enable: true,
            position: 'left',
            style: {},
            divider: false
          },
        },
      ]
    },
  ],
  GUIToolBar: [
    {
      name: 'undo',
      label: 'Undo',
      lang: 'L10001',
      type: 'normal',
      icon: 'undo',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'mod+z',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    {
      name: 'clearLog',
      label: 'ClearLog',
      lang: 'L10032',
      type: 'normal',
      icon: 'clear-log',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'mod+shift+l',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    {
      name: 'redo',
      label: 'Redo',
      lang: 'L10002',
      type: 'normal',
      icon: 'redo',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'mod+shift+z',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: true
      }
    },
    {
      name: 'copy',
      label: 'Copy',
      lang: 'L10003',
      type: 'normal',
      icon: 'copy',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      // FIXME 通用mod助手用于设置跨平台快捷方式，用于将command+c在Windows和Linux上映射到mod+c
      shortcuts: 'mod+c',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['node', 'edge'],
        style: {},
        divider: false
      }
    },
    {
      name: 'paste',
      label: 'Paste',
      lang: 'L10004',
      type: 'normal',
      icon: 'paste',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'mod+v',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas', 'node', 'edge'],
        style: {},
        divider: false
      }
    },
    {
      name: 'delete',
      label: 'Delete',
      lang: 'L10010',
      type: 'normal',
      icon: 'delete',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: ['del', 'backspace'],
      toolbar: {
        enable: false,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['node', 'edge'],
        style: {},
        divider: true
      }
    },
    {
      name: 'clear',
      label: 'Clear',
      lang: 'L10005',
      type: 'normal',
      icon: 'clear',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'mod+shift+e',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: true
      }
    },
    {
      name: 'zoom',
      label: 'Zoom',
      lang: 'L10029',
      type: 'dropdown-list',
      icon: 'zoom',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      },
      // 默认选中项index
      selected: 0,
      // 锁定下拉菜单label
      lockLabel: true,
      // 子节点
      children: [
        {
          name: '25%',
          label: '25%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 0.25,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: '50%',
          label: '50%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 0.5,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: '75%',
          label: '75%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 0.75,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: '100%',
          label: '100%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 1,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: '125%',
          label: '125%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 1.25,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: '150%',
          label: '150%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 1.5,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: '200%',
          label: '200%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 2,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: '300%',
          label: '300%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 3,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: '400%',
          label: '400%',
          lang: '',
          type: 'normal',
          icon: '',
          data: 4,
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },
    {
      name: 'zoomIn',
      label: 'Zoom In',
      lang: 'L10006',
      type: 'normal',
      icon: 'zoom-in',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      // FIXME mod+= 用于支持主键盘区的+，mod+plus用于支持数字键盘区的+
      shortcuts: ['mod+=', 'mod+plus'],
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    {
      name: 'zoomOut',
      label: 'Zoom Out',
      lang: 'L10007',
      type: 'normal',
      icon: 'zoom-out',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: 'mod+-',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    {
      name: 'fit',
      label: 'Fit',
      lang: 'L10008',
      type: 'normal',
      icon: 'fit',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: 'mod+0',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    {
      name: 'actualSize',
      label: 'Actual Size',
      lang: 'L10009',
      type: 'normal',
      icon: 'actual-size',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: 'mod+1',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: true
      }
    },
    {
      name: 'fill',
      label: 'fill',
      lang: 'L10011',
      type: 'dropdown-color-picker',
      icon: 'fill',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['node', 'edge'],
        style: {},
        divider: false
      }
    },
    {
      name: 'lineColor',
      label: 'line color',
      lang: 'L10012',
      type: 'dropdown-color-picker',
      icon: 'line-color',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['node', 'edge'],
        style: {},
        divider: false
      }
    },
    {
      name: 'lineWidth',
      label: 'line width',
      lang: 'L10013',
      type: 'dropdown-list',
      icon: 'line-width',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['node', 'edge'],
        style: {},
        divider: false
      },
      // 默认选中项index
      selected: 0,
      lockLabel: true,
      // 子节点
      children: [
        {
          name: 1,
          label: '1px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 2,
          label: '2px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 3,
          label: '3px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 4,
          label: '4px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 5,
          label: '5px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 6,
          label: '6px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 7,
          label: '7px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 8,
          label: '8px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 9,
          label: '9px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 10,
          label: '10px',
          lang: '',
          type: 'normal',
          icon: '',
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },
    {
      name: 'lineDash',
      label: 'line style',
      lang: 'L10014',
      type: 'dropdown-list',
      icon: 'line-style',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['node', 'edge'],
        style: {},
        divider: true
      },
      // 默认选中项index
      selected: 0,
      lockLabel: false,
      // 子节点
      children: [
        {
          name: 'solid',
          label: 'solid',
          lang: '',
          type: 'normal',
          icon: 'solid',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'dashed',
          label: 'dashed',
          lang: '',
          type: 'normal',
          icon: 'dashed',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'dot',
          label: 'dot',
          lang: '',
          type: 'normal',
          icon: 'dot',
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },
    {
      name: 'lineType',
      label: 'line type',
      lang: 'L10015',
      type: 'dropdown-list',
      icon: '',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['edge'],
        style: {},
        divider: false
      },
      // 默认选中项index
      selected: 0,
      lockLabel: false,
      // 子节点
      children: [
        {
          name: 'x-line',
          label: 'line',
          lang: '',
          type: 'normal',
          icon: 'flow-line',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'x-broken',
          label: 'broken',
          lang: '',
          type: 'normal',
          icon: 'flow-broken',
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'x-cubic',
          label: 'cubic',
          lang: '',
          type: 'normal',
          icon: 'flow-curve',
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },
    {
      name: 'startArrow',
      label: 'start arrow',
      lang: 'L10016',
      type: 'dropdown-list',
      icon: '',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['edge'],
        style: {
          'white-space': 'nowrap'
        },
        divider: false
      },
      // 默认选中项index
      selected: 0,
      lockLabel: false,
      // 子节点
      children: [
        {
          name: 'none',
          label: 'none',
          lang: '',
          type: 'normal',
          icon: 'solid',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'solidArrow',
          label: 'solid arrow',
          lang: '',
          type: 'normal',
          icon: 'solid-arrow',
          style: {},
          data: {
            path: 'M10,0 L-10,-10 L-10,10 Z',
            d: 10
          },
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'normalArrow',
          label: 'normal arrow',
          lang: '',
          type: 'normal',
          icon: 'normal-arrow',
          style: {},
          data: {
            path: 'M10,0 L-10,10 L-10.707,9.293 L8.568,0 L-10.707,-9.293 L-10,-10 Z',
            d: 10
          },
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'asynchArrow',
          label: 'asynch arrow',
          lang: '',
          type: 'normal',
          icon: 'asynch-arraw',
          style: {},
          data: {
            path: 'M10,0 L-10,10 L-10.707,9.293 L8.568,0 Z',
            d: 10
          },
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },
    {
      name: 'endArrow',
      label: 'end arrow',
      lang: 'L10017',
      type: 'dropdown-list',
      icon: '',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['edge'],
        style: {
          'white-space': 'nowrap'
        },
        divider: true
      },
      // 默认选中项index
      selected: 0,
      lockLabel: false,
      // 子节点
      children: [
        {
          name: 'none',
          label: 'none',
          lang: '',
          type: 'normal',
          icon: 'solid',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'solidArrow',
          label: 'solid arrow',
          lang: '',
          type: 'normal',
          icon: 'solid-arrow',
          style: {
            display: 'inline-block',
            transform: 'rotate(180deg)'
          },
          data: {
            path: 'M10,0 L-10,-10 L-10,10 Z',
            d: 10
          },
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'normalArrow',
          label: 'normal arrow',
          lang: '',
          type: 'normal',
          icon: 'normal-arrow',
          style: {
            display: 'inline-block',
            transform: 'rotate(180deg)'
          },
          data: {
            path: 'M10,0 L-10,10 L-10.707,9.293 L8.568,0 L-10.707,-9.293 L-10,-10 Z',
            d: 10
          },
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'asynchArrow',
          label: 'asynch arrow',
          lang: '',
          type: 'normal',
          icon: 'asynch-arraw',
          style: {
            display: 'inline-block',
            transform: 'rotate(180deg)'
          },
          data: {
            path: 'M10,0 L-10,10 L-10.707,9.293 L8.568,0 Z',
            d: 10
          },
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },
    {
      name: 'toFront',
      label: 'To Front',
      lang: 'L10018',
      type: 'normal',
      icon: 'to-front',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['node', 'edge'],
        style: {},
        divider: false
      }
    },
    {
      name: 'toBack',
      label: 'To Back',
      lang: 'L10019',
      type: 'normal',
      icon: 'to-back',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['node', 'edge'],
        style: {},
        divider: true
      }
    },
    {
      name: 'selectAll',
      label: 'SelectAll',
      lang: 'L10031',
      type: 'normal',
      icon: 'select-all',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'mod+a',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    {
      name: 'marquee',
      label: 'Marquee',
      lang: 'L10020',
      type: 'normal',
      icon: 'marquee',
      enable: false,
      enableMode: [],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: [],
        style: {},
        divider: false
      }
    },
    {
      name: 'group',
      label: 'Group',
      lang: 'L10021',
      type: 'normal',
      icon: 'group',
      enable: false,
      enableMode: [],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: [],
        style: {},
        divider: false
      }
    },
    {
      name: 'ungroup',
      label: 'Ungroup',
      lang: 'L10022',
      type: 'normal',
      icon: 'ungroup',
      enable: false,
      enableMode: [],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: [],
        style: {},
        divider: true
      }
    },
    /*{
      name: 'edit',
      label: 'edit',
      lang: 'L10023',
      type: 'normal',
      icon: 'edit',
      enable: true,
      enableMode: ['preview'],
      disabled: false,
      disabledMode: ['preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },*/
    {
      name: 'edit',
      label: 'edit',
      lang: 'L10023',
      type: 'dropdown-list',
      icon: 'edit',
      enable: true,
      enableMode: ['edit', 'preview', 'paramsEdit'],
      disabled: false,
      disabledMode: ['edit', 'preview', 'paramsEdit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      },
      // 默认选中项index
      selected: 0,
      lockLabel: true,
      // 子节点
      children: [
        {
          name: 'edit',
          label: '完全模式',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'paramsEdit',
          label: '微调模式',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        }, {
          name: 'preview',
          label: '只读模式',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'run',
          label: '运行模式',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },
    /*{
      name: 'preview',
      label: 'preview',
      lang: 'L10024',
      type: 'dropdown-list',
      icon: 'preview',
      enable: true,
      enableMode: ['edit', 'preview'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      },
      // 默认选中项index
      selected: 0,
      lockLabel: true,
      // 子节点
      children: [
        {
          name: 'image',
          label: 'Image',
          lang: '',
          type: 'normal',
          icon: 'image',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'json',
          label: 'Json',
          lang: '',
          type: 'normal',
          icon: 'json',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },*/
    {
      name: 'upload',
      label: 'upload',
      lang: 'L10033',
      type: 'normal',
      icon: 'upload',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    {
      name: 'download',
      label: 'download',
      lang: 'L10030',
      type: 'dropdown-list',
      icon: 'download',
      enable: true,
      enableMode: ['edit', 'preview'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: true
      },
      // 默认选中项index
      selected: 0,
      lockLabel: true,
      // 子节点
      children: [
        {
          name: 'image',
          label: 'Image',
          lang: '',
          type: 'normal',
          icon: 'image',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'json',
          label: 'Json',
          lang: '',
          type: 'normal',
          icon: 'json',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'excel',
          label: 'Excel',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },
    /*{
      name: 'canvasBackground',
      label: 'Canvas background',
      lang: 'L10034',
      type: 'dropdown-list',
      icon: 'canvas-background',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
      },
      // 默认选中项index
      selected: 0,
      lockLabel: true,
      // 子节点
      children: [
        {
          name: 'default',
          label: 'Default',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'image',
          label: 'Image',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
      ]
    },*/
    {
      name: 'canvasBackgroundColor',
      label: '画布背景颜色',
      lang: '',
      type: 'dropdown-color-picker',
      icon: 'canvas-background',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: true
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: true
      },
      // 默认选中项index
      selected: 0,
      lockLabel: true,
    },
    {
      name: 'fullscreen',
      label: 'fullscreen',
      lang: 'L10025',
      type: 'normal',
      icon: 'full-screen',
      enable: true,
      enableMode: ['edit', 'preview'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    /*{
      name: 'language',
      label: 'language',
      lang: 'L10026',
      type: 'dropdown-list',
      icon: 'language',
      enable: true,
      enableMode: ['edit', 'preview'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'center',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      },
      // 默认选中项index
      selected: 0,
      lockLabel: true,
      // 子节点
      children: [
        {
          name: 'zh-CN',
          label: '简体中文',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        },
        {
          name: 'en-US',
          label: 'English',
          lang: '',
          type: 'normal',
          icon: '',
          style: {},
          data: false,
          enable: true,
          disabled: false,
          divider: false
        }
      ]
    },*/
    /*{
      name: 'github',
      label: 'github',
      lang: 'L10027',
      type: 'link',
      icon: 'github',
      link: config.system.github,
      enable: true,
      enableMode: ['edit', 'preview'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'right',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },
    {
      name: 'feedback',
      label: 'feedback',
      lang: 'L10028',
      type: 'link',
      icon: 'feedback',
      link: config.system.feedback,
      enable: true,
      enableMode: ['edit', 'preview'],
      disabled: false,
      disabledMode: ['edit', 'preview'],
      shortcuts: '',
      toolbar: {
        enable: true,
        position: 'right',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: true,
        target: ['canvas'],
        style: {},
        divider: false
      }
    },*/
    // FIXME 纯快捷键
    {
      name: 'up',
      label: 'Up',
      lang: '',
      type: 'normal',
      icon: '',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'up',
      toolbar: {
        enable: false,
        position: '',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: false,
        target: [],
        style: {},
        divider: false
      }
    },
    {
      name: 'down',
      label: 'Down',
      lang: '',
      type: 'normal',
      icon: '',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'down',
      toolbar: {
        enable: false,
        position: '',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: false,
        target: [],
        style: {},
        divider: false
      }
    },
    {
      name: 'left',
      label: 'Left',
      lang: '',
      type: 'normal',
      icon: '',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'left',
      toolbar: {
        enable: false,
        position: '',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: false,
        target: [],
        style: {},
        divider: false
      }
    },
    {
      name: 'right',
      label: 'Right',
      lang: '',
      type: 'normal',
      icon: '',
      enable: true,
      enableMode: ['edit'],
      disabled: false,
      disabledMode: ['edit'],
      shortcuts: 'right',
      toolbar: {
        enable: false,
        position: '',
        style: {},
        divider: false
      },
      contextmenu: {
        enable: false,
        target: [],
        style: {},
        divider: false
      }
    }
  ]
}
