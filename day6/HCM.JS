// 6=>1,2,3,6 and 8=>1,2,4,8 hcf highest common factor is 2
let hcf;
let n1 = prompt("Enter 1st +ve no")
let n2 = prompt("Enter 2nd +ve no")
for (let i = 1; i <= n1 && i <= n2; i++){
    if (n1 % i == 0 && n2 % i == 0) {
        hcf = i;
    }
}
console.log(`hcf of ${n1} and ${n2} is ${hcf}`);