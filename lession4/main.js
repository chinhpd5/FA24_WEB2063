// xử lý bất đồng bộ trong JS

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// JS là ngôn ngữ đơn luồng (Đồng bộ)
// call api, setTimeout, setInterval, click, load,... JS xử lý bất đồng bộ

// console.log(1); // đồng bộ

// setTimeout(()=>{
//     console.log(2); // bất đồng bộ
// },3000) // sau 3s -> ()=>{}

// console.log(3);// đồng bộ

// Lý thuyết: 1 -> chờ 3s in 2 -> 3

// Thực tế: 1-> 3 -> chờ 3s in 2

// call stack: xử lý những tác vụ Đồng bộ
// web api: xử lý những tác vụ Bất đồng bộ
// JS ưu tiên thực thi(hiển thị) call stack(Đồng bộ)
// khi hết tất cả các tác vụ call stack --> web api(Bất đồng bộ)

// Tại sao phải xử lý bất đồng bộ
// 1 2: Không ảnh hưởng => có thể để bất đồng bộ
// 1 2: Có ảnh hưởng(kết quả 1 phải xong trước việc 2) => xử lý bất đồng bộ

/**
 * 1. call api lấy danh sách sinh viên -> bất đồng bộ
 * 2. dùng ds Sinh viên hiển thị ra màn hình -> đồng bộ
 * Nếu không xử lý bất đồng bộ : 2->1 -> logic lỗi
 */

// Để xử lý bất đồng bộ
/**
 * call back
 * promise
 * async / await
 */

// callback: Hàm gọi lại trong function khác, truyền qua 1 đối số của function

function sayHello(name){
    console.log(`Xin chào ${name}`);
}

function greeting(callback){
    callback('chinhpd5')
}
// greeting(sayHello);

// greeting((name)=>{
//     console.log(name);
// });

// fake 1 tác vụ bất đồng bộ
function delay(ms,callback){
    setTimeout(()=>{
        const data= 'Hoàn thành tác bất đồng bộ';
        callback(data)
    },ms)
}


function doingCallback(){
    console.log("Việc 1");// đồng bộ
    delay(1500,(data)=>{
        console.log(data); // bất đồng bộ
        console.log("Việc 2");// đồng bộ

        delay(2000,(data)=>{
            console.log(data); // bất đồng bộ
            delay(2000,(data)=>{
                console.log(data); // bất đồng bộ
                delay(2000,(data)=>{
                    console.log(data); // bất đồng bộ
                    delay(2000,(data)=>{
                        console.log(data); // bất đồng bộ
                        
                    })
                })
            })
        })
        
    })
}

// doingCallback();
// callback hell
    
// promise: Lời hứa: thành công | thất
// khai báo 1 promise
// const myPromise = new Promise((resolve, reject)=>{
//     const isCheck = false;
//     if(isCheck){
//         const data="thành công"
//         resolve(data)
//     }else{
//         reject("Thất bại")
//     }
// })

// Thực thi
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

        setTimeout(()=>{
            const isCheck = true;
            if(isCheck){
                resolve("Hoàn thành tác vụ bất đồng bộ")
            }else{
                reject("Thất lỗi")
            }
        },ms)

    })
}

function doingPromise(){
    console.log("việc 1");
    
    delay(2000)
        .then((data)=>{
            console.log(data);
            console.log("việc 2");
            return delay(1500);// nếu trả về 1 promise-> thực thi trong then tiếp theo
        })
        .then((data)=>{
            console.log(data);
            return delay(3000);// nếu trả về 1 promise-> thực thi trong then tiếp theo
        })
        .then((data)=>{
            console.log(data);
        })
        .catch(err => console.log(err))// nếu có lỗi ở 1 trong những .then -> catch
        .finally()// có thể có hoặc không

    
}

doingPromise();
