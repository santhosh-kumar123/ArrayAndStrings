// creating json and updating and deleting

let obj = [{
    name: "santhosh",
    age:"24"
},
{
 name: "santhosh1",
    age:"24"
},
{
 name: "santhosh2",
    age:"24"
    }]
obj[1].name = "santhosh3"//replace

let a = obj.filter((val) => {
    if (
        val.name==="santhosh3"
    )
    return val
})
console.log(a);
console.log(obj);
delete (obj[2]);//delete
console.log(obj);