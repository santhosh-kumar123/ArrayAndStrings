let arr = [10, 2, 4, 5, 3, 6, 9, 7, 8, 2]
let temp = 0;
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j< i; j++){
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
           
        }
    }
}
console.log(arr);