import * as types from "./action-type";
import * as API from "api/getData";
export  function  getProductList(){
   
    return async function(dispatch){  
        const res = await API.products();
        let productList =[]
        if(res.http_code ==200){
            productList= res.data.data;
        }
        productList.forEach((item)=>{item.product_num=0})
        dispatch({
            type:types.SAVEPRODUCTLIST,
            productList
        })
    }
}