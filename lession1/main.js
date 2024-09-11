// Biến: var let const (es6)

const PI = 3.14;

// var name ="chinhpd5";

// var name = "abc";

// let name ="chinhpd5";

// name ="abc"

// scope

// global scope
// block scope (if, for, switch case)

// var i= 10; // let

// {
//     var i =10;    
// }

// console.log(i);

// local scope (function)

function sayHello(){
    var i =20; // let const
}

// console.log(i);

// hoisting

// a = 40;
// console.log(a);
// var a;

// let b=50;
// console.log(b);

// Kiểu dữ liệu JS:
/**
 * -Kiểu dữ liệu nguyên thủy
 * string : '' "" ``
 * number: 1 -1 1.2
 * boolean: true false
 * null
 * undefinded
 * symbol
 * bigInt
 * - Kiểu dữ liệu phức tạp
 * object
 * array
 */


// Toán tử
/**
 * Toán tử số học : + - * / ** % ++ --
 * Toán gán: = += (i += 1 <=> i = i + 1) -= ...
 * Toán tử so sánh: > < >= <= == ===
 * Toán tử logic:  && || !
 */

// cú pháp
// Điều kiện: if else, switch case , toán tử 3 ngôi 
const result = (1 == true) ? 'Đúng' : 'Sai'
// vòng lặp: for, for of, for in, while, do while, forEach



// DOM (Document Object Model)

// 1. Element

/**
 * id, class, tag
 * css selector
 */

var heading = document.getElementById('title')

// console.log(heading);
var paragraphs = document.getElementsByClassName('paragraph')

// console.log(paragraphs);

// for(var i =0; i< paragraphs.length; i++){
//     console.log({value:paragraphs[i]});
// }

var elements = document.getElementsByTagName('p')

// console.log(elements);

// var element = document.querySelector('h1') // tag
// var element = document.querySelector('#title') // id
// var element = document.querySelector('.paragraph') // class

// console.log({element});

var paras = document.querySelectorAll('h1') // trả về 1 mảng

// console.log(paras);
// paras.forEach((item)=>{
//     console.log(item);
    
// })



// 2. Attribute

// 3. Text




