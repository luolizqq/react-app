import * as types from "./action-type";
const defaultState={
  productList:[]
}
export const productData = (state=defaultState,action={})=>{
    switch(action.type) {
        case types.SAVEPRODUCTLIST:return {...state,...{productList:action.productList}} ;
        case "minus":return {...state,b:state.b--} ;
        default:
      return state;
    }
}