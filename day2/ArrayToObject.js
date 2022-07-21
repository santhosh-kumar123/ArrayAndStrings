let emp = {
    name: "santhosh",
    age: 22,
}
console.log(Object.assign({},emp));
console.log(emp);
let emp1 = [["name", "santhosh"], ["age", 22]]
console.log(Object.fromEntries(emp1));
