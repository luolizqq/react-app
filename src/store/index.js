import { createStore, applyMiddleware,combineReducers } from 'redux'; 
import thunk from "redux-thunk";
import home from "./home/reducer"
import production from "./production/reducer"
const store = createStore(combineReducers({production,home}),applyMiddleware(thunk));
export default  store;