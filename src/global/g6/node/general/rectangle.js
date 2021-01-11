/**
 * Created by OXOYO on 2019/7/8.
 *
 * 矩形
 */

import Global from '@antv/g6/src/global'
import Util from '@antv/g6/src/util'
import base from '../base'

export default {
  name: 'rectangleTest',
  extendName: 'base-node',
  options: {
    ...base,
    shapeType: 'image',
    labelPosition: 'bottom',
    getShapeStyle (cfg) {
      const size = this.getSize(cfg)
      const width = size[0]
      const height = size[1]
      const x = 0 - width / 2
      const y = 0 - height / 2
      const path = [
        // 左顶点
        [ 'M', -width / 2, 0 ],
        // 左上顶点
        [ 'L', -width / 2, -height / 2 ],
        // 右上顶点
        [ 'L', width / 2, -height / 2 ],
        // 右下顶点
        [ 'L', width / 2, height / 2 ],
        // 左下顶点
        [ 'L', -width / 2, height / 2 ],
        [ 'Z' ]
      ]
      const color = cfg.color || Global.defaultNode.color
      const style = Util.mix({}, Global.defaultNode.style, {
        // 节点的位置在上层确定，所以这里仅使用相对位置即可
        x,
        y,
        width,
        height,
        path,
        stroke: color
      }, cfg.style)
      return style
    },
    options: Util.mix({}, {
      icon: null,
      iconStyle: {
        width: 14,
        height: 14,
        left: 0,
        top: 0
      },
      style: {
        fill: '#f9f9f9',
        stroke: '#bbb',
        cursor: 'default'
      },
      stateStyles: {
        selected: {
          fill: '#eee'
        }
      }
    }, {
      icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI5M3B4IiBoZWlnaHQ9Ijc5cHgiIHZpZXdCb3g9IjAgMCA5MyA3OSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOTMgNzkiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI5MyIgaGVpZ2h0PSI3OSIgeD0iMCIgeT0iMCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGMEFBQUJQQ0FRQUFBQWpaZ0hZQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpMOEFBQUFKY0VoWgpjd0FBRHNRQUFBN0VBWlVyRGhzQUFBQUhkRWxOUlFmbEFRVVdKU3ZjQnc5MkFBQUQyRWxFUVZSbzN1MmFMWERiU0JTQXYrMTBiZ1ROCmFtaG9WcGNaR3FZc3h3Sno2QUxMbXFLR0dXYUtBZ016UmNraEg5T3hGTnlNUFZNUU03c29McEpKeDVtU1YyQmxwY2o2VzNsbFo2ZGEKRWVsNTkvbmI5ZFBiOTk1YUNhNjJGL3NHK0MzUlgrN3FpMVFmajRWTUxhcVVIVnljc2dwdjd6bXdwblVINEZjSndZa2o2Qnh0aUZaMApiR2l1L3pWOXZ5SHgrTnVHNHByUmxVYzNSZHh6QUIwUEwwWGFkZ0JkbHFTNXd5OE9vQU0zS2JKL3JHaXUzY040M0NWRWw0NDRSNEUyCm85ampFTThaZEVGZ1FJRHdQMTE3T25jVWZzbC9MSUd2Tm1NWWh5UEhCcjFCLzEzUWE4K1NWSWREV3F6amxyNDZBK2I4S3dzTHFtdjAKNVYxT0dXZDg2SE5DKzFsdVNYUVN1ZEVNSHgrZklDWmJjVTdyV2FIVDRsem5vajd2a2prUlhjNTBYQk53VmpVd3FHTzlINDNrTXM4awo2T25JeHErMjlyYkJlOXdqQ05mMFN2UWU0Q01JZDFXeVZidmdnOUJRM2htTU9XZHRPTWFCbVUzd0xnRkNZRnBwNFpnVndzelU0OWdECmJ6RkRXREdvTUhaZDhMZzFlMkh0b2Q4aVZDNFBNVVF3eko5c2dSOGlDT2RiYUZqN205N3UwY2NJOThrZm5BSDkwaG82ckJDdWQ0d2UKcnJrMkZycGNNZE1mKytWZTNORFhsRjUzTytnK3dqaTg5eGpxdlRTNkxvdTNIZHFzTUxCM0crQnRCT0UwQkI5bmRMc3Y5dHhjSUFSYgpveU5aSFRkNkhpUEllai9jS0VqSHIzR1I4Mk9BSUdYZGE0NDRmU0lwNkNPRU8wR2cvK1NEZGJRWWx3d0xZRHdDaElzdDBmTnhuL1NkClBYNWRERFRnVUp0VHZJQlVZRFNNRVB4eTZEWVN2RGJ3SFpSSFg4ditrcHN3bFZud0p4TXRQeXpRdGFCMEhUZzF3Vk1pcWl5M2F1RUIKYzZDbkM5S1RSM0FBZVZBZkdJVVByemZHZHpYcVJKWjgyeExkcUxVQVdBSWRMVXNXb2FQblRheWgvaVhlTUdHcE5SYTJISU1ScGN5TwpzaU9zYndsTlM1YmhiVzlqVkRSaHc2SmV4cW9iUUM4MDlvMjI2V2xLcnhZQUxkV1JlZXg3ZW5veVUza0FYbW1OVmRBalN5OHpBWGxRCkQzaTBRZWJNTTd0OTBXZEtGN3lOeVQvcXU2bGVnbVU1OUpJZUpwcEV5blFXNFdybHRlZ2M0MENOVkdoYTZpTG1jVDVwOUxJMW1yeDkKTk5xWXltMUp1Ujc3NlQ0N1RteFcxN0V0cVdUb25DSEl1ay9ibk1KQW9HaXphWWNKZDlxMVdpZDNIQ0JzR3dpWVhQSHdLN2Zmd1pNQwpVblFGSElVOTdJUmZSdkMzNktDM1lKS2pEZUg0OGZmYVE5QXJjSUpRTWkvbEtHYmxkNXhHMGVSZVVvMnNCQytuZnllSnVLY0V6K20wCjJ1RmlodE1sSkljTGQ0TEQ1VkxCNFNLMTRQRFJnT0R3Z1l4ZWV4ZVB3V0tyVyt2aG8ySDZhZDcwa2U5N1BLWjg1cGtlK1I1TDFmWlQKakoyajNmOElkQ3FQL0dIK0IwS0gvOTdRb0Rmb0RmcXpidzE2Zzc1SDlFbmxrWC9rVklreld1M2hWMzJ0TVpnRzNhajlBc0Z6Y29GZwpDK0xtQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ESXhMVEF4TFRBMVZERTBPak0zT2pRekt6QTRPakF3NEpHVmJBQUFBQ1YwClJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeU1TMHdNUzB3TlZReE5Eb3pOem8wTXlzd09Eb3dNSkhNTGRBQUFBQWdkRVZZZEhOdlpuUjMKWVhKbEFHaDBkSEJ6T2k4dmFXMWhaMlZ0WVdkcFkyc3ViM0pudk04ZG5RQUFBQmgwUlZoMFZHaDFiV0k2T2tSdlkzVnRaVzUwT2pwUQpZV2RsY3dBeHAvKzdMd0FBQUJkMFJWaDBWR2gxYldJNk9rbHRZV2RsT2pwSVpXbG5hSFFBTnpuYlN1UjRBQUFBRm5SRldIUlVhSFZ0CllqbzZTVzFoWjJVNk9sZHBaSFJvQURrelhiUGdaUUFBQUJsMFJWaDBWR2gxYldJNk9rMXBiV1YwZVhCbEFHbHRZV2RsTDNCdVp6K3kKVms0QUFBQVhkRVZZZEZSb2RXMWlPanBOVkdsdFpRQXhOakE1T0RJNE5qWXpEMjVKM0FBQUFCTjBSVmgwVkdoMWJXSTZPbE5wZW1VQQpNamsyTURoQ1FvS3RpNllBQUFCR2RFVllkRlJvZFcxaU9qcFZVa2tBWm1sc1pUb3ZMeTloY0hBdmRHMXdMMmx0WVdkbGJHTXZhVzFuCmRtbGxkekpmT1Y4eE5qQTROakl4TnpNME5EazBNak01Tmw4Mk0xOWJNRjFEb3NlRkFBQUFBRWxGVGtTdVFtQ0MiID48L2ltYWdlPgo8L3N2Zz4K'
    }) }
}
