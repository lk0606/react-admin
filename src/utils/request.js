import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'
import Cookies from 'js-cookie'
import { get } from '@wont/utils'

const timeout =
    process.env.NODE_ENV === 'development' ? 1000 * 60 * 30 : 10 * 1000
const baseURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:13000'
        : 'http://wont-org.cn:13000'

// create an axios instance
const service = axios.create({
    baseURL, // api的base_url
    timeout, // request timeout/
    withCredentials: true,
    // headers: {
    // Authorization: `Bearer ${Cookies.get('token')}`, // 写到具体需要接口上
    //   'Content-Type': 'application/json'
    // },
})
const token = Cookies.get('token')
if (token) {
    service.defaults.headers.Authorization = `Bearer ${token}`
}
// 发送请求前对请求数据进行处理
service.defaults.transformRequest = [
    function (data) {
        /**
         *axios 默认请求 context-type application/json
         * 后台需要 @request body 进行处理
         * 这里统一使用 qs  格式化数据
         */
        return qs.stringify(data)
        // return data
    },
]

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // config.withCredentials = true
        // config.headers['Authorization'] = 'Admin-Token'
        // do something before request is sent
        return config
    },
    (error) => {
        // do something with request error
        return Promise.reject(error)
    }
)
// 响应拦截器
service.interceptors.response.use(
    (res) => {
        if (res.config.url.indexOf('user/getUserInfo') > -1) {
            // window.location.reload()
        }
        // console.log(res, 'res')
        if (res.headers['content-type'] === 'video/mp4') {
            // debugger
            return res
        }
        if (!res.data.success) {
            const { message: errMsg = '数据异常' } = res.data
            message.error(errMsg)
            return Promise.reject(res.data)
        }
        return Promise.resolve(res.data)
        // return res
    },
    (err) => {
        const { message: errMsg = '服务器异常' } = err || {}
        const { status } = get(err, 'response', {})
        if (status === 401) {
        }
        message.error(errMsg)
        return Promise.reject(err)
    }
)
export default service
