//0,1,1,2,3,5,8,13,21,34

let number2 = Number(prompt("enter no"))
let num1 = 0;
let num2 = 1;
let numterm = num1 + num2;
while (numterm <= number2) {
    console.log(numterm);
    num1 = num2;
    num2 = numterm;
    numterm=num1+num2
}


