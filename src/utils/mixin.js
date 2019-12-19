export default (method)=>{
    return function(obj){
        Object.assign(obj.prototype,method)
    }
}
export function padstr(value,indexArr,pad){
    indexArr.forEach((item,index)=>{
        if(value.length>item+index){
            value = value.substring(0,item+index) + pad + value.substring(item+index)
        }
    })
    return value
}