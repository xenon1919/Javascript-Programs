//var is a re declared and updated, it is a global scope variable
//let cannot be re declared but can be updated, it is a block scope variable
//const cannot be updated or re declared, it is a block scope variable
let name ="Tony Stark";
console.log(name);
//var is outdated
var myName="Rishi";
//var myName="Sai" is also possible using var
const age=20;
let x=10;
x=20;
//by default, the value is undefined in let
{
    let a=6
    console.log(a);
}
{
    let a=10
    console.log('Outside:',a)
}