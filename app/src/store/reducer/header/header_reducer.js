const defaultState = {
    list:[]
}
export default (state = defaultState,action)=>{
     console.log(action.type)
    switch(action.type){
      
        case "HEAD_LIST":
            let headlist = JSON.parse(JSON.stringify(state));
            console.log(action.payload)
            headlist.list = action.payload;
           
            return headlist;
    }
    return state;
}