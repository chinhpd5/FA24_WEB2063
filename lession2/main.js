// Function

// 1. Declaration function
function sayHello(name){
    return `Xin chào ${name}`
}

const result = sayHello("chinhpd5");

// console.log(result);

// 2. Expression function
var sayHello1 = function (name){
    return `Xin chào ${name}`
}

// console.log(sayHello1("các bạn"));

// 3. Arrow function => (es6)

var sayHello2 = (name,age) => {
    return `Xin chào ${name}`;
}

var sayHello3 = name => `Xin chào ${name}`


// console.log(sayHello2('Long'));
// console.log(sayHello3('Bắc'));

//Default Parameter
const sum = (a=0,b=0) => a + b;
// console.log(sum(10,60));

// Destructuring

var arr = [1,2,3];

var [a,,c] = arr;

// console.log(a); //1
// // console.log(b); //2
// console.log(c); //3


var info = {
    name: "chinhpd5",
    age: 20,
    child:{
        name: "chinhpd6"
    }
}

var {name,age,child: {name: childName}} = info;

// console.log(name);
// console.log(age);
// console.log(childName);

function showInfo({name,age,child: {name: childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

// showInfo(info)

//REST ... : Phần còn lại

var arr1 = [1,2,3,4];

var [a,...rest] = arr1

// console.log(a); // 1
// console.log(rest); // [2,3,4]

var info = {
    name: "chinhpd5",
    age: 20,
    child:{
        name: "chinhpd6"
    }
}

var {name, ...newInfo} = info;
// console.log(name);
// console.log(newInfo);

var sum1 = (frist,...rest)=>{
    // console.log(frist);
    // console.log(rest);
    
    // let total = 0;
    rest.forEach((item)=>{
        frist += item
    })

    return frist
}
// console.log(sum1(1,2,3,4,5));
// console.log(sum1(10,2,3,4,5,6,7,8,9));

// Spread ... : phân rã

var arr1 = [1,2,3]
var arr2 = [4,5,6]

// var arr3 =[arr1,arr2] // [1,2,3,4,5,6] // [[1,2,3],[4,5,6]]
// console.log(arr1.concat(arr2));

var arr3 = [...arr1, ... arr2];
// console.log(arr3);

var obj1 = {
    name: "chinhpd5",
    age: 20
}
var obj2 = {
    name : "chinhp6"
}

var newObj = {...obj1, ...obj2}

// console.log(newObj);

// Biến tham trị (number, string, boolean,..)
// var a = 1;
// var b = a;  //1 // gán giá trị
// a = 2;
// console.log(b); // 1


// Biến tham chiếu (array, object)
var a = {value: 1};
var b = a; // gán vị trí nhớ (a,b cùng cung 1 ô nhớ)
a.value = 2;
// console.log(b.value); //2

// deep clone

var a = {value: 1};
var b = {...a}; // gán giá trị
a.value = 2;
// console.log(b.value); //1

// nullish ??

var name1 = 10;

// name1 = name1 ?? 'Default value'; // null, undefined
name1 ??= 'Default value'

// console.log(name1);

// optional chaining ?.

var obj = {
    name: "chinhpd5",
    age: 20
}

// console.log(obj.child);
// console.log(obj?.child?.name);

// if(obj.child){
// }
// chạy bt

// module (es6) import export

import title, {home,greeting}  from './service.js'

console.log(title);
console.log(home);
greeting();



















