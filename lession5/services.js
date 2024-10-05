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
            method: 'delete'
        })

        alert("Xóa thành công")
    } catch (error) {
        alert("Xóa thất bại")
    }
}