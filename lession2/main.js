// function
// 1. Decleration function
function sayHello(name){
    // console.log(`Xin chào ${name}`);
    return `Xin chào ${name}`
}

var result = sayHello('chinhpd5')
// console.log(result);

// 2. Expression function

var sayHello2 = function (name){
    return `Chào mừng bạn ${name}`
}

// console.log(sayHello2("Long"));

// 3. Arrow function =>
var sayHello3 = (name,age) => {
    return `Bạn: ${name}, Tuổi: ${age}`
}
var sayHello4 = name => `Hi ${name}`


// console.log(sayHello3("chinhpd5",20));
// console.log(sayHello4("Bắc"));

// Default Parameter
var total = (a=0,b=0) => a + b;

// console.log(total(10,15));

//  Destructuring
//aray
var arr = [1,2,3]

var [a,,c] = arr;
// console.log(a); //1
// // console.log(b); //2
// console.log(c); //3

//object
var info  ={
    name:"chinhpd5",
    age:30,
    child: {
        name: "chinhp6"
    }
}

// var {name,age, child:{name: childName}} = info;
// console.log(name);
// console.log(age);
// console.log(childName);

function showInfo1(data){
    console.log(data.name);
    console.log(data.age);
    console.log(data.child.name);
}

function showInfo({name,age, child:{name: childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

// showInfo(info)

// Rest ... : phần còn lại
var arr2 = [1,2,4,5]

var [a,...rest] = arr2;
// console.log(a);
// console.log(rest);

//rest parameter
var sum = (total,...rest)=>{
    console.log(rest);
    // let total = 0;
    rest.forEach((item)=>{
        // console.log(item);
        total += item;
    })
    return total
}

// console.log(sum(1,2,3,4,5,6));

// console.log(sum(1,2,3,4,5,6,7,8,9));

var info ={
    name:"chinhpd5",
    age:30,
    child: {
        name: "chinhp6"
    }
}
var {name, ...newObj} = info

// console.log(name);
// console.log(newObj);

// spread ... : phân rã 

var arr1 = [1,2,3]
var arr2 = [4,5,6]

// [1,2,3,4,5,6]

// arr2.forEach((item)=>{
//     arr1.push(item)
// })

// console.log(arr1.concat(arr2));

var newArr = [...arr1,...arr2];
// console.log(newArr);
var obj1 = {
    name:"chinhpd5",
    age: 20
}

var obj2 ={
    name: "chinhpd6"
}

// var newObj = {...obj1,...obj2}
// console.log(newObj);


// Biến tham trị (string, number, boolean)
var a = 1;
var b = a; //1 // gán giá trị
a = 2;
// console.log(b); //1

//Biến tham chiếu(array, object)
var a = {value: 1};
var b = a; // gán vị trí nhớ (a,b cùng tham chiếu đến 1 vị trí nhớ)
a.value = 2; //a thay đổi, b cũng thay đổi theo
// console.log(b.value);//2

//gq deep clone
var a = {value: 1};
var b = {...a}
a.value = 2
// console.log(b); //1

// Nullish ??
var text; // null hoặc undefined

// text = text ?? 'default value';
text ??= 'giá trị mặc định';
 
// console.log(text);

//optional chaining ?.

var info = {
    name: "chinhpd5"
}
// console.log(info.name);
// console.log(info.child); //undefined
// console.log(info?.child?.name); //undefined
// if(info.child){
//     console.log(info.child.name);
// }

//module import và export (es6)
var title = "abc"

import title1, {home as home2,greeting} from './services.js'

console.log(title1);

console.log(home2);
greeting();























