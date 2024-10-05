//get: lấy danh sách hoặc bản ghi
//post: thêm mới
//put: cập nhật
//delete: xóa

import {getAllProduct,deleteProduct} from './services.js'
const app ={
    // key:value
    // hiển thị danh sách sản phẩm
    renderProductList:async function(){
        // 1. Call api lấy dữ liệu từ db.json
        try {
            const data = await getAllProduct();
            console.log(data);

            // 2. Lặp qua mảng
            const trList = data?.map((item,index)=>{
                // console.log(item);
                return `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td><img style="height:70px" src="${item.image}" alt=""></td>
                        <td>
                            <button data-id="${item.id}" class="btn_delete btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                `
            }).join("")

            // console.log(trList);
            // 3. Lấy tbody
            const tbodyElement = document.querySelector("tbody");
            tbodyElement.innerHTML = trList
        } catch (error) {
            alert("lỗi")
        }
        this.handleDelete();
    },
    handleDelete: function(){
        // 1. Tạo button xóa

        // 2. lấy danh sách các nút xóa
        const btnDeletes = document.querySelectorAll('.btn_delete');
        //3. duyệt qua mảng và khai báo sự kiện click nút xóa
        btnDeletes.forEach((item)=>{
            item.addEventListener('click', ()=>{
                // console.log(item);
                // console.log("click!!!");
                // 4. lấy id
                // cách 1: 
                // const id = item.dataset.id;
                // cách 2:
                const id = item.getAttribute("data-id")
                // console.log(id);
                // 5.xóa và confirm
                if(window.confirm("Bạn có chắc chắn muốn xóa phần tử này không?")){
                    // xóa
                    deleteProduct(id);
                }
            })
            
        })

    },
    start: function(){
        // console.log(123);
        // render: tạo giao diện
        // handle: xử lý logic
        this.renderProductList();
    }
}

app.start();