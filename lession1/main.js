//Biến: var let const

// camel case
var myName="chinhpd5";

// Pascal case
var MyName ="chinhpd5";

// Khai báo
var myName = "xin chào"

let hello ='Hello';
hello = "xin chào";

// scope
// global scope
let myName1 = "chinhpd5"; // var const

{
    // console.log(myName1);
}

// block scope (if else switch for)
{
    var a = 10;
}
// console.log(a); // có thể

{
    let b = 20;
}
// console.log(b); // không thể

// local scope (function)
function sayHello(){
    var c =30; // let const
}

// console.log(c);

// hoisting

d = 50;
// console.log(d);
var d;

// console.log(e);
let e =20;

// const
const PI = '3.14';
// PI = 4;

// Kiểu dữ liệu trong JS
/**
 * Kiểu dữ liệu nguyên thủy
 * - string: '' "" ``
 * - number: 1 -1 1.5
 * - boolean: true false
 * - null
 * - undefinded
 * - symbol
 * - bigInt
 
 * Kiểu dữ liệu phức tạp
 * - object
 * - array
 */


// Toán tử
/**
 * Toán tử số học: + - * / ** % ++ --
 * Toán tử so sánh: > < >= <= == != === !==
 * Toán tử gán: = += (i+=1 <=> i = i + 1) -= *= ...
 * Toán tử logic: && || !
 */


//Cú pháp
// Cú pháp điều kiện : if else, switch case, toán tử 3 ngôi
var result = (1 == true) ? "Đúng" : "Sai"

// Vòng lặp
// for
// while, do while, forEach, for of, for in

// DOM (Document Object Model)

// 1. Element

/**
 * id, class, tag
 * css selectors
 */

var h1Element = document.getElementById("heading")
// console.log({h1Element});

var h1Elements = document.getElementsByClassName('title')
// console.log(h1Elements);
var pElements = document.getElementsByClassName('paragragh');
// console.log(pElements);

// for(var i =0;i <pElements.length; i++){
//     console.log(pElements[i]);
// }

// pElements.forEach(function(item){
//     console.log(item);
// })
var pElements = document.getElementsByTagName('p');
// console.log(pElements);

// css selector

// var h1Element = document.querySelector('#heading');// id
// var h1Element = document.querySelector('.paragragh');// class
// var h1Element = document.querySelector('p');// tag
// console.log({h1Element});

var pElements = document.querySelectorAll('body .paragragh');
// console.log(pElements);

pElements.forEach(function(item){
    // console.log({item});
})


// 2. Attribute
var h1Element = document.querySelector('#heading');// id

h1Element.id = "heading2";
h1Element.style.color = 'red';

// console.log(h1Element.id);
h1Element.setAttribute("data","chinhpd5")

console.log(h1Element.getAttribute("data"));



// 3. Text




