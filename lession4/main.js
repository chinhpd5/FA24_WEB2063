// Xử lý Bất đồng bộ trong JS


// JS ngôn ngữ đơn luồng (Đồng bộ)

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// call api, setTimeout, setInterval, click, load,...
// -> JS xử lý bất đồng bộ

// console.log(1); // đồng bộ
// setTimeout(()=>{
//     console.log(2);// bất đồng bộ
    
// },3000) // chờ 3s thực thi ()=>{} 
// console.log(3); // đồng bộ

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

// callback: hàm gọi lại trong function khác, thông qua 1 tham số

function sayHello(name){
    console.log(`Xin chào ${name}`);
}

function greeting(callback){
    callback("chinhpd5")
}

// greeting(sayHello);
// fake 1 tác vụ bất đồng bộ
function delay(ms,callback){
    setTimeout(()=>{
        const data="Xử lý xong tác vụ bất đồng bộ";
        callback(data)
    },ms)
}

function doingCallback(){
    console.log("Việc 1"); // đồng bộ
    delay(1500,(data)=>{
        console.log(data); // bất đồng bộ
        console.log("Việc 2");// đồng bộ

        //==========
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

}

// doingCallback();
// callback hell

// promise: Lời hứa
// khởi tạo lời hứa
// const myPromise = new Promise((reslove, reject)=>{
//     const isCheck = false;
//     if(isCheck){
//         reslove("Thành công")
//     }else{
//         reject("Thất bại")
//     }
// })

// thực thi
// myPromise
//     .then((data)=>{
//         console.log(data);
//     })// thành công: reslove
//     .catch((err)=>{
//         console.log(err);
//     }) // thất bại: reject
//     .finally(()=>{
//         console.log("Hoàn thoành");
//     }) // Kết thúcc

// fake 1 tác vụ bất đồng bộ
function delay(ms){
    //promise
    return new Promise((reslove,reject)=>{

        setTimeout(()=>{
            const isCheck= true;
            if(isCheck){
                reslove("Hoàn thành tác vụ bất đồng bộ");
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
            return delay(2000);//khi return về Promise -> thực thi trong then tiếp theo
        })
        .then(data=>{
            console.log(data);
            console.log("Việc 3");
            return delay(3000)
        })
        .then(data=>{
            console.log(data);
            console.log("Việc 4");
            return delay(1000)// lỗi -> k chạy then (5)-> catch
        })
        .then(data=>{
            console.log(data);
            console.log("Việc 5");
        })
        .catch(err => {
            console.log(err);
        })
        //.finally()
}
doingPromise()
