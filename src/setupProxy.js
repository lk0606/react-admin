const { createProxyMiddleware } = require('http-proxy-middleware')
const baseURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:13000'
        : 'http://wont-org.cn:13000'
module.exports = function (app) {
    // ...
    app.use(
        createProxyMiddleware('/api', {
            target: baseURL,
            changeOrigin: true,
        })
    )
}
