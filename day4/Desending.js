let a = [11, 2, 3, 4, 2, 8, 1, 69, 1]
temp = 0;
for (let i = 1; i <= a.length; i++){
    for (let j = 0; j < i; j++){
        if (a[j] < a[i]) {
            temp = a[i]
            a[i] = a[j]
            a[j] = temp;
        }
    }
}
console.log(a);