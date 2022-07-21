// 6 factors :-1,2,3,6
let number1 = Number(prompt("enter no"))
for (let i = 0; i <= number1; i++){
    if (number1 % i == 0) {
        console.log(i);
    }
}