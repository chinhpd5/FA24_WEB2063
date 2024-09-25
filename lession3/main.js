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

// forEach
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
tbodyElement.innerHTML = trElement;
