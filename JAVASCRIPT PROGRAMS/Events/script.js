// let btn1=document.querySelector("#btn1")
// btn1.onclick=() => {
//     console.log("btn1 clicked")
//     let a =25;
//     a++;
//     console.log(a)
// }

btn1.addEventListener("click",(evt)=> {
    console.log("btn1 clicked")
    console.log(evt)
    console.log(evt.type)
})

btn1.addEventListener("click",()=> {
    console.log("btn1 clicked 2")
})

btn1.addEventListener("click",()=> {
    console.log("btn1 clicked 3")
})

btn1.addEventListener("click"handler3);

btn1.addEventListener("click",()=> {
    console.log("btn1 clicked 4")
})

btn1.removeEventListener("Click",()=> {
    console.log("btn1 clicked 3")
})






let div = document.querySelector("div") 
    div.onmouseover=() => {
        console.log('Inside div')
    }
