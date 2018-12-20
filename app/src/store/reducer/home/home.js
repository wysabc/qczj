

const defaultState={
    list : [
        {name : "七步买车",hrefs: "/"},
        {name : "原创",hrefs:"/creact"},
        {name : "新能源",hrefs: "/"},
        {name : "车家号",hrefs: "/"},
        {name : "行业",hrefs: "/"},
        {name : "视频",hrefs: "/"},
        {name : "小视频",hrefs: "/"},
        {name : "直播",hrefs: "/"},
        {name : "小游戏",hrefs: "/"}
    ],
    contentlist : [],
    navlist:["//m1.autoimg.cn/newsdfs/g28/M01/D7/BA/1280x640_0_q40_autohomecar__ChsEfVwYqOmAZlR1AAIlEFWU4_0115.jpg",
            "//m1.autoimg.cn/newsdfs/g30/M09/D7/2B/1280x640_0_q40_autohomecar__ChcCSVwY51iAfFzIAAhjoYGWdlE075.jpg",
            "//m1.autoimg.cn/newsdfs/g27/M07/CE/8C/1280x640_0_q40_autohomecar__ChcCQFwXTTSAbdlUAAOvcn6ygDU785.jpg",
            "//m1.autoimg.cn/newsdfs/g2/M04/D4/E2/1280x640_0_q40_autohomecar__ChsEkFwXUJiADfWtAAN1nTaBD58915.jpg",
            "//m1.autoimg.cn/newsdfs/g27/M07/CE/8C/1280x640_0_q40_autohomecar__ChcCQFwXTTSAbdlUAAOvcn6ygDU785.jpg"
            ],
    carlist:[
        {href:"https://m.mall.autohome.com.cn/#pvareaid=2028551" ,src:"//x.autoimg.cn/m/news/images/commerce01.png",name:"新车特卖"},
        {href:"https://mj.autohome.com.cn/jxd?pvareaid=3266405",src:"//www3.autoimg.cn/newsdfs/g25/M07/B1/5A/autohomecar__wKgHIlr5TE6AcQ9_AAAPnM1M98I150.png",name : "现金借款"},
        {href:"https://openapi.autohome.com.cn/autohome/uc-news-quickappservice/msapi/buycar/buycarstep#pvareaid=3290653" ,src:"//www3.autoimg.cn/newsdfs/g27/M07/4E/6E/autohomecar__ChsEfFuq-F-AZDqKAAAGtQHZbRU667.png",name:"七步买车"},

        {href:"https://m.che168.com",src:"//x.autoimg.cn/m/news/images/commerce03.png",name:"二手车"},
        {href:"https://tuan.m.autohome.com.cn/?enfrom=1nmm10000262#pvareaid=2011604",src:"//x.autoimg.cn/m/news/images/commerce05.png",name:"团购活动"},
        {href:"https://m.autohome.com.cn/activity/special/autohome28.html",src:"//www2.autoimg.cn/newsdfs/g25/M02/BF/A1/autohomecar__ChcCr1r6PIeADvAUAAAZlN2_pDY432.png",name:"领福利"},
        {href:"https://dealercloud.m.autohome.com.cn/vrExhibition/dealerm/index?pvareaid=2594190",src:"//www3.autoimg.cn/newsdfs/g24/M09/DC/7E/autohomecar__wKgHIVrEko2ANiPCAAANHurU1WE578.png",name:"逛店看车"},
        {href:"https://j.autohome.com.cn/platform/recommend/index?pvareaid=2028553",src:"//www3.autoimg.cn/newsdfs/g25/M09/B1/A3/autohomecar__ChcCr1r5KSKAQxp1AAAGMNFGETk997.png",name:"贷款购车"},
        {href :"https://j.autohome.com.cn/platform/orderAutoMortgage/index#pvareaid=3266404",src:"//www3.autoimg.cn/newsdfs/g25/M09/B1/A3/autohomecar__ChcCr1r5KSKAQxp1AAAGMNFGETk997.png",name:"车抵货"},
        {href :"https://m.autohome.com.cn/activity/special/winter.html#pvareaid=6825987",src:"//www2.autoimg.cn/newsdfs/g30/M02/A5/91/autohomecar__ChcCSVt2i8CAejDgAAADDHlSy2Q059.png",name:"PK领奖"}

    ],
    getailistings :[]
    
}

export default (state=defaultState,action)=>{
<<<<<<< HEAD
    
=======

>>>>>>> zzz
    switch (action.type){
        case "GET_CONTENT_FULFILLED" : 
            let getcontentlist=JSON.parse(JSON.stringify(state));
            getcontentlist.contentlist=action.payload
            return getcontentlist
        case "GET_AILISTING_FULFILLED":
            let getailisting=JSON.parse(JSON.stringify(state))
            getailisting.getailistings=action.payload
            return getailisting
        
    }

    return state
}