// function

// Decleration function
function sayHello(name){
    // console.log(`Xin chào ${name}`);
    return `Xin chào ${name}`
}

var result = sayHello("chinhpd5");
// console.log(result);

// Expression function
var sayHello2 = function(name){
    return `Chào mừng bạn ${name}`
}

// console.log(sayHello2("Long"));

// Arrow function => (es6)

var sayHello3 = (name,age) => {
    return `Bạn ${name}, Tuổi: ${age}`
}

// console.log(sayHello3("chinhpd5",20));
var sayHello4 = name => `Xin chào ${name}`

console.log(sayHello4("chinpd5"));


