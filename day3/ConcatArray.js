// using concat
let x = [1, 2, 3, 4, 5]
let y = [6, 7, 8, 9, 10]
let z = [11, 12, 13, 14, 15]

let combine = x.concat(y, z);
console.log(combine);

// using spread operator
let spread = [...x,...y,...z];
console.log(spread);