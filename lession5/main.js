import {getAllProducts,deleteProduct,addProduct} from './services.js'

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
    // hiển giao diện thêm mới khi click 'Thêm mới'
    renderAddProduct: function(){
        // 1. Bắt sự kiện click
        const btnAdd = document.getElementById('btn_add');
        btnAdd.addEventListener("click",()=>{
            // console.log("click !!!");
            // 2. Tạo giao diện thêm mới sản phẩm
            // form

            const contentElement = document.getElementById('content');
            contentElement.innerHTML = `
                <h1>Thêm mới sản phẩm</h1>
                <form id="form_add">

                    <div class="mb-3">
                        <label for="name" class="form-label">Tên sản phẩm</label>
                        <input type="text" class="form-control" id="name">
                    </div>
                
                    <div class="mb-3">
                        <label for="quatity" class="form-label">Số lượng</label>
                        <input type="number" class="form-control" id="quatity">
                    </div>

                    <div class="mb-3">
                        <label for="image" class="form-label">Hình ảnh</label>
                        <input type="text" class="form-control" id="image">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            `
            // 3. xử lý logic thêm mới
            this.handleAdd()
        
        })
    },
    handleAdd: function(){
        const form = document.getElementById('form_add');
        form.addEventListener("submit",async (event)=>{
            // ngăn chặn hành vi mặc của element (ngăn chặn tải lại trang)
            event.preventDefault();

            // console.log("submit!!");
            // 4. validate 

            // 4.1 lấy các thẻ input
            const inputName = document.getElementById("name");
            const inputQuantity = document.getElementById("quatity");
            const inputImage = document.getElementById("image");
            // 4.2 kiểm tra dữ liệu và thông báo lỗi //

            // console.log(inputName.value);
            
            if(!inputName.value.trim()){ // trim() loại bỏ khoảng trắng dư thừa
                //nếu không có giá trị name
                inputName.focus(); // focus vào ô input name
                alert("Cần nhập thông tin name");
                return; // nếu lỗi thì ngăn chặn các tác vụ tiếp theo
            }

            if(!inputQuantity.value.trim()){ // trim() loại bỏ khoảng trắng dư thừa
                //nếu không có giá trị số lượng
                inputQuantity.focus(); // focus vào ô input name
                alert("Cần nhập thông tin số lượng");
                return;
            }

            if(!inputImage.value.trim()){ // trim() loại bỏ khoảng trắng dư thừa
                //nếu không có giá trị hình ảnh
                inputImage.focus(); // focus vào ô input name
                alert("Cần nhập thông tin hình ảnh");
                return;
            }

            // 5 thêm mới dữ liệu vào db.json
            // 5.1 lưu trữ vào db
            // Lưu ý khi thêm mới KHÔNG CẦN thêm id vì JSON-SERVER tự động tạo id
            const data ={
                name: inputName.value,
                quantity: Number(inputQuantity.value),
                image: inputImage.value
            }
            
            // console.log(data);
            // 5.2 thêm vào db
            await addProduct(data)
            
        })
    },


    start: function(){
        this.renderProductsList();
        this.renderAddProduct();
        // render: Hiển giao diện
        // handle: Xử lý logic        
    }
}

app.start();