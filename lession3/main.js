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

const bodyElement = document.querySelector('tbody');
bodyElement.innerHTML = trElements;

// find : duyệt qua mảng và tìm phần tử gần nhất thỏa mãn ĐK (return)
// nếu tìm thấy ít nhất 1 phần tử thì kết thúc vòng lặp
// nếu không có phần tử nào thỏa mãn -> undefined

const findItem = list.find((item,index)=>{
    console.log(index);
    return item.mark == 9;
})

console.log(findItem);


