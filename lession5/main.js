
import { getAllProduct,deleteProduct } from "./services.js";

const app = {
    // key : value
    // hiển thị giao diện tbale
    renderProductList :async function(){
        // 1. call api lấy danh sách sản phẩm
        const data = await getAllProduct()

        // console.log(data);
        
        // 2. duyệt mảng data
        const trList = data?.map((item,index)=>{
            return `
                <tr>
                    <th scope="row">${index +1 }</th>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td><img style="height:70px" src="${item.image}" alt=""></td>
                    <td>
                        <button data-id="${item.id}" class="btn_delete btn btn-danger">Xóa</button>
                    </td>
                </tr>
            `
        }).join("")// trả về 1 chuỗi
        // console.log(trList);
        
        //3. đổ trList ra tbody

        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = trList

        // Logic xóa sản phẩm
        this.handleDelete();
        
    },
    handleDelete: function(){
        //1.Tạo giao diện
        // 2. lấy toàn bộ nút xóa
        const btnDeletes = document.querySelectorAll('.btn_delete');
        // console.log(btnDeletes);
        // 3. định nghĩa sự kiện cho từng nút xóa
        btnDeletes.forEach((item)=>{
            item.addEventListener('click',()=>{
                // console.log(item);
                // 4. lấy id của phần tử cần xóa
                // cách 1:
                // const id = item.dataset.id;
                //cách 2:
                const id = item.getAttribute("data-id")
                // console.log(id);
                // 5. Xóa
                if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
                    deleteProduct(id)
                }
                
            })
        })
        
    },

    start: function(){
        // console.log(123);
        // render : Hiển thị ra giao diện
        // handle : Xử lý logic cho chức năng
        this.renderProductList();
    }
}

app.start();