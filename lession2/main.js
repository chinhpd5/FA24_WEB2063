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

// console.log(sum(1,2,3,4,5,6));

// console.log(sum(1,2,3,5,6,7,8,9));

// spread ... (Phân rã)

var arr1= [1,2];
var arr2 =[3,4];
// [1,2,3,4]

// console.log(arr1.concat(arr2));
// arr2.forEach((item)=>{
//     arr1.push(item)
// })

// console.log(arr1);

var newArr = [...arr1,...arr2]

// console.log(newArr);

var obj1 ={
    name: "chinhpd5",
    age: 20
}

var obj2 = {
    name:"chinhpd6"
}

var newObj = {...obj1,...obj2}

// console.log(newObj);


// Biến tham trị (string number boolean)
// var a = 1; //number
// var b = a; // gán giá trị của a cho b //1
// a = 2;
// console.log(b);//1


// Biến tham chiếu (array, object)
// var a = {value: 1}; // object
// var b = a; // gán vị trí nhớ của a cho b (a và b cùng trỏ đến 1 ô nhớ) // 1
// a.value = 2; // b cũng thay đổi theo a
// console.log(b.value);//2

var a = {value: 1}; // object
var b = {...a}; 
a.value = 2; 
console.log(b.value);//1

// deep clone

















