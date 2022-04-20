import request from '../utils/request'

const getUrl = (str, prefix = '') => `${prefix}/${str}`

export function getCaptcha(params) {
    return request({
        url: getUrl('captcha/getImgCaptcha'),
        method: 'get',
        params,
    })
}
export function getCaptchaByEmail(data) {
    return request({
        url: getUrl('email/captcha'),
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
