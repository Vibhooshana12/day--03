// 1.How to compare two JSON have the same properties without order?
// a. let obj1 = {name: "Person 1",age:5}
// b. let obj2 ={age:5,name:"Person 1"};
var obj1 = {name:"Person 1",age:5};
var obj2 = {age:5, name:"Person 1"};
var res= function(obj1,obj2)
{
    return (JSON.stringify(obj1,Object.keys(obj1).sort())) === JSON.stringify(obj2,Object.keys(obj2).sort())
}
console.log(res(obj1,obj2))


