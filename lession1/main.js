// Biến: var let const

// camelCase
var myName="chinhpd5";

// PascalCase
var MyName="chinhpd5";

// const - biến hằng
const PI = 3.14;
// PI = 4;

//Sự giống và khác nhau giữa var và let
// Khai báo

var name = "chinhpd5";
var name = "chinhpd6";

let name1 = "chinhpd5";
// let name1 = "chinhpd6";

// Phạm vi(scope)

// global scope (var và let giống nhau)
// var name = "chinhpd5";
let name2 = "chinhpd5";
{
    // console.log(name2);
}

// block scope (if else, switch case, for,...)
{
    // var name3 = "chinhpd5"; // có thể
    let name3 = "chinhpd5"; // không thể
}

// console.log(name3);

// local scope (function) : var và let giống nhau
function sayHello(){
    // var a  = 10;    
    let a  = 10;    
}
// console.log(a);


// Kiểu dữ liệu

/**
 * Kiểu dữ liệu nguyên thủy
 * - string: '' "" ``
 * - number: 1 -2 1.5
 * - boolean: true false
 * - null
 * - undefinded
 * - symbol
 * - bigInt
 * 
 * Kiểu dữ liệu phức tạp
 * - array
 * - object
 */

// Toán tử trong JS
/**
 * Toán tử số học: + - * / ** % ++ --
 * Toán tử so sánh: > < >= <= == != ===
 * Toán tử gán: = += (i += 1 <=> i = i +1) -= *= ...
 * Toán tử logic: && || !
 */

// Cú pháp
// Điều kiện: if else, switch case, toán tử 3 ngôi

let result = ( 1 != true ) ? "Đúng" : "Sai"
// console.log(result);

// Vòng lặp (for , while, do while, for in, for of, forEach )

// DOM (Document Object Model)

// 1. Element
/**
 * id, class, tag
 * css selector
 */

var h1Element = document.getElementById('heading');
// console.log({ h1Element});
var h1Elements = document.getElementsByClassName('title');
// console.log(h1Elements);
var pElement = document.getElementsByClassName('paragragh');
// console.log(pElement);

// pElement.forEach(function(item){
//     console.log(item);
// })

// for(var i =0 ; i< pElement.length; i++){
//     console.log({value: pElement[i]});
// }

var pElement = document.getElementsByTagName('p');
// console.log(pElement);

// css selector

// var h1Element = document.querySelector('#heading'); // id
// var h1Element = document.querySelector('.title'); // class
var h1Element = document.querySelector('h1'); // tag

// console.log(h1Element);

var h1Elements = document.querySelectorAll('.paragragh');
// console.log(h1Elements);
h1Elements.forEach(item => {
    console.log(item);
});






// 2. Attribute

// 3. Text


