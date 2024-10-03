//api
// get: lấy dữ liệu: array object
// post: thêm mới dữ liệu vào db
// put: cập nhật
// delete: xóa

import {getAllProduct,deleteProduct} from './services.js'
const app = {
    // key : value

    // Hiển thị danh sách sản phẩm
    renderListProduct: async function(){
        // 1. Lấy list sản phẩm từ db.json
        const data = await getAllProduct();

        console.log(data);
        // if(data && data.length){
        // 2. duyệt data để tạo list tr
        const listTr = data?.map((item,index)=>{
            return `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td><img style="height: 70px" src="${item.image}" alt=""></td>
                    <td>
                        <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                    </td>
                </tr>
            `
        }).join('')

        // console.log(listTr);
        // 3. đổ vào thẻ tbody
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = listTr;
        // }
        this.handleDeleteProduct();
    },
    // xử lý logic xóa sản phẩm
    handleDeleteProduct: function(){
        // 1. lấy các nút xóa
        const btnDeletes = document.querySelectorAll('.btn-delete');
        // console.log(btnDeletes);
        btnDeletes.forEach((item)=>{
            // console.log(item);
            // 2. Khai báo sự kiện click
            item.addEventListener("click",()=>{
                if(window.confirm("Bạn có chắn chắn muốn xóa không?")){
                    // cách 1:
                    // const id = item.dataset.id;
                    //  cách 2:
                    // 3. Lấy id trong attribute của button
                    const id = item.getAttribute('data-id')
                    // console.log(id);
                    // 4. Thực hiện xóa
                    deleteProduct(id)
                }
                
            })
            
        })
        
    },

    start: function(){
        // console.log(123);
        //render : Tạo giao diện
        //handle : Xử lý logic
        this.renderListProduct();
    }
}

app.start();