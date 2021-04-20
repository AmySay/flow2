import {
  get,
  post
} from '../global/utils/request'

export function addLineEvent (params) {
  return post({
    url: 'save/trouble',
    params
  })
}

export function getSwitchList (id) {
  return get({
    url: 'get/switchList',
    params: { id }
  })
}

export function toggleSwitch (params) {
  return post({
    url: 'editSwitch',
    params
  })
}









