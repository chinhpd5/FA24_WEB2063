// Xử lý bất đồng bộ trong JS

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// JS là ngôn ngữ đơn luồng (đồng bộ)
// call api, setTimeout, setInterval, load, click,...(JS xử lý bất đồng bộ)

// console.log(1); // đồng bộ

// setTimeout(()=>{
//     console.log(2);
// },3000) // sau 3s thực thi callback // bất đồng bộ

// console.log(3); // đồng bộ

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

// callback : hàm gọi lại trong 1 function khác, thông qua 1 tham số

function sayHello(name){
    console.log(`Xin chào ${name}`);
}

function greeting(callback){ // number. string, boolean, array object // function
    callback("chinhpd5")
}

// greeting(sayHello);

// fake 1 tác vụ bất đồng bộ
function delay(ms,callback){
    setTimeout(()=>{
        const data ="Thực thi xong tác vụ bất đồng bộ"
        callback(data);
    },ms)
}

function doingCallback(){

    console.log("việc 1"); // đồng bộ
    delay(1500,(data)=>{
        console.log(data); //bất đồng bộ
        console.log("việc 2"); // đồng bộ
        //=============
        console.log("việc 3");
        delay(2000,(data)=>{
            console.log(data); 
            console.log("Việc 4");
            
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
}

// doingCallback();
// callback hell -> promise

//Promise: Lời hứa


// khai báo 1 promise
const myPromise = new Promise((resolve,reject)=>{
    const isCheck = true;
    if(isCheck){
        resolve("Thành công")
    }else{
        reject("Thất bại")
    }
})

// thực thi
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

// fake tác vụ bất đồng bộ
function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isCheck = true;
            if(isCheck){
                resolve("Thực thi xong tác vụ bất đồng bộ")
            }else{
                reject("Thất bại")
            }

        },ms)
    })
}
function doingPromise(){
    console.log("Việc 1");
    delay(1500)
        .then((data)=>{
            console.log(data);
            console.log("Việc 2");
            return delay(1000); // nếu return về 1 promise
        })// sẽ được thực thi trong then tiếp theo
        .then((data)=>{
            console.log(data);
            console.log("Việc 3");
        })
        .catch((err)=>{
            console.log(err);
        })
}
// doingPromise()

async function doingAsync(){
    console.log("Việc 1");
    let data = await delay(2000)
    console.log(data);
    console.log("việc 2");

    data = await delay(2000)
    console.log(data);
    console.log("việc 3");

}

doingAsync()