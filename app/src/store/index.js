
import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import find_reducer from "./reducer/find/find_reducer";
import header_reducer from "./reducer/header/header_reducer";
import home from "./reducer/home/home";
import  Findcar from "./reducer/find/find_reducer"
import Quickcar from "./reducer/find/find_reducer"
import AllList from "./reducer/find/find_reducer"
import Longnav from "./reducer/forum/forum_reducer"


const reducers = combineReducers({
    find_reducer,
    home,
    header_reducer,
    Findcar,
    Quickcar,
    AllList,
    Longnav
})
const store=createStore(reducers,applyMiddleware(reduxPromiseMiddleware()))
export default store;
