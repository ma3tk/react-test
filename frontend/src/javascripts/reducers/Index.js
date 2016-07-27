import {combineReducers} from "redux"
import { routerReducer } from 'react-router-redux'
import article from "./Article"

const reducer = combineReducers({
    article,
    routing: routerReducer
});

export default reducer;