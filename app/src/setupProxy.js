
const proxy = require("http-proxy-middleware");

module.exports  = (app)=>{
    app.use("/webapi",proxy({
        target:"https://sou.api.autohome.com.cn",
        changeOrigin:true
    }))
    app.use("/hotcarlevel",proxy({
        target:"https://car.m.autohome.com.cn",
        changeOrigin:true
    }))
    app.use("/hotcar",proxy({
        target:"https://car.m.autohome.com.cn",
        changeOrigin:true
    }))
    
}
//https://car.m.autohome.com.cn/hotcarlevel/getrankseries?cityId=210300&level=0
