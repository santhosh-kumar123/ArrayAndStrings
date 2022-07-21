// // filter method:- to filter the value based on condition
let Dname = [
  "mysore",
  "manglore",
  "davanagere",
  "Hassan",
  "Huballi",
  "Bangalore",
];
let filters = Dname.filter((val, ind) => {
    if (val.length >= 8) {
        return val;
    }
});
console.log(filters);