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

tbodyElement.innerHTML = trElements;
// Bootstrap IntelliSense


//  find: duyệt qua mảng và tìm kiếm 1 phần tử trong mảng
// điều kiện tìm kiếm nằm ở return
// nếu có ít nhất 1 phần tử thoải mãn ĐK -> kết thúc vòng lặp

const findItem = list.find((item,index)=>{
    // console.log(index);
    
    return item.age < 19;
})
// tìm thông tin sv có giới tính là Nữ đầu tiên

console.log(findItem);

