export const getAllProduct = async()=>{
    try {
        const res = await fetch(`http://localhost:3000/products`)// mặc định method: get
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        return data
    } catch (error) {
        alert("lỗi")
    }
}
export const deleteProduct = async(id)=>{
    try {
        await fetch(`http://localhost:3000/products/${id}`,{
            method: "delete"
        })
        alert("Xóa thành công")
        
    } catch (error) {
        alert("Lỗi")
    }
}

export const addProduct = async (data)=>{
    try {
        await fetch(`http://localhost:3000/products`,{
            method: "post",
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
    } catch (error) {
        alert("Thêm thất bại")
    }
}