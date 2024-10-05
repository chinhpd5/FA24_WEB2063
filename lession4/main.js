// Xử lý bất đồng bộ trong JS

// JS là ngôn ngữ đơn luồng (Đồng bộ)

// console.log(1);
// console.log(2);
// console.log(3);
// 1 2 3 

// call api, setTimeout, setInterval, load, click,...JS xử lý bất đồng bộ

// console.log(1);// đồng bộ

// setTimeout(()=>{
//     console.log(2); // bất đồng bộ
// },3000); // chờ 3s -> ()=>{} 

// console.log(3);// đồng bộ

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

// callback: hàm gọi lại trong hàm khác, truyền qua tham số của hàm đó

function sayHello(name){
    console.log(`Xin  chào ${name}`);
}

function greeting(callback){ // string number boolean array object // function
    callback("chinhpd5")
}

// greeting(sayHello);
// greeting((name)=>{
//     console.log(`Xin chào ${name} 2`);
// })

// fake 1 tác vụ bất đồng bộ
function delay(ms,callback){
    setTimeout(()=>{
        const data ="Hoàn thành tác vụ bất đồng bộ";
        callback(data)
    },ms)
}

function doingCallback(){
    console.log("việc 1"); // đồng bộ
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
// callback hell

// promise: lời hứa: thành công | thất bại
// khai báo
// const myPromise = new Promise((resolve, reject)=>{
//     const isCheck = false;
//     if(isCheck){
//         resolve("Thành công")
//     }else{
//         reject("Thất bại")
//     }
// })
// // thực thi
// myPromise
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
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
        .then((data)=>{
            console.log(data);
            console.log("Việc 2");
            return delay(1000);// có thể return về 1 Promise-> thực thi ở then tiếp theo
        })// thành công
        .then(data=>{
            console.log(data);
            console.log("Việc 3");
            return delay(1000); // lỗi -> catch
        })
        .then(data=>{
            console.log(data);
            console.log("Việc 4");
            return delay(1000);
        })
        .then(data=>{
            console.log(data);
            console.log("Việc 5");
            // return delay(1000);
        })
        .catch(err=>{
            console.log(err);
        }) // thất bại
        .finally() // có thể có
}
doingPromise();