let arr1 = [0, 1, 0, 1, 0, 1, 0, 1, 2, 0]
let index = arr1.indexOf(2)
if (index !== -1) {
    arr1[index]="20"
}
console.log(arr1);
// ***************************************************************************************************

let arr2 = [0, 1, 0, 1, 0, 1, 2, 4, 0]
console.log(arr2);
for (let i = 0; i <= arr2.length; i++){
    if (arr2[i] == 0) {
        arr2[i]=1 
    }
    else if (arr2[i] == 1) {
        arr2[i]=0
    }
}
console.log(arr2);







// *****************************************************************************
// let x = arr1.map((val,index) => {
//     if (val == 1) {
//        return val=0
//     }
//     else if (val == 0) {
//         return val=1
//     }
//     else {
//         return val
//     }
// })
// console.log(x);
// console.log(arr1);

// *****************************************************************************
// let arr2 = "santhosh is good boy good";
//    console.log(arr2);
//    let x1 = arr2.replaceAll("good", "bad");
//    console.log(x1);

// *****************************************************************************
