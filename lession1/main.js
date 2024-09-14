//biến var let const

// camelCase
var myName = "chinhpd5";

// PascalCase
var MyName = "chinhpd5";

const PI = 3.14;
// PI = 3;

// Khai báo biến
var myAge = 20;
var myAge = 30;
// console.log(myAge);

let myHome = "Hà Nội";
myHome = "Hà Nam";

// Phạm vi (scope)

//global scope
let i =10; //var

{
    // console.log(i);
}

// block scope(if esle , switch case, for)
{
    // var a = 20; // có thế
    let a = 20; // không thể
}
// console.log(a);

// local scope (function)
function sayHello(){
    var b =30; // let
}

// console.log(b);

// Hoisting

// c = 40;
// console.log(c);
// var c;


// console.log(d);
let d = 50;

// Kiểu dữ liệu
/**
 * Kiểu dữ liệu nguyên thủy
 * string: '' "" ``
 * number: 1, -2 , 3.5
 * boolean: true false
 * null
 * undefinded
 * bigInt
 * symbol
 * 
 * Kiểu dữ liệu phức tạp
 * - array
 * - object
 */

// Toán tử trong JS
/**
 * Toán tử số học: + - * / ** % ++ --
 * Toán tử gán: = += (i+=1 <=> i = i + 1) -= *= ...
 * Toán tử so sánh: > < >= <= == != ===
 * Toán tử logic: && || !
 */

// Cú pháp
// Điều kiện: if else, switch case, toán tử 3 ngôi

var result = (1 != true) ? "Đúng" : "Sai"
// console.log(result);

// Vòng lặp: for, for in, for of, forEach, while, do while

// DOM (Document Object Model)

// 1. Element

/**
 * id,class,tag
 * css selector
 */

var h1Element = document.getElementById("heading")
// console.log({h1Element});
var h1Elements = document.getElementsByClassName('title')
// console.log(h1Elements);
var pElements = document.getElementsByClassName('paragragh');
// console.log(pElements);
// pElements.forEach(function(item){
//     console.log(item);
// })
for(var z =0 ;z <pElements.length;z++){
    // console.log(pElements[z]);
}

var pElements = document.getElementsByTagName('p');
// console.log(pElements);

// css selector

// var h1Element = document.querySelector('#heading'); // id
// var h1Element= document.querySelector('.title'); // class
var h1Element= document.querySelector('h1'); // tag
// console.log({h1Element});

var h1Elements = document.querySelectorAll('.title');
console.log(h1Elements);
h1Elements.forEach(function(item){
    console.log(item);
})








// 2. Attribute

// 3. Text









