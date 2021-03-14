import {get} from '../global/utils/request'


export function getDevice () {
  return get({
    url: 'device',
    params: ''
  })
}

export function getSvgById (id) {
  return get({
    url: 'model',
    params: { id }
  })
}
