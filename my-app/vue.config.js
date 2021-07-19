module.exports = {
    devServer: {
        open: true,
        port: 8080,
        proxy: {
            "/api": {
                target: "https://wx.maoyan.com/",
                changOrigin: true,
                pathRewrite: {
                    "/api": ''
                }

            }
        }
    }
}