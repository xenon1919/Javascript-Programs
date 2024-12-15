// const student = {
//     fullName: "Rishi",
//     marks: 95.8,
//     printMarks: function() {
//         console.log("marks = ",this.marks) //this means student.marks
//     }
// }

const employee = {
    calcTax() {
        console.log("tax rate is 10$")
    }
    // calcTax2: function() {
    //     console.log("tax rate is 10$")
    // }
}

const rishi = {
 
   salary:500000,
   calcTax() {
    console.log("tax rate is 20%")
   }
}

// const sai = {
//     salary:500000 
// }
// const teja = {
//     salary:500000 
// }
// const xenon = {
//     salary:500000 
// }
// const xeno = {
//     salary:500000 
// }
// const oxygen = {
//     salary:500000 
// }
rishi.__proto__=employee