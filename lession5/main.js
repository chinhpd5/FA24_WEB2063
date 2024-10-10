//api
// get: lấy dữ liệu: array object
// post: thêm mới dữ liệu vào db
// put: cập nhật
// delete: xóa

import {getAllProduct,deleteProduct,addProduct} from './services.js'
const app = {
    // key : value

    // Hiển thị danh sách sản phẩm
    renderListProduct: async function(){
        // 1. Lấy list sản phẩm từ db.json
        const data = await getAllProduct();

        // console.log(data);
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
    // hiển thị giao diện thêm mới sản phẩm
    renderAddProduct: function(){
        // 1. tạo sự kiện cho nút thêm mới
        const btnAdd = document.getElementById("btn_add");
        btnAdd.addEventListener("click",()=>{
            // console.log("click!!");
            // 2. Hiển thị giao diện thêm mới (form)
            document.getElementById('content').innerHTML=`
                <h1>Thêm mới sản phẩm</h1>
                <form id="form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Tên sản phẩm</label>
                        <input type="text" class="form-control" id="name">
                    </div>

                    <div class="mb-3">
                        <label for="quantity" class="form-label">Số lượng sản phẩm</label>
                        <input type="number" class="form-control" id="quantity">
                    </div>

                    <div class="mb-3">
                        <label for="image" class="form-label">Hình ảnh</label>
                        <input type="text" class="form-control" id="image">
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            
            `
            this.handleAddProduct();
        })
    },
    handleAddProduct: function(){
        // 1. định nghĩa sự kiện submit của form
        const form = document.getElementById("form");
        form.addEventListener("submit",async (event)=>{
            // ngăn chặn hành mặc định của form(tải lại trang)
            event.preventDefault();
            // console.log("submit!!!");
            // 2. Lấy các thẻ input

            const inputName = document.getElementById("name")
            const inputQuantity = document.getElementById("quantity")
            const inputImage = document.getElementById("image")
            // console.log();

            // 3. validate
            if(!inputName.value.trim()){
                alert("Cần nhập thông tin tên sản phẩm");
                inputName.focus(); // focus vào ô input bị lỗi
                return; // ngăn chặn các tác vụ tiếp theo được thực thi
            }

            if(!inputQuantity.value.trim()){
                alert("Cần nhập thông tin số lượng sản phẩm");
                inputQuantity.focus(); // focus vào ô input bị lỗi
                return;
            }

            if(!inputImage.value.trim()){
                alert("Cần nhập thông tin hình ảnh sản phẩm");
                inputImage.focus(); // focus vào ô input bị lỗi
                return; // ngăn chặn các tác vụ tiếp theo được thực thi
            }

            //4. lấy giá trị trong ô input
            var data ={
                name: inputName.value,
                quantity: Number(inputQuantity.value),
                image: inputImage.value,
            }
            // Không cần phải tạo input cho id vì json-server TỰ tạo 1 id cho phần tử khi thêm mới
            // console.log(data);

            // 5. Thêm mới vào db
            await addProduct(data);
            alert("Thêm thành công")

        })
    },
    start: function(){
        // console.log(123);
        //render : Tạo giao diện
        //handle : Xử lý logic
        this.renderListProduct();
        this.renderAddProduct();
    }
}

app.start();