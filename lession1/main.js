// biến: var let const 

// camel case
var myName;

// pascal case
var MyName;

// khai báo;
var myName = "chinhpd5";
var myName = "chinhpd6";

let myAge = 30;
myAge = 40;

// scope

// global scope (var let const)

let myHome ="Hà Nội";

{
    // console.log(myHome);
}

// block scope (if else, switch case, for)

{
    var a = 10;
}

// console.log(a); // có thể

{
    let b = 20; // const
    // console.log(b);
}

// console.log(b);  // ko thể

// local scope (function)
function sayHello(){
    var c = 30; // let const
}

// console.log(c);

// Hoisting

d = 50;
// console.log(d);
var d;


// console.log(e);
let e;

const PI = 3.14;
// PI =4;
const OBJ = {name: "chinhpd5"}

OBJ.name ="chinhpd6"

// console.log(OBJ);

// Kiểu dữ liệu
/**
 * Kiểu dữ liệu nguyên thủy:
 * - number: 1, -2, 1.5
 * - string: '', "", ``
 * - boolean: true false
 * - null
 * - undefinded
 * - symbol
 * - bigInt
 * Kiểu dữ liệu phức tạp
 * - object
 * - array
 */

// Toán tử:
/**
 * Toán tử số học: + - * / ** % ++ -- ...
 * Toán tử so sánh: > < >= <= == != === !==
 * Toán tử logic: && || !
 * Toán tử gán: = += (i+=1 <=> i = i + 1) -= *= ...
 */

// Biểu thức Logic
// Biểu thức điều kiện
/**
 * if else
 * switch case
 * Toán tử 3 ngôi
 */

var result = (1 == true) ? 'Đúng':'Sai'

// Vòng lặp
/**
 * while
 * do while
 * forEach
 * for
 * for of
 * for in
 */

// DOM (Document Object Model)

// 1. Element

/**
 * id, class, tag
 * css selectors
 */

var h1Element = document.getElementById('heading')
// console.log({value:h1Element});

var pElements = document.getElementsByClassName('paragragh')
// console.log(pElements);
// pElements.forEach(function(item){
//     console.log(item);
// })

for(let i =0; i < pElements.length; i++){
    // console.log(pElements[i]);
}

var h1Elements = document.getElementsByClassName('title');
// console.log(h1Elements);

var pElements = document.getElementsByTagName('p')
console.log(pElements);






// 2. Attribute

// 3. Text





