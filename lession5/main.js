// get: lấy danh sách hoặc bản ghi
// post: thêm mới
// put: cập nhật
// delete: xóa

import {getAllProduct,deleteProduct} from './services.js'

const app = {
    //key-value
    // xây dựng giao diện danh sách sản phẩm
    renderListProduct :async function(){
        // 1. Lấy dữ liệu(ds sản phẩm) từ db.json
        const data =await getAllProduct()

        // console.log(data);
        // 2. duyệt mảng data đổ tr element
        const trList = data?.map((item,index)=>{
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
        }).join("") // join chuyển 1 mảng -> chuỗi
        // console.log(trList);

        // 3. ĐỔ ra giao diện
        const tbody = document.querySelector('tbody')
        tbody.innerHTML = trList
        
        //handle xóa
        this.handleDelete();
    },
    // xử lý logic xóa
    handleDelete: function(){
        // 1. lấy danh sách các nút xóa
        const btnDeletes = document.querySelectorAll('.btn_delete');
        // console.log(btnDeletes);
        // 2. định ngĩa sự kiện cho các nút xóa
        btnDeletes.forEach((item)=>{
            // console.log(item);
            item.addEventListener("click",()=>{
                // console.log("click!!!");
                // 4. xác nhận
                if(window.confirm("Bạn có chắc muốn xóa không")){
                    // 5. lấy id của phần tử cần xóa
                    // cách 1: dataset
                    // const id = item.dataset.id;
                    // cách 2: attribute
                    const id = item.getAttribute("data-id")
                    // console.log(id);
                    // 6. xóa
                    deleteProduct(id)
                    
                }
                
            })
            
        })
        
    },

    start: function(){
        // console.log(123);
        // render : xây dựng giao diện
        // handle : xử lý logic
        this.renderListProduct();
    }
}

app.start();