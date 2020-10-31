module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://47.101.206.36:9000',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}