//get: lấy danh sách hoặc bản ghi
//post: thêm mới
//put: cập nhật
//delete: xóa

import {getAllProduct,deleteProduct,addProduct,getProductById,editProduct} from './services.js'
const app ={
    // key:value
    // hiển thị danh sách sản phẩm
    renderProductList:async function(){
        // 1. Call api lấy dữ liệu từ db.json
        try {
            const data = await getAllProduct();
            // console.log(data);

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
                            <button data-id="${item.id}" class="btn_edit btn btn-warning">Sửa</button>
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
        // hiển thị form cập nhật
        this.handleEditProduct();
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
    // hiển thị giao diện thêm mới 
    renderAddProduct: function(){
        const btnAdd = document.getElementById('btn_add');
        btnAdd.addEventListener('click',()=>{
            // console.log("Add!!!");
            // thay thế nội dung (table -> form)
            const content = document.getElementById('content');
            content.innerHTML = `
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

            const form = document.getElementById('form');
            form.addEventListener('submit',(event)=>{
                // ngăn chặn hành vi mặc định của form (tải trang)
                event.preventDefault();
                // console.log("submit!!");
                this.handleAddProduct();
            })
            
        })
    },
    handleAddProduct:async function(){
        // lấy các thẻ input
        const inputName = document.getElementById('name')
        const inputQuantity = document.getElementById('quantity')
        const inputImage = document.getElementById('image')

        // kiểm tra
        if(!inputName.value.trim()){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus();// focus vào ô input đang bị lỗi
            return; // nagwn chặn các tác vụ tiếp theo được thực thi
        }

        if(!inputQuantity.value.trim()){
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus();// focus vào ô input đang bị lỗi
            return;
        }

        if(!inputImage.value.trim()){
            alert("Cần nhập thông tin hình ảnh sản phẩm");
            inputImage.focus();// focus vào ô input đang bị lỗi
            return;
        }

        // lấy data
        const data = {// KHÔNG cần tạo id vì json-server sẽ tự động tạo id khi thêm mới
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }

        console.log(data);
        // thêm mới data vào db
        await addProduct(data);
        alert("Thêm thành công")
    },
    handleEditProduct: function(){
        const btnEdits = document.querySelectorAll('.btn_edit');
        btnEdits.forEach((item)=>{

            item.addEventListener('click',async ()=>{
                // console.log(item);
                const id = item.dataset.id;
                console.log(id);

                // lấy thông tin sản phẩm theo id
                const product = await getProductById(id);
                // console.log(product);

                const content = document.getElementById('content');
                content.innerHTML = `
                    <h1>Cập nhật sản phẩm</h1>
                    <form id="form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Tên sản phẩm</label>
                            <input type="text" class="form-control" id="name" value="${product.name}">
                        </div>

                        <div class="mb-3">
                            <label for="quantity" class="form-label">Số lượng sản phẩm</label>
                            <input type="number" class="form-control" id="quantity" value="${product.quantity}">
                        </div>

                        <div class="mb-3">
                            <label for="image" class="form-label">Hình ảnh</label>
                            <input type="text" class="form-control" id="image" value="${product.image}">
                        </div>
                    
                    
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                `
                const form = document.getElementById('form');
                form.addEventListener('submit',(event)=>{
                    // ngăn chặn hành vi mặc định của form (tải trang)
                    event.preventDefault();
                    // console.log("submit!!");
                    this.handleUpdateProduct(id);
                })

            })
        })
            
    },

    handleUpdateProduct: async function(id){
        // lấy các thẻ input
        const inputName = document.getElementById('name')
        const inputQuantity = document.getElementById('quantity')
        const inputImage = document.getElementById('image')

        // kiểm tra
        if(!inputName.value.trim()){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus();// focus vào ô input đang bị lỗi
            return; // nagwn chặn các tác vụ tiếp theo được thực thi
        }

        if(!inputQuantity.value.trim()){
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus();// focus vào ô input đang bị lỗi
            return;
        }

        if(!inputImage.value.trim()){
            alert("Cần nhập thông tin hình ảnh sản phẩm");
            inputImage.focus();// focus vào ô input đang bị lỗi
            return;
        }

        // lấy data
        const data = {// KHÔNG cần tạo id vì json-server sẽ tự động tạo id khi thêm mới
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }

        console.log(data);
        //cập nhật data vào db
        await editProduct(id,data)
        alert("cập nhật thành công")
        
    },
    start: function(){
        // console.log(123);
        // render: tạo giao diện
        // handle: xử lý logic
        this.renderProductList();
        this.renderAddProduct();
    }
}

app.start();