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

// console.log(sayHello4("chinpd5"));

// Default parameter

var total = (a=0,b=0) => a +b;

// console.log(total(10,20));

// Destructuring
var arr =[1,2,3,4];

var [a,,c] = arr;

// console.log(a);//1
// // console.log(b);// 2
// console.log(c);//3
// console.log(d);

var info ={
    name: "chinhpd5",
    age: 20,
    child:{
        name: "chinhpd6"
    }
}

var {name,age,child:{name: childName}} = info;

// console.log(name);
// console.log(age);
// console.log(childName);

const showInfo =({name,age,child:{name: childName}})=>{
    console.log(name);
    console.log(age);
    console.log(childName);
}

showInfo(info)










