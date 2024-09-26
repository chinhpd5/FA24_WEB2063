// Cách xử lý bất đồng bộ trong JS


// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

//ví dụ 2
console.log(1);

setTimeout(()=>{
    console.log(2);
},3000) // chờ 3s rồi thực thi ()=>{}

console.log(3);

// 1 -> chờ 3s in 2 -> 3

// thực tế : 1 -> 3 -> chờ 3s in 2 : bất đồng bộ

// JS là ngôn ngữ đơn luồng (đồng bộ: hàm nào gọi trước thì thực thi trước)

// Nhưng TH: call api, setTimeout, setInterval, click, load,... -> Bất đồng bộ;

/**
 * JS 
 * call stack: xử lý các tác vụ đồng bộ
 * web api: xử lý các tác vụ bất đồng bộ
 * JS ưu tiên thực thi call stack (đồng bộ) trước web api(bất đồng bộ)
*/
// Tại sao cần xử lý bất đồng bộ?
// Cách xử lý bất đồng bộ
/**
 * call back
 * promise
 * async / await
 */

/**
 * 1. call api lấy danh sách (bất đồng bộ)
 * 2. render (map) ra giao diện (đồng bộ)
 * 
 * 2 -> 1 
 * 1 -> 2 (xử lý bất đồng bộ)
 */
