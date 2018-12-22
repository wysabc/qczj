const defaultState = {
    //navlist : {list:[]},
    navlist : [],
    page:1
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case "LONG_NAV_LIST_FULFILLED":
            let longlist = JSON.parse(JSON.stringify(state));
            console.log(action.payload)
            longlist.navlist =[...longlist.navlist,...action.payload.list]
            longlist.page ++;
            return longlist;
    }
    return state
}