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

function showInfo({name,age, child:{name: childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

showInfo(info)











