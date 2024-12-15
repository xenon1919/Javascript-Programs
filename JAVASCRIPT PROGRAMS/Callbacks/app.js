//async wait>> promise chains>>callback hell
// console.log("one")
// console.log("two")
// console.log("three")

// function hello() {
//     console.log("hello")
// }

// setTimeout(hello,2000) //timeout 2s=2000ms

setTimeout(() => {
    console.log("hello")
}, 4000)