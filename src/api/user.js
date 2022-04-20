import request from '../utils/request'

export function reg(data) {
    return request({
        url: 'user/create',
        method: 'post',
        data,
    })
}
export function getUserInfo(data) {
    return request({
        url: 'user/get',
        method: 'post',
        data,
    })
}
