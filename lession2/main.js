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

showInfo(info)








