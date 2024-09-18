// function

// 1. decleration function

function sayHello(name){
    return `Xin chào ${name}`
}

// const result = sayHello("chinhpd5");
// console.log(result);

// 2. expression function

var sayHello = function(name){
    return `Hello ${name}`
}

// console.log(sayHello("long"));

// 3. arrow function (es6) =>

var sayHello = (name,age) => {
    // code
    return `Chào mừng bạn ${name}`
}

var sayHello = name => `Chào mừng 2 ${name}`

// console.log(sayHello("Bắc"));


// Default Parameter
var sum = (a=0,b=0) => a+b;

// console.log(sum());

// Destructuring
var arr =[1,2,3];

var [a,,c] = arr;

// console.log(a); //1
// console.log(b); //2
// console.log(c); //3
//

var obj ={
    name: "chinhpd5",
    age:20,
    child: {
        name: "chinhpd6"
    }
}

var {name,age,child:{name : childName}} = obj;
// console.log(name);
// console.log(age);
// console.log(childName);

function showInfo({name,age,child:{name : childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

// showInfo(obj)

// REST (Phần còn lại) ...

var arr =[1,2,3];

var [a,...rest] = arr;

// console.log(a);
// console.log(rest);

var obj ={
    name: "chinhpd5",
    age:20,
    child: {
        name: "chinhpd6"
    }
}

var {name,...newObj} = obj;
// console.log(name);
// console.log(newObj);

var sum =(first,...rest)=>{
    // console.log(first);
    // console.log(rest);
    // let total = 0;
    rest.forEach((item)=>{
        first+= item
    })
    return first;
}

// console.log(sum(1,2,3,4,5));

// console.log(sum(1,2,3,4,5,6,7,8,9));

// spread ... (phân rã)

var arr1 =[1,2,3]
var arr2 =[4,5,6]

var newArr = [...arr1,...arr2];
// console.log(newArr);

var obj1 = {
    name: "chinhpd5",
    age: 20
}

var obj2 ={
    name: "chinhpd6",
}

var newObj = {...obj1,...obj2}

// console.log(newObj);

/**
 * // string number boolean (biến tham trị)
 * a = 1; (gán giá trị)
 * b = a; //1
 * a = 2
 * b//1
 */

/**
 * // array object (biến tham chiếm)
 * 
 * a = {name:1}
 * b = a (gán vị trí nhớ)
 * a.name =2
 * b.name //2
 */

var a ={name: 1}
var b = {...a};
a.name = 2;
console.log(b.name);












