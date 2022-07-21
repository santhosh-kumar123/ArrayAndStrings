// fizz buzz  if teh no is modules of 3 then print fizz
// the no is mult of 5 print buzz
// the no is mult of 15 print fizz-buzz

let i = prompt("enter the number")
// for (let i = 0; i <= number; i++){
    if (i % 3 == 0&&i%5==0) {
        console.log("FIZZ-BUZZ");
    }
    else if (i % 5 == 0) {
        console.log("BUZZ");
    }
    else if(i%3==0) {
        console.log("FIZZ");
}
    else {
        console.log(i);
    }
// }
