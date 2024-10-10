import {getAllProducts,deleteProduct,addProduct,getProductById,updateProduct} from './services.js'

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
                        <button data-id="${item.id}" class="btn-edit btn btn-warning">Sửa</button>
                    </td>
                </tr>
            `
        }).join("") //join chuyển 1 mảng về 1 chuổi

        // console.log(listProduct);

        // 3. lấy phần tử tbody
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML= listProduct;

        this.handleDelete();
        this.handleEdit();
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
    // hiển thị giao diện thêm mới sản phẩm
    renderAddProduct: function(){
        const btnAdd = document.getElementById('btn_add');
        btnAdd.addEventListener("click",()=>{
            // console.log("add");
            // hiển thị giao điện thêm mới (form)
            document.getElementById('content').innerHTML =`
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
            form.addEventListener('submit',(event)=>{
                // ngăn chặn hành vi mặc định (tải trang ) của form
                event.preventDefault();
                // console.log("submit!!!");
                // thêm mới
                this.handleAddProduct();
            })
            
        })
    },
    // xử lý logic khi thêm mới
    handleAddProduct: async function(){
        // 1. lấy các thẻ input
        const inputName = document.getElementById('name')
        const inputQuantity = document.getElementById('quantity')
        const inputImage = document.getElementById('image')

        // 2. validate

        // console.log(inputName.value);
        
        if(!inputName.value.trim()){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus();// focus vào ô input đang bị lỗi
            return; // ngăn chặn các tác vụ tiếp theo được thực thi
        }

        if(!inputQuantity.value.trim()){
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus();// focus vào ô input đang bị lỗi
            return;
        }

        if(!inputImage.value.trim()){
            alert("Cần nhập thông tin hình ảnh");
            inputImage.focus();// focus vào ô input đang bị lỗi
            return;
        }

        // 3. lấy data
        const data = {
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }

        // console.log(data);

        // 4. thêm vào db
        await addProduct(data);
        alert("Thêm thành công");
    },
    handleEdit: function(){
        const btnEdits = document.querySelectorAll('.btn-edit');
        btnEdits.forEach(item=>{
            // định nghĩa sự kiện cho từng nút sửa
            item.addEventListener('click',async()=>{
                // lấy id của từng phần tử
                const id = item.dataset.id;
                // console.log(id);

                // lấy thông tin sản phẩm theo id
                const product = await getProductById(id)
                // console.log(product);
                
                // tạo giao diện chỉnh sửa
                document.getElementById('content').innerHTML =`
                    <h1>Cập nhật sản phẩm </h1>
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
                            <input type="text" class="form-control" id="image" value="${product.image}" >
                        </div>
                    
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                `

                const form = document.getElementById('form');
                form.addEventListener('submit',(event)=>{
                    // ngăn chặn hành vi mặc định (tải trang ) của form
                    event.preventDefault();
                    // console.log("submit!!!");
                    // cập nhập vào db
                    this.handleUpdate(id);
                })

            })
        })
    },
    // cập nhật dữ liệu vào db sau khi người dùng edit và submit
    handleUpdate:async function(id){
        // 1. lấy các thẻ input
        const inputName = document.getElementById('name')
        const inputQuantity = document.getElementById('quantity')
        const inputImage = document.getElementById('image')

        // 2. validate

        // console.log(inputName.value);
        
        if(!inputName.value.trim()){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus();// focus vào ô input đang bị lỗi
            return; // ngăn chặn các tác vụ tiếp theo được thực thi
        }

        if(!inputQuantity.value.trim()){
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus();// focus vào ô input đang bị lỗi
            return;
        }

        if(!inputImage.value.trim()){
            alert("Cần nhập thông tin hình ảnh");
            inputImage.focus();// focus vào ô input đang bị lỗi
            return;
        }

        // 3. lấy data
        const data = {
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }

        // console.log(data);
        // 4. cập nhật
        await updateProduct(id,data)
        alert("Cập nhật thành công");
    },

    start: function(){
        this.renderProductsList();
        this.renderAddProduct();
        // render: Hiển giao diện
        // handle: Xử lý logic        
    }
}

app.start();