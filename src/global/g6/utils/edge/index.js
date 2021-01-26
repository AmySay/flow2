/**
 * Created by OXOYO on 2019/9/2.
 *
 * 边
 */

import drawAnimate from './drawAnimate'
import destroyAnimate from './destroyAnimate'
import setState from './setState'
import update from './update'

export default {
  drawAnimate,
  destroyAnimate,
  setState,
  update,
  ShowObjProperty1(Obj, key) {
    var attributes = '';
    var methods = '';
    for (const attr in Obj) {
      if (Obj.attr != null)
        attributes = attributes + attr + ' 属性： ' + Obj.i + '\r\n';
      else
        methods = methods + '方法: ' + attr + '\r\n';
    }
    console.log(attributes, methods, key)
  },
}
