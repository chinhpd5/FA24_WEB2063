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


console.log(sayHello2('Long'));
console.log(sayHello3('Bắc'));



