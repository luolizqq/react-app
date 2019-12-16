export default function(state={direction:""},action){
    switch(action.type) {
        case "left":
            return {direction:"left"};
        case "right":
            return {direction:"right"};
        default:
            return state;
    }
}