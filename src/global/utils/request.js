import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: 'http://testflight.jokco.com/', // url = base url + request url
  timeout: 5000, // request timeout
})


// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (!(res.ret === 'SUCCESS' || res.ret === 0)) {
      Message({
        message: res.message || '请求接口失败！',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export  default  service
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get({url, params}) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post({url, params}) {
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}

