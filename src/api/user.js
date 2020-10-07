import request from '../utils/request'

export function reg(data) {
    return request({
        url: 'user/reg',
        method: 'post',
        data,
    })
}
export function getUserInfo(data) {
    return request({
        url: 'user/getUserInfo',
        method: 'post',
        data,
    })
}
