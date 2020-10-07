import request from '../utils/request'

export function getCaptcha(data) {
    return request({
        url: 'common/getCaptcha',
        method: 'get',
        data,
    })
}
export function sendEmail(data) {
    return request({
        url: 'common/sendEmail',
        method: 'get',
        data,
    })
}
