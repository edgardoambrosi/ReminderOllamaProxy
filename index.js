const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 300 
  }
app.use(cors(corsOptions));

// Middleware per aggiungere l'header a tutte le risposte
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // o puoi mettere un dominio specifico
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/', createProxyMiddleware({
    target: 'https://nupsi.alia-space.com:11435',
    changeOrigin: true,
    secure: false
})
);

app.listen(11433, '0.0.0.0', () => console.log('Proxy attivo su http://0.0.0.0:11433'));