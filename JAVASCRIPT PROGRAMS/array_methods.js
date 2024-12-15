let items= ["potato","apple","litchi","tomato"]
items.push("chips")
console.log(items)
items.pop()
console.log(items)
str= items.toString;
console.log(str)
let marvel_heroes =["thor","spiderman","ironman","antman","dr.strange"]
let dc_heroes=["superman","batman"]
let heroes = marvel_heroes.concat(dc_heroes);
console.group(heroes);
//unshift adds to start
//shift removes the start

//slice
console.log(marvel_heroes.slice(1,3)) //1st to 2nd

//splice
//it changes original array 
//splice(startidx, delcount,newel)

let arr=[1,2,3,4,5,6,7,8];
arr.splice(2,2,101,102)
console.log(arr)