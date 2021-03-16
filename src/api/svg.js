import {get} from '../global/utils/request'


export function getDevice () {
  return get({
    url: 'svg/device',
    params: ''
  })
}

export function getSvgById (id) {
  return get({
    url: 'svg/model',
    params: { id }
  })
}
