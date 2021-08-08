const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api', 
    createProxyMiddleware({
      target: 'https://apiko-marketplace-api-2019.herokuapp.com',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true,
    }
  ));
  app.use(
    '/sockjs-node',
    createProxyMiddleware({
      target: 'https://apiko-marketplace-api-2019.herokuapp.com',
      ws: true,
    })
  );

  app.use(
    '/socket.io', 
    createProxyMiddleware({
      target: 'https://apiko-marketplace-api-2019.herokuapp.com',
      ws: true,
    }
  ));
}