const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://apiko-marketplace-api-2019.herokuapp.com',
    pathRewrite: {
      '^/api': '',
    },
    changeOrigin: true,
  })
);

app.listen(port, () => console.log(`App is live on port ${port}!`));
