

const defaultState={
    list : [
        {name : "七步买车"},
        {name : "原创"},
        {name : "新能源"},
        {name : "车家号"},
        {name : "行业"},
        {name : "视频"},
        {name : "小视频"},
        {name : "直播"},
        {name : "小游戏"}
    ],
    contentlist : [],
    navlist:["//m1.autoimg.cn/newsdfs/g28/M01/D7/BA/1280x640_0_q40_autohomecar__ChsEfVwYqOmAZlR1AAIlEFWU4_0115.jpg",
            "//m1.autoimg.cn/newsdfs/g30/M09/D7/2B/1280x640_0_q40_autohomecar__ChcCSVwY51iAfFzIAAhjoYGWdlE075.jpg",
            "//m1.autoimg.cn/newsdfs/g27/M07/CE/8C/1280x640_0_q40_autohomecar__ChcCQFwXTTSAbdlUAAOvcn6ygDU785.jpg",
            "//m1.autoimg.cn/newsdfs/g2/M04/D4/E2/1280x640_0_q40_autohomecar__ChsEkFwXUJiADfWtAAN1nTaBD58915.jpg",
            "//m1.autoimg.cn/newsdfs/g27/M07/CE/8C/1280x640_0_q40_autohomecar__ChcCQFwXTTSAbdlUAAOvcn6ygDU785.jpg"
            ]
    
}

export default (state=defaultState,action)=>{
    console.log(action.type)
    switch (action.type){
        case "GET_CONTENT_FULFILLED" : 
            let getcontentlist=JSON.parse(JSON.stringify(state));
            getcontentlist.contentlist=action.payload
            return getcontentlist
        
 
        
    }

    return state
}