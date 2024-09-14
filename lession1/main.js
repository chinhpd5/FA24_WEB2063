// Biến var let const 

// camelCase
var myName = "chinhpd5";

// PascalCase
var MyName = "chinhpd5";

// Khai báo biến
var myAge = 20;
var myAge = 30;

let myAdrress = "Hà Nội";
myAdrress = "Hải Phòng";

// Phạm vi (scope)
// global scope (var let)
let a = 10; // var

{
    // console.log(a);
}

// block Scope (if else, switch case, for)

{
    var b =20; // có thể
    let c = 30; // không thể
}

// console.log(c);

// local scope (function)
function sayHello(){
    var d =40;// let
}

// console.log(d);

// Hoisting

// e = 60;
// console.log(e);
// var e;

// console.log(f);
let f;

// Kiểu dữ liệu
/**
 * Kiểu dữ liệu nguyên thủy:
 * string: '' "" ``
 * number: 1, -2, 1.5
 * boolean: true false
 * null
 * undefinded
 * symbol
 * bigInt
 * 
 * Kiểu dữ liệu phức tạp:
 * - array
 * - object
 */

/**
 * Toán tử trong JS:
 * - Toán tử số học: + - * / ** % ++ --
 * - Toán tử gán: = += (i+=1 <=> i = i + 1) -= *= ...
 * - Toán tử so sánh: > < >= <= != == ===
 * - Toán tử logic: && || !
 */

// Cú pháp
// Điều kiện: if else, switch case, toán tử 3 ngôi
var result = (1 != true) ? "Đúng" : "Sai"

// console.log(result);
// Vòng lặp: for, for in, for of, forEach, while, do while

//DOM




