// Xử lý bất đồng bộ trong JS

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// JS là ngôn ngữ đơn luồng (đồng bộ)
// call api, setTimeout, setInterval, load, click,...(JS xử lý bất đồng bộ)

console.log(1); // đồng bộ

setTimeout(()=>{
    console.log(2);
},3000) // sau 3s thực thi callback // bất đồng bộ

console.log(3); // đồng bộ

//1 -> chờ 3s in 2 -> 3 // mong đợi

// 1 -> 3-> chờ 3s in 2 // thực tế

// call stack: xử lý tác vụ đồng bộ trong JS
// web api: xử lý tác vụ bất đồng bộ trong JS

// JS ưu thi hiển thị(thực thi) kết quả của callstack(đồng bộ) trước webapi(bất đồng bộ)

// Tại sao cần xử lý
// 123 không ảnh hưởng đến công việc sau có thể bất đồng bộ
// 1 2 3 có kết quả ảnh hướng đến công việc sau -> phải xử lý bất đồng bộ
//ví dụ:
/**
 * 1. call api đến backend lấy danh sách sinh viên (bất đồng bộ)
 * 2. lấy danh sách từ api đổ dữ liệu ra bảng (map) (đồng bộ)
 * -> xử lý bất đồng bộ
 */

// Những cách xử lý bất đồng bộ trong JS
/**
 * callback
 * promise
 * async / await
 */

