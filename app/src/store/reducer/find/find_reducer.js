const defaultState = {
    carlist : [],
    quickcar : [],
    alllist : []
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case "FINDCAR_LIST_FULFILLED":
            let getCarList = JSON.parse(JSON.stringify(state));
            getCarList.carlist = action.payload;
            return getCarList;
            break;
        case "QUICK_CAR_ACTION_FULFILLED":
            let quickCar = JSON.parse(JSON.stringify(state));
            quickCar.quickcar = action.payload;
            return quickCar;
            break;
       
    }
    return state;
}