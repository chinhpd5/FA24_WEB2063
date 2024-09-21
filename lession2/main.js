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

// console.log(sayHello3("chinh"));

// Default Parameter

const total = (a=0,b=0) => a + b;

// console.log(total(10));

// Destructuring

var arr = [1,2,3,4];

var [a,,c,d] = arr;

// console.log(a); //1
// // console.log(b);
// console.log(c); //3
// console.log(d); //4

var info ={
    name: "chinhpd5",
    age:20,
    child:{
        name: "chinhpd6"
    }
}

var {name,age, child:{name : childName}} = info;
// console.log(name);
// console.log(age);
// console.log(childName);

const showInfo =({name,age, child:{name : childName}})=>{
    // console.log(data.name);
    // console.log(data.age);
    // console.log(data.child.name);
    console.log(name);
    console.log(age);
    console.log(childName);
}

// showInfo(info)

// Rest ... : phần còn lại

var arr = [1,2,3,4,5];
var [first,...rest] = arr;

// console.log(first);
// console.log(rest);

var info ={
    name: "chinhpd5",
    age:20,
    child:{
        name: "chinhpd6"
    }
}

var {name, ...restObj} = info;
// console.log(name);
// console.log(restObj);

var sum = (a,...rest)=>{
    // console.log(rest);
    // let total=0;
    rest.forEach((item,index)=>{
        // console.log(item);
        // console.log(index);
        a += item;
    })
    return a
    
}

console.log(sum(1,2,3,4,5,6));

console.log(sum(1,2,3,5,6,7,8,9));











