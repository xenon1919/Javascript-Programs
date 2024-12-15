//Arrays
let marks =[90,81,92,83,100];
console.log(marks);
console.log(marks.length);

let heroes = ["Iron man","Thor", "Hulk", "Superman"];
console.log(heroes);

console.log(typeof(marks));

console.log(marks[2])

//change values
marks[4] = 95;
console.log(marks)

//Adding elements to array
marks.push(76);
console.log(marks);

//Removing element from the array using pop() method
marks.pop();
console.log(marks);

//Using shift() method to remove first element of an array
marks.shift();
console.log(marks);

//Using unshift() method to add element at the beginning of an array
marks.unshift(89);
console.log(marks);

//Sorting arrays in ascending order
marks.sort((a,b)=> a-b);
console.log(marks);

/*
 * Sorting in descending order:
 */
marks.sort((a, b) => b - a);
console.log(marks);

let index = marks.indexOf(90); //returns the position of given value in the array
console.log("The number is present at index : "+index);

if (marks.includes(100)) {
    console.log('Yes');
} else {
    console.log('No');
}

let arr = ["apple", "banana", "cherry"];
arr.splice(1,2); //removes banana and cherry from the array
                   //first parameter is starting point and second one is how many elements you want to delete 
console.log(arr); 

let fruits = ['Apple', 'Banana', 'Orange'];
fruits[0]='Apricot';
console.log(fruits);





