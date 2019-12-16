import {fetch,get} from "./fetch.js"
export function balance(){
    return get('/shopro/data/balance') 
}

export function products(){
    return get('/shopro/data/products') 
}