// Xử lý Bất đồng bộ trong JS


// JS ngôn ngữ đơn luồng (Đồng bộ)

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// call api, setTimeout, setInterval, click, load,...
// -> JS xử lý bất đồng bộ

console.log(1); // đồng bộ
setTimeout(()=>{
    console.log(2);// bất đồng bộ
    
},3000) // chờ 3s thực thi ()=>{} 
console.log(3); // đồng bộ

// lý thuyết: 1 -> chờ 3s in 2 -> 3

// thực tế: 1 -> 3 -> chờ 3s in 2

// call stack: xử lý những tác vụ Đồng bộ
// web api: xử lý các tác vụ Bất đồng bộ

//JS ưu tiên thực thi(trả về) kết quả của callstack(đồng bộ) trước
// Sau khi hết callstack -> webapi(Bất đồng bộ)

// Tại sao cần xử lý bất đồng bộ
// nếu 1 2 3 kết quả của 3 cv không ảnh hướng đến nhau
// có thể thực thi bất đồng bộ

// Nhưng nếu 1 2 3 có kết quả ảnh hướng đến nhau
// cần kết quả của việc 1 để xử lý công việc 2 (thực tế 2 xong trước 1)
//-> Phải xử lý bất đồng bộ
/**
 * 1. call api đến backend để lấy danh sách (bất đồng bộ)
 * 2. sử dụng map để hiển dữ liệu ra giao diện (đồng bộ)
 * bắt buộc việc 1 phải hoàn thành thì mới thực thi việc 2
 * -> xử lý bất đồng bộ
 */

// những cách để xử lý bất đồng bộ
/**
 * callback
 * promise
 * async | await
 */
