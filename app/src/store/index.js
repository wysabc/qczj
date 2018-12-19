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