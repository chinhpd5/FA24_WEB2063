// get: lấy danh sách hoặc bản ghi
// post: thêm mới
// put: cập nhật
// delete: xóa

import {getAllProduct,deleteProduct,addProduct} from './services.js'

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
    // hiển thị giao diện thêm mới (form)
    renderAddProduct: function(){
        // định nghĩa sự kiện click cho nút thêm mới
        const btnAdd = document.getElementById('btn_add');
        btnAdd.addEventListener("click",()=>{
            // thay thế nội dung bằng form
            const content = document.getElementById('content');
            content.innerHTML = `
                <h1>Thêm mới sản phẩm </h1>
                <form id="form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Tên sản phẩm</label>
                        <input type="text" class="form-control" id="name" >
                    </div>

                    <div class="mb-3">
                        <label for="quantity" class="form-label">Số lượng sản phẩm</label>
                        <input type="number" class="form-control" id="quantity" >
                    </div>

                     <div class="mb-3">
                        <label for="image" class="form-label">Hình ảnh</label>
                        <input type="text" class="form-control" id="image" >
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            `
            const form = document.getElementById('form');
            
            form.addEventListener("submit",(event)=>{
                //ngăn chặn hành vi tải trang mặc định của form
                event.preventDefault();
                // console.log("submit!!");
                // xử lý logic thêm mới
                this.handleAddProduct()
            })
            
        })
    },
    handleAddProduct:async function(){
        // lấy các thẻ input
        const inputName = document.getElementById('name')
        const inputQuntity = document.getElementById('quantity')
        const inputImage = document.getElementById('image')

        // validate (0.5)

        if(!inputName.value.trim()){
            alert("Cần nhập thông tin tên sản phẩm")
            inputName.focus();// focus vào ô input đang bị lỗi
            return; // ngăn chặn thực thi các tác vụ tiếp theo
        }

        if(!inputQuntity.value.trim()){
            alert("Cần nhập thông tin số lượng sản phẩm")
            inputQuntity.focus();// focus vào ô input đang bị lỗi
            return;
        }

        if(!inputImage.value.trim()){
            alert("Cần nhập thông tin hình ảnh")
            inputImage.focus();// focus vào ô input đang bị lỗi
            return;
        }

        // lấy dữ liệu

        const data = { // không cần thêm mới id vì json-server sẽ tự tạo id khi thêm mới
            name: inputName.value,
            quantity: Number(inputQuntity.value),
            image: inputImage.value
        }
        // console.log(data);
        
        //lưu dữ liệu vào db.json
        await addProduct(data);
        alert("Thêm thành công")
    },

    start: function(){
        // console.log(123);
        // render : xây dựng giao diện
        // handle : xử lý logic
        this.renderListProduct();
        this.renderAddProduct();
    }
}

app.start();