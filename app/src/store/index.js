import {createStore,combineReducers,applyMiddleware} from "redux"
import home from "./reducer/home/home"

import  reduxPromiseMiddleware from "redux-promise-middleware"
const redecers=combineReducers({
    home
})
const store=createStore(redecers,applyMiddleware(reduxPromiseMiddleware()))
export default store