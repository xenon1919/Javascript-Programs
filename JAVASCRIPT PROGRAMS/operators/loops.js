console.log("Rishi")
//for loop
for(let i=1;i<=5;i++) {
    console.log("Rishi")
}
//Calculate sum of 1 to 5
let sum=0;
for(let i=1;i<=5;i++) {
    sum=sum+i;
}
console.log(sum);
//Print 1 to 5
for(let i=1;i<=5;i++) {
    console.log(i);
}
//while loop
let i=1;
while(i<=5) {
    console.log(i);
    i++;
}
//do while
let a=20;
do {
    console.log(a);
    a++;
}
while (a<=10);

//for-of loop
let str= "Rishi"; //iterator
for(let i of str) {
    console.log(i);
}

//for-in loop
//used on objects
let student = {
    name:"Rishi",
    age:20,
    isPass:true
};
for(let i in student) {
    console.log(i); //returns keys
    console.log(student[i]) //returns values
}
