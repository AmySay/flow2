import request from '../global/utils/request'

export function getDevice () {
  return request({
    url: 'device',
    method: 'get',
    params: ''
  })
}

export function getSvgById (id) {
  return request({
    url: 'model',
    method: 'get',
    params: { id }
  })
}
