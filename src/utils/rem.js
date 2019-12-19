// (function(window,document){
//     function computed(){
//         const clientW = document.documentElement.clientWidth,
//                 designWidth = 750;
//         document.documentElement.style.fontSize = clientW / designWidth * 75 +"px"
//     }
//     const resizeEvent = 'onorientationchange' in window ? 'onorientationchange' :"onresize";
//     computed();
//     window[resizeEvent] = computed;
// })(window,document)



export default function setRem(baseWidth = 750) {
    const dpr = window.devicePixelRatio;
    const currentWidth = document.documentElement.clientWidth;
    let remSize = 0;
    let scale = 0;
    scale = currentWidth / baseWidth;
    remSize = baseWidth / 10;
    remSize = remSize * scale;
    document.documentElement.style.fontSize = remSize + 'px';
    document.documentElement.setAttribute('data-dpr', `${dpr}`);
}


// (function(psdw){
//     var dpr=0 , rem=0 , scale=0;
//     var htmlDOM=document.documentElement;
//     dpr=window.devicePixelRatio;
//     var currentWidth=htmlDOM.clientWidth;
//     scale=currentWidth/psdw;
//     rem=psdw/10;
//     rem=rem*scale;
//     htmlDOM.style.fontSize=rem+'px';
//     htmlDOM.setAttribute('data-dpr',dpr)
// })(750)