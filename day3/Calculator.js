let symbol = prompt("enter the symbol")
let x = parseFloat(prompt("enter 1st no"));
let y = parseFloat(prompt("enter 2nd no"))
let z;
if (symbol == "+") {
    z=(x+y);
}
else if(symbol == "-"){
    z=(x-y);
}
else if(symbol == "*"){
    z=(x*y);
}
else {
    z=(x/y);
}
console.log(`${x} ${symbol} ${y} = ${z}`);
