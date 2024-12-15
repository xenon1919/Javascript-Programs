let marks = [85,97,44,37,76,60];
let sum=0;
// for(let i=0;i<marks.length;i++) {
//     sum+=marks[i];
// }
for(let i of marks) {
    sum+=i;
}
console.log(sum);
let avg = sum/marks.length;
console.log(`Average Marks is ${avg}`);