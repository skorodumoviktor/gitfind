const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'https://api.github.com',
      changeOrigin: true,
    })
  )
}
