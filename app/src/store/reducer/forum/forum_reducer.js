const defaultState = {
    //navlist : {list:[]},
    navlist : [],
    page:1
}
export default (state = defaultState,action)=>{
    console.log(action.type)
    switch(action.type){
     
        case "LONG_NAV_LIST_FULFILLED":
        console.log(action.payload.list)
            let longlist = JSON.parse(JSON.stringify(state));
            longlist.navlist =[...longlist.navlist,...action.payload.list]
           longlist.page ++;
          
            return longlist;
    }
    return state
}