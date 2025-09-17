const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors()); // permette tutte le origini
app.use('/', createProxyMiddleware({
  target: 'https://nupsi.alia-space.com:11435',
  changeOrigin: true,
  secure: false
}));

app.listen(11433, () => console.log('Proxy attivo su http://localhost:11433'));