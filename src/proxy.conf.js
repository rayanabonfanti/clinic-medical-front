const PROXY_CONFIG = [
    {
        context: ['/clinicamedica'],
        target: 'http://localhost:8080/',
        secure: false,
        logLevel: 'debug',
        pathRewrite: {'^/clinicamedica': ''},
        changeOrigin: true
    }
];

module.exports = PROXY_CONFIG;
