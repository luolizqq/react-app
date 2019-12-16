export default function(state={a:1,b:2},action){
    switch(action.type) {
        case "add":return {...state,a:state.a++} ;
        case "minus":return {...state,b:state.b--} ;
        default:
      return state;
    }
}