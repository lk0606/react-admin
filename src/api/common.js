import request from '../utils/request'

const getUrl = (str, prefix = 'common') => `${prefix}/${str}`

export function getCaptcha(params) {
    return request({
        url: getUrl('getCaptcha'),
        method: 'get',
        params,
    })
}
export function getCaptchaByEmail(data) {
    return request({
        url: getUrl('getCaptchaByEmail'),
        method: 'post',
        data,
    })
}

export function sendEmail(data) {
    return request({
        url: getUrl('sendEmail'),
        method: 'get',
        data,
    })
}
