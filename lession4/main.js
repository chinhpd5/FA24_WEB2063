// Xử lý bất đồng bộ trong JS

// JS là ngôn ngữ đơn luồng (ĐỒNG BỘ)

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// call api, setTimeout,setInterval, click, load,... JS xử lý bất đồng bộ

console.log(1); // đồng bộ

setTimeout(()=>{
    console.log(2); // bất đồng bộ
},3000) // sau 3s thực thi ()=>{}

console.log(3);// đồng bộ

// Lý thuyết: 1 -> sau 3s in 2 -> 3
// Thực tế: 1 -> 3 -> sau 3s in 2

// callstack: xử lý các tác vụ Đồng bộ
// webapi: xử lý các tác vụ Bất đồng bộ
// JS ưu tiên thực thi(trả về kết quả) của call stack(Đồng bộ) trước
// sau khi thực thi toàn bộ callstack(Đồng bộ) -> webapi(Bất đồng bộ)

// Tại sao phải xử bất đồng bộ?

// Nếu các CV không liên quan(kết quả của CV trước k cần để xử lý CV sau)-> để bất đồng bộ
// Nếu các CV liên quan(kết quả của CV trước để xử lý CV sau) -> xử lý bất đồng bộ

/**
 * 1. call api lấy danh sách (bất đồng bộ)
 * 2. lấy danh sách sau khi callapi hiển thị ra table (đồng bộ)
 * // Không xử lý: 2 -> 1
 * -> xử lý bất đồng bộ 1 -> 2
 */

// các cách để xử lý bất đồng bộ
/**
 * callback
 * promise
 * async | await
 */
