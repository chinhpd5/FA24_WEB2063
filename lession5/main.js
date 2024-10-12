
import { getAllProduct,deleteProduct,addProduct,getProductById,updateProduct} from "./services.js";

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
                        <button data-id="${item.id}" class="btn_edit btn btn-warning">Sửa</button>
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
        // xử lý cập nhật sản phẩm
        this.handleEditProduct();
        
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
    renderAddProduct: function(){
        // địng nghĩa sự kiện click nút add
        const btnAdd = document.getElementById('btn_add');
        btnAdd.addEventListener('click',()=>{
            // console.log("add!!!");
            const content = document.getElementById('content');
            // thay thế nội dung thêm mới (form)
            content.innerHTML= `
                <h1> Thêm mới sản phẩm</h1>
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
                // ngăn chặn hành vi mặc định (tải trang)
                event.preventDefault();
                // xử lý logic thêm mới sản phẩm
                this.handleAddProduct();
                
            })
        })
    },
    handleAddProduct: async function(){
        //lấy ra toàn bộ thẻ input
        const inputName = document.getElementById('name')
        const inputQuantity = document.getElementById('quantity')
        const inputImage = document.getElementById('image')

        // validate

        if(!inputName.value.trim()){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus(); // focus vào ô input đang bị lỗi
            return; // ngăn chặn thực thi các tác vụ tiếp theo
        }

        if(!inputQuantity.value.trim()){
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus(); // focus vào ô input đang bị lỗi
            return;
        }

        if(!inputImage.value.trim()){
            alert("Cần nhập thông tin hình ảnh sản phẩm");
            inputImage.focus(); // focus vào ô input đang bị lỗi
            return;
        }

        // lấy dữ liệu
        const data = { // KHÔNG cần thêm id vì json-server sẽ tự động tạo id khi thêm mới
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }

        console.log(data);
        // thêm data vào db.json
        await addProduct(data);
        alert("Thêm thành công")

    },
    handleEditProduct: function(){
        // lấy toàn bộ nút bấm
        const btnEdits = document.querySelectorAll('.btn_edit');
        btnEdits.forEach((item)=>{
            item.addEventListener('click',async ()=>{
                // console.log(item);
                // lấy id 
                const id = item.dataset.id;
                // console.log(id);
                // lấy thông tin sản phẩm theo id
                const product = await getProductById(id);
                // console.log(product);

                // thay thể table -> form (cập nhật)
                const content = document.getElementById('content');
                // thay thế nội dung thêm mới (form)
                content.innerHTML= `
                    <h1> Cập nhật sản phẩm</h1>
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
                    // ngăn chặn hành vi mặc định (tải trang)
                    event.preventDefault();
                    // xử lý logic cập nhật sản phẩm
                    this.handleUpdateProduct(id);
                    
                })
                
            })
        })
    },
    handleUpdateProduct:async function(id){
        //lấy ra toàn bộ thẻ input
        const inputName = document.getElementById('name')
        const inputQuantity = document.getElementById('quantity')
        const inputImage = document.getElementById('image')

        // validate

        if(!inputName.value.trim()){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus(); // focus vào ô input đang bị lỗi
            return; // ngăn chặn thực thi các tác vụ tiếp theo
        }

        if(!inputQuantity.value.trim()){
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus(); // focus vào ô input đang bị lỗi
            return;
        }

        if(!inputImage.value.trim()){
            alert("Cần nhập thông tin hình ảnh sản phẩm");
            inputImage.focus(); // focus vào ô input đang bị lỗi
            return;
        }

        // lấy dữ liệu
        const data = { // KHÔNG cần thêm id vì json-server sẽ tự động tạo id khi thêm mới
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }

        console.log(data);
        // cập nhật data vào db.json
        await updateProduct(id,data)
        alert("cập nhật thành công")
    },
    start: function(){
        // console.log(123);
        // render : Hiển thị ra giao diện
        // handle : Xử lý logic cho chức năng
        this.renderProductList();
        this.renderAddProduct();
    }
}

app.start();