const defaultState = {
    //navlist : {list:[]},
    list : [],
    page:1
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case "LONG_NAV_LIST_FULFILLED":
            let longlist = JSON.parse(JSON.stringify(state));
            longlist.list =[...longlist.list,...action.payload.list]
            longlist.page ++;
            return longlist;
    }
    return state
}