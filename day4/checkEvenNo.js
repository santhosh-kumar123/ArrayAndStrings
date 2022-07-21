//Program to check whether a user entered number is even or odd.
// let number = Number(prompt("enter the no"))
// if (number % 2 == 0) {
//     console.log("number is even");
// }
// else {
//     console.log("number is odd");
// }
let num = Number(prompt("Enter a number"));
function EvenOrOdd(){
    if (num % 2 === 0)
        console.log(num +"is an even number");
    else
        console.log(num +"is an odd number");
}
EvenOrOdd();