// function

//1. declaration function

function sayHello(name){
    //logic code
    // console.log(`Xin chào ${name}`);
    return `Xin chào ${name}`
}

const result = sayHello("chinhpd5");
// console.log(result);

// 2. Expression function
var sayHello2 = function(name){
    return `Chào mừng bạn ${name}`
}

// console.log(sayHello2("Long"));

// 3. Arrow function (es6) =>
var sayHello3 = (name,age)=>{
    return `Bạn: ${name}, Tuổi: ${age}`
}

// console.log(sayHello3("chinhpd5",20));

var sayHello4 = name => `Chào mừng ${name}`

console.log(sayHello4("Bắc"));







