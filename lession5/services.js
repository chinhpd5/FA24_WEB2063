// module

export const getAllProduct = async()=>{
    try {
        const res = await fetch(`http://localhost:3000/products`)// mặc định method: get
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
            method: "delete"
        })
        // alert("Xóa thành công");
        
    } catch (error) {
        alert("Lỗi")
    }
}

export const addProduct = async(data)=>{
    try {
        await fetch(`http://localhost:3000/products`,{
            method: "post", // post: thêm mới vào db
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data) //JSON.stringify: chuyển 1 object về JSON
        })
    } catch (error) {
        alert("Thêm thất bại")
    }
}

export const getProductById = async(id)=>{
    try {
        const res = await fetch(`http://localhost:3000/products/${id}`)// mặc định method: get
        // console.log(res);
        const data = await res.json();
        return data
    } catch (error) {
        alert("Lỗi")
    }
}


export const updateProduct = async(id,data)=>{
    try {
        await fetch(`http://localhost:3000/products/${id}`,{
            method: "put", // post: cập nhật vào db
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data) //JSON.stringify: chuyển 1 object về JSON
        })
    } catch (error) {
        alert("cập nhật thành công thất bại")
    }
}