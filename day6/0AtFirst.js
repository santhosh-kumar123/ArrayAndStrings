let arr1 = [0, 1, 0, 1, 0, 1, 0, 1, 2, 0];
// for (let i = 0; i <= 1; i++){
//     if (arr1[i] == 0) {
//        console.log("santhosh");
//    }
// }
// console.log(arr1);

let arr2 = [];
let arr3 = [];
let x = arr1.map(val => {
  if (val == 0) {
    let x = arr2.push(val);
    return x;
  } else {
    return arr2.push(val);
  }
});
console.log(arr2);
console.log(x);
console.log(arr1);
