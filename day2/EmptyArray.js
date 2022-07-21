let arr1 = [1, 2, "san", 4]
let arr2 = arr1;//cloning
arr1 = [];//simple empty
console.log(arr1);
console.log(arr2);
console.log(arr2.splice(0, arr2.length));//using slice
console.log(arr2);
console.log(arr1);