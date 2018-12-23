const defaultState = {
    list:[],
    userlist:[]
}
export default (state = defaultState,action)=>{

    switch(action.type){
      
        case "HEAD_LIST_FULFILLED":
            let headlist = JSON.parse(JSON.stringify(state));

            headlist.list = action.payload;
           
            return headlist;
        case "LOGIN_ACTION_FULFILLED":
            let getuserlist = JSON.parse(JSON.stringify(state));
            getuserlist.userlist = action.payload;
           console.log( getuserlist.userlist)
            return getuserlist;    
         case "REGISTER_ACTION_FULFILLED":
            let addserlist = JSON.parse(JSON.stringify(state));
            console.log(action)
            addserlist.userlist.push(action.payload)
             console.log( addserlist.userlist)
            return addserlist;    
    }
    return state;
}
