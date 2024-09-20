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

// console.log(sayHello4("Bắc"));

// Destructuring
var arr = [1,2,3];

var [a,,c] = arr;

// console.log(a); // 1
// // console.log(b); // 2
// console.log(c); // 3

var info = {
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

function showInfo({name,age,child:{name: childName}}){
    // console.log(data.name);
    // console.log(data.age);
    // console.log(data.child.name);
    console.log(name);
    console.log(age);
    console.log(childName);
}
// showInfo(info)

//REST: phần còn lại ...

var arr = [1,2,3,4];

var [fisrt,...rest] = arr;

// console.log(fisrt);
// console.log(rest);

var info = {
    name: "chinhpd5",
    age: 20,
    child:{
        name: "chinhpd6"
    }
}

var {name, ...restObj} = info;
// console.log(name);//chinhpd5
// console.log(restObj);

var sum =(a,...rest)=>{
    // console.log(rest);
    // let total =0;
    rest.forEach((item,index)=>{
        a += item
    })
    return a
    
}

// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8,9));

// spread ... : phân rã

var arr1 = [1,2,3,4]
var arr2 = [5,6,7,8]

// [1,2,3,4,5,6,7,8]

// arr2.forEach((item)=>{arr1.push(item)});
// console.log(arr1);

// console.log(arr1.concat(arr2));

var newArr = [...arr1,...arr2]

// console.log(newArr);
var obj1 ={
    name: "chinhpd5",
    age: 20
}
var obj2 = {
    name: "chinhpd6"
}

var newObj = {...obj1,...obj2};
// console.log(newObj);


//Biến tham trị (string, number, boolean)
// var a = 1; // tham chiếu đến giá trị
// var b = a; //1 //gán giá trị của a cho b
// a = 2; //2
// console.log(b); //1

//Biến tham chiếu (array object)
// var a = {value: 1};  // tham chiếu đến vị trí nhớ
// var b = a; // gán vị trí nhớ của a cho b (a,b cùng lưu trữ tại 1 nơi)
// a.value = 2;
// console.log(b.value); //2

var a ={value:1};
var b = {...a} //spread
a.value = 2;
console.log(b.value); //1




















