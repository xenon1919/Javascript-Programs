// let div =document.querySelector("div")
// console.log(div)
// let id=div.getAttribute("id");
// console.log(id)
// let para = document.querySelector("p");
// console.log(getAttribute("class"))
// console.log(para.setAttribute("class","newClass"));
// let div= document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";

// div.style.visibility="hidden"

// div.style.fontSize="10px";
let newbtn = document.createElement("button");
newbtn.innerText ="click me!";
console.log(newbtn);

let div = document.querySelector("div")
div.append(newbtn) //at the end
div.prepend(newbtn) // at the start
div.after(newbtn) // after node
div.before(newbtn) //before node
Node.remove()