import * as types from "./action-type";
export function saveformData(dataType,value){
    return {
        type:types.SAVEFORMDATA,
        dataType,
        value
    }
}
export function saveImagePath(url){
    return {
        type:types.SAVEIMAGEPATH,
        url
    }
}
export function clearData(url){
    return {
        type:types.CLEARDATA,
        url
    }
}