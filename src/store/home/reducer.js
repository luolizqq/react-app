import * as types from "./action-type";
const defaultValue = {
            salesAmount:null,
            customTel:null,
            customName:null,
            imagePath:null
}
export const formData = (state=defaultValue,action={})=>{
    switch(action.type) {
        case types.SAVEFORMDATA:
            return {...state,...{[action.dataType]:action.value}};
        case types.SAVEIMAGEPATH:
            return {...state,...{imagePath:action.url}};
        case types.CLEARDATA:
            return {...state,...{salesAmount:null,customTel:null,customName:null}}
        default:
            return state;
    }
}