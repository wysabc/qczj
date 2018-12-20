const defaultState = {
    list:[]
}
export default (state = defaultState,action)=>{
     
    switch(action.type){
      
        case "HEAD_LIST":
            let headlist = JSON.parse(JSON.stringify(state));
            
            headlist.list = action.payload;
           
            return headlist;
    }
    return state;
}