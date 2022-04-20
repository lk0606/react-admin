const { createProxyMiddleware } = require('http-proxy-middleware')
const baseURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:7001'
        : 'http://wont-org.cn:7001'
module.exports = function (app) {
    // ...
    app.use(
        createProxyMiddleware('/api', {
            target: baseURL,
            changeOrigin: true,
        })
    )
}
