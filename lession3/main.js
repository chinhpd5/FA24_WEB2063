// Các phương thức làm việc với mảng

/**
 * forEach
 * find
 * every
 * some
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
        age:20,
        gender: false,
        mark: 9
    }
]

//forEach : duyệt qua toàn bộ các phần tử trong mảng
let trElements = '';
list.forEach((item,index)=>{
    // console.log(item); // giá trị phần tử trong mảng
    // console.log(index); // vị trí phần tử trong mảng
    trElements += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
})
// console.log(trElements);

const tbodyElement = document.querySelector('tbody');
// tbodyElement.innerHTML = trElements;

// find : duyệt qua mảng và tìm phần tử gần nhất thỏa mãn ĐK (return)
// nếu tìm thấy ít nhất 1 phần tử thì kết thúc vòng lặp
// nếu không có phần tử nào thỏa mãn -> undefined

const findItem = list.find((item,index)=>{
    // console.log(index);
    return item.mark == 9;
})

// console.log(findItem);

// every: duyệt qua 1 mảng và trả về boolean (true | false)
// kiểm tra tất cả phần tử trong mảng có thỏa mãn ĐK (return) -> true
// nếu có ít nhất 1 phần tử KHÔNG thỏa mãn ĐK -> false -> kết thúc vòng lặp

const checkEvery = list.every((item,index)=>{
    // console.log(index);
    return item.gender; //item.gender == true
})

// console.log(checkEvery);

// some: duyệt qua 1 mảng và trả về boolean (true | false)
// Kiểm tra mảng xem có ít nhất 1 phần tử thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// nếu tất cả các phần tử trong mảng KHÔNG thỏa mãn ĐK -> false

const checkSome = list.some((item,index)=>{
    // console.log(index);
    return !item.gender; // item.gender == false
})
// console.log(checkSome);

// map: duyệt qua toàn bộ phần tử trong mảng
// trả về 1 mảng mới nếu có return

const newList = list.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join("");// join chuyển 1 mảng về 1 chuỗi

console.log(newList);

tbodyElement.innerHTML = newList;






