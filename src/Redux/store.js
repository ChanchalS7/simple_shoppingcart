import ProductReducer from "./Products/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ecommerceData:ProductReducer})

export const store =
   createStore( rootReducer,applyMiddleware(thunk))
