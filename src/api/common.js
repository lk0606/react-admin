import request from '../utils/request'

export function getCaptcha(params) {
    return request({
        url: 'common/getCaptcha',
        method: 'get',
        params,
    })
}
export function sendEmail(data) {
    return request({
        url: 'common/sendEmail',
        method: 'get',
        data,
    })
}
