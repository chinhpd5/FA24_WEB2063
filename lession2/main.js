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

console.log(sayHello("Bắc"));
