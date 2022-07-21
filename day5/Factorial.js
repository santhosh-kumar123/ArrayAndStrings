//Program to find factorial of a number.
// Example:6!-> 6*5*4*3*2*1=720.

let number = Number(prompt("enter no"));
let fact = 1;

for (let i = 1; i <= number; i++){
        fact=fact*i
}
console.log(fact);