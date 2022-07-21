//Multiply even index by 2
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8]
let mult = arr5.map((val,ind)=>{
    if (ind % 2 == 0) {
        return val*2
    }
    else {
        return val
    }
})
console.log(mult);