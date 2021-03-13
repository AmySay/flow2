import request from '../global/utils/request'

/**
 * @author songfangyuan
 * @date 2021/3/13
 * @Description: The respectability of youth lies in their courage and great expectation.
 * #设置参数
 * curl -X POST --data '{"file":"filename","lineNo":111,"ratio":0.6,"faultTime":0.2}' "http://testflight.jokco.com/pyapi/settingparameters"
 * {"data": {"faultTime": 0.2, "ratio": 0.6, "lineNo": 111, "file": "filename"}, "ret": 0}
*/
export function settingparameters (params) {
  return request({
    url: 'settingparameters',
    method: 'POST',
    params
  })
}

/**
 * @author songfangyuan
 * @date 2021/3/13
 * @Description: The respectability of youth lies in their courage and great expectation.
 * #运行
 * curl -X POST "http://testflight.jokco.com/pyapi/startrunning"
 * {"runargv": {"faultTime": 0.2, "ratio": 0.6, "lineNo": 111, "file": "filename"}, "ret": 0}
 */
export function startrunning (params) {
  return request({
    url: 'startrunning',
    method: 'POST',
    params
  })
}


/**
 * @author songfangyuan
 * @date 2021/3/13
 * @Description: The respectability of youth lies in their courage and great expectation.
 * #获取开关编号
 * curl -X POST "http://testflight.jokco.com/pyapi/regtogglers"
 * {"reg_togglers": [2766, 9222, 6461, 9954, 4907, 4201, 1462, 2541, 9752, 4994, 3768, 5785, 1036, 4326, 3127, 5103, 6052, 3078, 5270, 3089, 9458, 3290, 9341, 3133, 2896, 6299, 7381, 2059, 3703, 1407, 5736, 3602, 4578, 1622, 3315, 2590, 3615, 3759, 5839, 9382, 3031, 5263, 7743, 3685, 5625, 1426, 5582, 2505, 1517, 6696, 6783, 3413, 6106, 9354, 8619, 6676, 9906, 8145, 3961, 4739, 3386, 3452, 2641, 8726, 3339, 2708, 9731, 4496, 2439, 4667, 7913, 7216, 8597, 1307, 5515, 7302, 3619, 9594, 8563, 8625, 3776, 5250, 5336, 2667, 2320, 8445, 4570, 6432, 7951, 3568, 5219, 6384, 6702, 2667, 4707, 8220, 2265, 9750, 9732, 6598], "ret": 0}
 */
export function regtogglers (params) {
  return request({
    url: 'regtogglers',
    method: 'POST',
    params
  })
}


/**
 * @author songfangyuan
 * @date 2021/3/13
 * @Description: The respectability of youth lies in their courage and great expectation.
 * #获取开关编号
 * curl -X POST --data '{"togglerNo":123}' "http://testflight.jokco.com/pyapi/settoggleraction"
 * {"ret": 0}
 */
export function settoggleraction (params) {
  return request({
    url: 'settoggleraction',
    method: 'POST',
    params
  })
}


/**
 * @author songfangyuan
 * @date 2021/3/13
 * @Description: The respectability of youth lies in their courage and great expectation.
 * #获取开关编号
 * curl -X POST --data '{"eleNo":123}' "http://testflight.jokco.com/pyapi/getelementparas"
 * {"element_paras": {"qSlack": 777, "aBus": 444, "pSlack": 666, "time": 15129, "deltaGENROU": 30, "vBou": 555, "omegaGENROU": 45, "iLine": 5}, "ret": 0}
 */
export function getelementparas (params) {
  return request({
    url: 'getelementparas',
    method: 'POST',
    params
  })
}








