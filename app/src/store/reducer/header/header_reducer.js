const defaultState = {
    list:[]
}
export default (state = defaultState,action)=>{
<<<<<<< HEAD
=======
     
>>>>>>> zzz
    switch(action.type){
      
        case "HEAD_LIST_FULFILLED":
            let headlist = JSON.parse(JSON.stringify(state));
<<<<<<< HEAD
=======
            
>>>>>>> zzz
            headlist.list = action.payload;
           
            return headlist;
    }
    return state;
}