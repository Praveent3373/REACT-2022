import { divredId, divblueId, btnToggle } from "./script1";
import '../css/style1.css';
import '../css/style2.css';

let div='divred';  
divredId.style.display='none';  
btnToggle.addEventListener('click',toggleDiv);  
function toggleDiv(){  
    console.log(div);
    if(div=='divblue')  
    {  
        div='divred';  
        divblueId.style.display='block';  
        divredId.style.display='none';  
    }  
    else if(div=='divred')  
    {  
        div='divblue';  
        divblueId.style.display='none';  
        divredId.style.display='block';  
    }  
}   


// (function(){
//     let div = `
//     <div>
//         <img src = '${img1}' width="25%">
//         <img src = '${img2}' width="25%">
//         <img src = '${img3}' width="25%">
//         <img src = '${img4}' width="25%">
//     </div>
//     `
//     document.getElementById('div2').innerHTML = div
// })();