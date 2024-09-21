// Function

// 1. Decleration

function sayHello(name){
    // code
    // console.log(`Xin chào ${name}`);
    return `Xin chào ${name}`
}

const result = sayHello("chinhpd5");
// console.log(result);

// Expression

var sayHello1 = function(name){
    return `Chào mừng bạn ${name}`
}

// console.log(sayHello1("Cường"));

// Arrow function => (es6)

var sayHello2 = (name,age) => {
    return `bạn: ${name}, Tuổi: ${age}`
}

// console.log(sayHello2("chinhpd5",20));

var sayHello3 = name => `Chào mừng bạn ${name}`

console.log(sayHello3("chinh"));



