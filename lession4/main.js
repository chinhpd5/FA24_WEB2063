// Cách xử lý bất đồng bộ trong JS


// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

//ví dụ 2
// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// },3000) // chờ 3s rồi thực thi ()=>{}

// console.log(3);

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

// callback: hàm gọi lại trong 1 hàm khác thông qua 1 tham số

function sayHello(name){
    console.log(`Xin Chào ${name}`);
}

function greeting(callback){ // number string boolean array object function
    callback("chinhpd5")
}

// greeting(sayHello);

// fake 1 tác vụ bất đồng bộ
function delay(callback,ms){
    setTimeout(()=>{
        const data = "Bất đồng bộ: Việc 2"
        callback(data);
    },ms)// chờ đợi ms s trả về data thông qua callback
}

function doingCallback (){
    console.log("Việc 1");
    delay((res)=>{
        console.log(res); // "Bất đồng bộ: Việc 2"
        console.log("Việc 3");

        console.log("Việc 4");
        delay((res)=>{
            console.log(res); // "Bất đồng bộ: Việc 2"
            console.log("Việc 6");

            console.log("Việc 4");
            delay((res)=>{
                console.log(res); // "Bất đồng bộ: Việc 2"
                console.log("Việc 6");
    
            },1000)

        },1000)
        
    },1500)// 1.5 s
}

// doingCallback()

// callback hell -> sử dụng promise để giải quyết

// Promise


// khai báo
const myPromise = new Promise((reslove,reject)=>{ // bất đồng bộ
    const isCheck = true;
    if(isCheck){
        // thành công
        reslove("Thành công")
    }else{
        // thất bại
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
//         console.log("Kết thúc");
//     })

function delay(ms){
    return new Promise((reslove,reject)=>{
        const isCheck = true;
        setTimeout(()=>{
            if(isCheck){
                reslove("Việc bất đồng bộ")
            }else{
                reject("Thất bại")
            }
        },ms)
    })
}

function doingPromise(){
    console.log("Việc 1");
    delay(1500)
        .then((res)=>{
            console.log(res);
            console.log("việc 3");
            return delay(2000); // trả về 1 tác vụ bất đồng bộ khác
        })
        .then((data)=>{ // kết quẩ nhận lại trong .then tiếp theo
            console.log(data);
            console.log("Việc 4");
        })
        .catch((err)=>{
            console.log(err);
        })
}

// doingPromise();

// async / await

async function doingAsync(){
    try {
        console.log("việc 1");

        const data = await delay(1500);// bất đồng bộ
        console.log(data);

        console.log('Việc 3');

        console.log("việc 4");

        const data1 = await delay(1500);// bất đồng bộ
        console.log(data1);

        console.log('Việc 5');
    } catch (error) {
        console.log("lỗi "+ error);
    }
}

doingAsync();
