// Xử lý bất đồng bộ trong JS

// JS là ngôn ngữ đơn luồng (Đồng bộ)

// console.log(1);
// console.log(2);
// console.log(3);
// 1 2 3 

// call api, setTimeout, setInterval, load, click,...JS xử lý bất đồng bộ

console.log(1);// đồng bộ

setTimeout(()=>{
    console.log(2); // bất đồng bộ
},3000); // chờ 3s -> ()=>{} 

console.log(3);// đồng bộ

// Lý thuyết: 1 -> chờ 3s in 2 -> 3
// Thực tế: 1 -> 3 -> chờ 3s in 2

// callstack: xử lý các tác vụ ĐỒNG BỘ
// webapi: xử lý các tác vụ BẤT ĐỒNG BỘ
// JS ưu tiên thực thi(kết quả) của callstack(đồng bộ)
// Sau khi thực thi hết tất cả các tác vụ của callstack -> webapi(bất đồng bộ)

// tại sao cần xử lý bất đồng bộ
// 1: bất đồng bộ
// 2: đồng bộ
// Nếu 1 2 không ảnh hưởng (kết quả của việc 1 không liên quan việc 2)-> để bất đồng bộ
// nếu 1 2 có ảnh hưởng (kết quả 1 nó cần để xử lý việc 2)-> xử lý bất đồng bộ

//vd:
/**
 * 1. call api lấy danh sách // bất đồng bộ
 * 2. từ danh sách của việc 1 hiển thị dữ liệu ra bảng // đồng bộ
 * => xử lý bất đồng bộ
 */

// 3 cách xử lý bất đồng bộ
/**
 * callback
 * promise
 * async | await
 */
