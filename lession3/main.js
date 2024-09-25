//  các phương thức làm việc với mảng
/**
 * forEach
 * find
 * every
 * some
 * map
 * filter
 * reduce
 */

const list =[
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
        age:20,
        gender: false,
        mark: 8
    }

]

// forEach: chỉ duyệt qua tất các phần tử trong mảng
let trElement= ''

list.forEach((item,index)=>{
    // console.log(item);
    // console.log(index);
    trElement += ` 
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${ item.gender == true ? "Nam": "Nữ" }</td>
            <td>${item.age}</td>
            <td>${item.mark}</td>
        </tr>
    `
})

// console.log(trElement);

const tbodyElement = document.querySelector('tbody');
// tbodyElement.innerHTML = trElement;

// find: duyệt qua mảng 
// Tìm kiếm phần tử gần nhất trong mảng thoải mãn điều kiện (return)
// khi thỏa mãn điều kiện -> kết thúc vòng lặp

const findItem = list.find((item,index)=>{
    // console.log(index);
    return item.name == "chinhpd8";
})
//  tìm kiếm phần tử có name = "chinhpd8"

// console.log(findItem);

// every: duyệt qua 1 mảng : boolean (true | false)
// kiểm tra xem toàn bộ phần tử trong mảng có thoải mãn Đk (return) -> true
// có ít nhất 1 phần tử không thoải mãn -> false -> kết thúc vòng lặp

const checkEvery = list.every((item,index)=>{
    // console.log(index);
    return item.mark <= 9;
})
// console.log(checkEvery);

// some: duyệt qua 1 mảng: boolean (true | false)
// Kiểm tra có ít nhất 1 phần tử thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// nếu tất cả các phần tử trong mảng KHÔNG thỏa mãn ĐK -> false

const checkSome = list.some((item,index)=>{
    // console.log(index);
    
    return item.mark < 5
})

// console.log(checkSome);

// map: duyệt qua toàn bộ phần tử trong mảng; 
// trả về 1 mảng mới(return)


let trElements = list.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${ item.gender == true ? "Nam": "Nữ" }</td>
            <td>${item.age}</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join(''); // join: chuyển 1 mảng về 1 chuỗi

// console.log(trElements);
// tbodyElement.innerHTML = trElements;


// filter: duyệt qua toàn bộ phần tử trong mảng
// trả về 1 mảng mới
// các phần tử thỏa mãn điều kiện (return)

trElements = list.filter((item,index)=>{
    return item.mark > 7;
})

console.log(trElements);

const newtrElements = trElements.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${ item.gender == true ? "Nam": "Nữ" }</td>
            <td>${item.age}</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join('');
tbodyElement.innerHTML = newtrElements;





