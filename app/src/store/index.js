<<<<<<< HEAD
import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import find_reducer from "./reducer/find/find_reducer";
import header_reducer from "./reducer/header/header_reducer"
const reducers = combineReducers({
    find_reducer,
    header_reducer
})
const store = createStore(reducers,applyMiddleware())
export default store;
=======
import {createStore,combineReducers,applyMiddleware} from "redux"
import home from "./reducer/home/home"

import  reduxPromiseMiddleware from "redux-promise-middleware"
const redecers=combineReducers({
    home
})
const store=createStore(redecers,applyMiddleware(reduxPromiseMiddleware()))
export default store
>>>>>>> zzz
