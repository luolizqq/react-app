import { createStore, applyMiddleware,combineReducers } from 'redux'; 
import thunk from "redux-thunk";
import {formData} from "./home/reducer"
import {productData} from "./production/reducer"
const store = createStore(combineReducers({formData,productData}),applyMiddleware(thunk));
export default  store;