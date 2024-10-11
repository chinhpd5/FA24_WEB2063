// modue

export const getAllProduct =async ()=>{
    try {
        const res = await fetch(`http://localhost:3000/products`)// mặc định ,{method:'get'}
        // console.log(res);
        const data = await res.json();
        return data
    } catch (error) {
        alert("Lỗi")
    }
}

export const deleteProduct = async(id)=>{
    try {
        
        await fetch(`http://localhost:3000/products/${id}`,{
            method: 'delete' // phương thức xóa
        })

        alert("Xóa thành công")
    } catch (error) {
        alert("Xóa thất bại")
    }
}

export const addProduct = async (data)=>{
    try {
        await fetch('http://localhost:3000/products',{
            method: "post", // phương thức thêm mới
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // chuyển dữ liệu từ object -> JSON
        })
    } catch (error) {
        alert("Thêm thất bại");
    }
}

export const getProductById = async(id)=>{
    try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();

        return data
    } catch (error) {
        alert("Lỗi")
    }
}

export const updateProduct = async(id,data)=>{
    try {
        await fetch(`http://localhost:3000/products/${id}`,{
            method: "put", // phương thức Cập nhật
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // chuyển dữ liệu từ object -> JSON
        })
    } catch (error) {
        alert("Cập nhật thất bại");
    }
}