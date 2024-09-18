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
console.log(name);
console.log(age);
console.log(childName);

function showInfo({name,age,child:{name : childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

showInfo(obj)



