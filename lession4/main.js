// Xử lý bất đồng bộ trong JS

// JS là ngôn ngữ đơn luồng (ĐỒNG BỘ)

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// call api, setTimeout,setInterval, click, load,... JS xử lý bất đồng bộ

// console.log(1); // đồng bộ

// setTimeout(()=>{
//     console.log(2); // bất đồng bộ
// },3000) // sau 3s thực thi ()=>{}

// console.log(3);// đồng bộ

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

//callback : hàm gọi lại trong hàm khác, truyền qua 1 tham số

function sayHello(name){
    console.log(`Xin chào ${name}`);
}

function greeting(callback){ //function
    callback("chinhpd5")
}

// greeting(sayHello);
// greeting((name)=>{
//     console.log(`Chào mừng ${name}`);
// })

//fake 1 tác vụ bất đồng bộ
function delay(ms,callback){
    setTimeout(()=>{
        const data = "Hoàn thành tác vụ bất đồng bộ";
        callback(data);
    },ms)
}

function doingCallback(){
    console.log("việc 1");// đồng bộ
    delay(1500,(data)=>{
        console.log(data); // bất đồng bộ
        console.log("việc 2"); // đồng bộ

        delay(2000,(data)=>{
            console.log(data);
            delay(2000,(data)=>{
                console.log(data);
                delay(2000,(data)=>{
                    console.log(data);
                    delay(2000,(data)=>{
                        console.log(data);
                        delay(2000,(data)=>{
                            console.log(data);
                            
                        })
                    })
                })
            })
        })
    })
}
// doingCallback();

//callback hell

// promise: Lời hứa: thành công || thất bại


// khai báo
// const myPromise = new Promise((reslove, reject)=>{
//     const isCheck = false;
//     if(isCheck){
//         reslove("Thành công")
//     }else{
//         reject("Thất bại")
//     }
// })

// // thực thi
// myPromise
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log("Hoàn thành");
//     })


function delay(ms){
    return new Promise((resolve,reject)=>{
        const isCheck = true;
        setTimeout(()=>{
            if(isCheck){
                resolve("Hoàn thành tác vụ bất đồng bộ")
            }else{
                reject("Thất bại")
            }
        },ms)
    })
}

function doingPromise(){
    console.log("việc 1");
    
    delay(2000)
        .then(data=>{
            console.log(data);
            console.log("Việc 2");
            return delay(1500) // nếu return về 1 promise -> thực thi trong then tiếp theo
        })
        .then((data)=>{
            console.log(data);
            console.log("việc 3");
            return delay(1500)// lỗi -> bỏ qua các then tiếp theo -> catch
        })
        
        .then((data)=>{
            console.log(data);
            console.log("việc 4");
        })
        .catch((err)=>{
            console.log(err);
            
        })
        .finally() // có thể có 
}

doingPromise();