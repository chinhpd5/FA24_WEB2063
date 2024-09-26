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

//forEach: duyệt qua toàn bộ các phần tử trong mảng

// Bootstrap IntelliSense
let trElements = '';

list.forEach((item,index)=>{
    // console.log(item); // giá trị các phần tử
    // console.log(index); // vị trị các phần tử
    trElements += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${ item.gender ? "Nam": "Nữ" }</td>
            <td>${item.mark}</td>
        </tr>
    `
})

// console.log(trElements);

const tbodyElement = document.querySelector('tbody');

// tbodyElement.innerHTML = trElements;

// find: duyệt qua mảng và tìm kiếm 1 phần tử gần nhất trong mảng thỏa mãn điều kiện *return
// nếu có ít nhất 1 phần tử -> kết thúc vòng lặp
// nếu không có phần tử nào thỏa mãn -> undefined

const findItem = list.find((item,index)=>{
    // console.log(index);
    
    return item.mark == 9;
})
// tìm kiếm 1 phần tử có giới tính là Nữ gần nhất

// console.log(findItem);

//every: trả về boolean (true | false)
// duyệt qua mảng, nếu tất cả các phần tử trong mảng thỏa mãn ĐK (return) -> true
// Nếu có ít nhất 1 phần tử KHÔNG thỏa mãn ĐK -> flase -> kết thúc vòng lặp

const checkEvery = list.every((item,index)=>{
    // console.log(index);
    return item.mark >= 9;
})

// console.log(checkEvery);


// some: trả về boolean (true|false)
// duyệt qua mảng, nếu có ít nhất 1 phần tử thỏa mãn ĐK (return)-> true -> kết thúc vòng lặp
// nếu tất cả các phần tử KHÔNG thỏa mãn ĐK (return)-> false

const checkSome = list.some((item,index)=>{
    // console.log(index);
    return item.mark < 5; // item.gender == false
})

// console.log(checkSome);


// map: Duyệt qua toàn bộ các phần tử trong mảng
// có thể trả về 1 mảng mới thông qua return;

trElements = list.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${ item.gender ? "Nam": "Nữ" }</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join("");//join: chuyển 1 mảng về 1 chuỗi

// console.log(trElements);
tbodyElement.innerHTML = trElements;

//filter: duyệt qua toàn bộ phần tử trong mảng 
//trả về 1 mảng mới với các phần tử thỏa mãn ĐK return

let filterELement = list.filter((item,index)=>{
    return item.gender;
})
// tìm những người có điểm lớn hơn hoặc bằng 9
// console.log(filterELement);

// reduce
// preValue: giá trị lưu trữ qua các lần lặp
// item: giá trị các phần tử
// index: vị trí

const total = list.reduce((preVlaue,item,index)=>{
    return preVlaue += item.mark
},0)


console.log(total);










