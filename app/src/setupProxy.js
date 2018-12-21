
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
//https://m.autohome.com.cn/GetMoreUsingCarList?take=20&hashcode=m_cms_index_tab_usecar_2017_6_22-1544138794&pageindex=1