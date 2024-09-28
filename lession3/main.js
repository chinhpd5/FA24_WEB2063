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

// forEach: duyệt qua toàn bộ các phần tử trong mảng

let trElements =''
list.forEach((item,index)=>{
    // console.log(item); // giá trị của các phần tử
    // console.log(index);// vị trí của các phần tử
    trElements += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam":"Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
})
// console.log(trElements);
const tbodyElement = document.querySelector('tbody')
tbodyElement.innerHTML = trElements

//find: duyệt qua mảng, tìm kiếm 1 phần tử gần nhất thỏa mãn ĐK(return);
// nếu có ít nhất 1 phần tử -> kết thúc vòng lặp
// Nếu KHÔNG có phần tử nào thỏa mãn ĐK  -> undefined

const findItem = list.find((item,index)=>{
    // console.log(index);
    return item.mark == 9;
}) 

// console.log(findItem);


// every: duyệt qua mảng: trả về giá trị boolean(true|false)
// kiểm tra toàn bộ phần tử trong mảng thỏa mãn ĐK (return) -> true
// nếu có ít nhất 1 phần tử không thỏa mãn ĐK -> false -> kết thúc vòng lặp

const checkEvery = list.every((item,index)=>{
    // console.log(index);
    return item.mark > 9;
})

// console.log(checkEvery);

// some: duyệt qua mảng: trả về giá trị boolean(true|false)
// Kiểm tra trong mảng xem có ít nhất 1 phần thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// Nếu tất các phần tử trong mảng KHÔNG thỏa mãn ĐK -> false

const checkSome = list.some((item,index)=>{
    console.log(index);
    return item.mark < 5
})
// Kiểm tra trong mảng có sinh viên là nữ hay không?

console.log(checkSome);




