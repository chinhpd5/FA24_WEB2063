import {getAllProducts,deleteProduct} from './services.js'

const app = {
    // Hiển thị danh sách sản phẩm ra table
    renderProductsList: async function(){
        // 1. call api lấy danh sách sản phẩm
        const data = await getAllProducts();
        // console.log(data);

        // 2. Hiển thị ra ngoài table
        const listProduct =  data?.map((item, index)=>{
            return `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td> <img style="height: 100px" src="${item.image}" alt=""></td>
                    <td>
                        <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                    </td>
                </tr>
            `
        }).join("") //join chuyển 1 mảng về 1 chuổi

        // console.log(listProduct);

        // 3. lấy phần tử tbody
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML= listProduct;

        this.handleDelete();
    },
    // xử lý chức năng xóa
    handleDelete: function(){
        // 1. lấy tất cả các nút xóa
        const btnDeletes = document.querySelectorAll('.btn-delete');
        // console.log(btnDeletes);
        // 2. định nghĩa sự kiện cho nút xóa
        btnDeletes.forEach((item)=>{
            // console.log(item);
            item.addEventListener('click',()=>{
                // console.log("click!!!");
                // 3. Xác Nhận
                if(window.confirm("Bạn có chắc muốn xóa không?")){
                    // console.log(item);
                    // cách 1:
                    // const id = item.dataset.id;

                    // cách 2:
                    const id = item.getAttribute('data-id');
                    // console.log(id);

                    // 4. Xóa trong DB
                    if(id)
                        deleteProduct(id)
                    else
                        alert("Không tìm thấy phần tử")
                    
                }
                
            })
            
        })
        
    },

    start: function(){
        this.renderProductsList();
        // render: Hiển giao diện
        // handle: Xử lý logic        
    }
}

app.start();