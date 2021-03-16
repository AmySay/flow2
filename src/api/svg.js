import {get} from '../global/utils/request'


export function getDevice () {
  return get({
    url: 'photinia-api/svg/device',
    params: ''
  })
}

export function getSvgById (id) {
  return get({
    url: 'photinia-api/svg/model',
    params: { id }
  })
}
