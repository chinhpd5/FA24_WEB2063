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


