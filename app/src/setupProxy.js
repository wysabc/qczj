
const proxy = require("http-proxy-middleware");

module.exports  = (app)=>{
    app.use("/webapi",proxy({
        target:"https://sou.api.autohome.com.cn",
        changeOrigin:true
    }))
    //https://m.autohome.com.cn/getbrandhot?v=1&cityId=110100&callback=jsonp3
   
}