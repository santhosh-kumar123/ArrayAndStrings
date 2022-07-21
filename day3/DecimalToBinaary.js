let n = prompt("enter the no")
let bin = 0;
let temp = 1;
while (n > 0) {
    rem = (n % 2) * temp
    n = parseInt(n / 2)
    bin = bin + rem
     temp=temp*10
}
console.log(bin);