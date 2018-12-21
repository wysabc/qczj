
import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import find_reducer from "./reducer/find/find_reducer";
import header_reducer from "./reducer/header/header_reducer";
import home from "./reducer/home/home";
import creact from "./reducer/home/second/creact"
import  Findcar from "./reducer/find/find_reducer"
import Quickcar from "./reducer/find/find_reducer"
import AllList from "./reducer/find/find_reducer"


const reducers = combineReducers({
    find_reducer,
    home,
    header_reducer,
    Findcar,
    Quickcar,
    AllList,
    creact
})
const store=createStore(reducers,applyMiddleware(reduxPromiseMiddleware()))
export default store;
