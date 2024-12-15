// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise")
//     resolve(123)
//     reject("some error occurred")
// })

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             // console.log("data", dataId)
//             // resolve("success")
//             reject("error")
//             if(getNextData)  {
//                 getData()
//             }
//         },2000)
//     })
// }



const getPromise = () => {
    new Promise((resolve, reject) => {
        console.log("I am Promise")
        resolve("success")
    })
}

let promise=getPromise()
promise.then(() => {
    console.log("Promise fulfilled")
})


promise.catch((err) => {
    console.log("Promise rejected",err)
})