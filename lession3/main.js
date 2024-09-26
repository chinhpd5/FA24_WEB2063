// Các Phương thức làm việc với mảng
/**
 * forEach
 * find
 * some
 * every
 * map
 * filter
 * reduce
 */

const list = [
    {
        name: "chinhpd5",
        age:20,
        gender: true,
        mark: 10
    },
    {
        name: "chinhpd6",
        age:21,
        gender: false,
        mark:7
    },
    {
        name: "chinhpd8",
        age:19,
        gender: true,
        mark: 9
    },
    {
        name: "chinhpd9",
        age:18,
        gender: false,
        mark: 8
    }
]

// forEach: duyệt qua toàn bộ các phần tử trong mảng
let trElements=''

list.forEach((item,index)=>{
    // console.log(item); // giá trị các phần tử
    // console.log(index); // vị trí các phần tử
    trElements += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${ item.gender == true ? "Nam": "Nữ" }</td>
            <td>${item.mark}</td>
          </tr>
    `
})

// console.log(trElements);
const tbodyElement = document.querySelector('tbody');

// tbodyElement.innerHTML = trElements;
// Bootstrap IntelliSense


//  find: duyệt qua mảng và tìm kiếm 1 phần tử trong mảng
// điều kiện tìm kiếm nằm ở return
// nếu có ít nhất 1 phần tử thoải mãn ĐK -> kết thúc vòng lặp

const findItem = list.find((item,index)=>{
    // console.log(index);
    
    return item.age < 19;
})
// tìm thông tin sv có giới tính là Nữ đầu tiên

// console.log(findItem);

// every: trả về giá trị boolean (true| false)
// duyệt qua mảng, nếu tất cả các phần tử thỏa mãn ĐK (return) -> true
// nếu có ít nhất 1 phần tử trong mảng KHÔNG thỏa mãn ĐK -> false

const checkEvery = list.every((item,index)=>{
    // console.log(index);
    
    return item.mark > 8;
})

// console.log(checkEvery);

// some: trả về giá trị boolean (true|false)
// duyệt qua mảng, nếu có ít nhất 1 phần tử thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// nếu KHÔNG có phần tử nào thỏa mãn ĐK -> false

const checkSome = list.some((item,index)=>{
    // console.log(index);
    return !item.gender;  // item.gender == false
})
// console.log(checkSome);

// map: duyệt qua toàn bộ phần tử trong mảng
// có thể trả về 1 mảng mới thông qua return

trElements = list.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${ item.gender == true ? "Nam": "Nữ" }</td>
            <td>${item.mark}</td>
          </tr>
    `
}).join("");// join: chuyển 1 mảng về 1 chuỗi


// console.log(trElements);
tbodyElement.innerHTML = trElements

// filter: duyệt qua toàn bộ phần tử trong mảng
// trả về mảng mới thỏa mãn điều kiện (return);

// let filterList = list.filter((item,index)=>{
//     return item.mark >= 8; //  item.gender == true
// })

// filterList.map((item,index)=>{
//     return `
//         <tr>
//             <th scope="row">${index + 1}</th>
//             <td>${item.name}</td>
//             <td>${item.age}</td>
//             <td>${ item.gender == true ? "Nam": "Nữ" }</td>
//             <td>${item.mark}</td>
//           </tr>
//     `
// }).join("");

// // console.log(filterList);
// tbodyElement.innerHTML = filterList

// reduce: duyệt qua toàn bộ phần tử trong và tính toán
//prevValue: giá trị lưu trữ qua các lần lặp
// item: giá trị của từng phần tử trong mảng
// index: vị trí của từng phần tử

const total = list.reduce((prevValue, item,index)=>{
    return prevValue += item.mark;
},0)

console.log(total);






