const proxy = require("http-proxy-middleware");

module.exports  = (app)=>{
    app.use("/webapi",proxy({
        target:"https://sou.api.autohome.com.cn",
        changeOrigin:true
    }))
}