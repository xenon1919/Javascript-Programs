//This is a comment
//Operators
//Arithmetic
let a=5;
let b=5;
console.log(a+b)
console.log(a-b);
console.log(a*b);
console.log(a/b);

//Modulus (%) returns the remainder of division. 
console.log(13%5);

//Increment and Decrement operators ++ and -- can be used as prefix or postfix. Prefix means it happens before, Postfix means after
/*Equality operators == and != compare values for equality.*/
console.log(a++)
console.log(b++)

//Assignment Operators
a+=4;
console.log(a)
//Comparison Operators
// Equal to == , Equal to & Type ===, Not Equal to !=, Not Equal to and Not Type !===, >=, <=,>,<
console.log("5"=="2",a==b)
console.log("5"=="5",a==b)
console.log("5"!="2",a==b)
//Logical Operators
let x=6
let y=5;
let cond1 = x>5
let cond2= x===6
console.log(cond1 && cond2)
console.log(cond1 || cond2)

//Conditional Statements
let age = 25;
if(age>18) {
    console.log("You can vote")
}
else {
    console.log("You cannot vote")
}

let mode="light"
let color
if(mode=="dark") {
    color="black"
}
else {
    color="white"
}


if(age<18) {
    console.log("junior")
}
else if(age>60) {
    console.log("senior")
}
else {
    console.log("middle")
}

//Ternary Operator
//condition? true output:false ouput
age >18? "adult " : "not adult"