export const getAllProducts= ()=>{
    return fetch(`http://localhost:3000/products`) // bất đồng bộ// mặc định phương thức get
        .then(res=>{
            // console.log(res);
            return res.json(); // bất đồng bộ
        })
        .then((data)=>{
            // console.log(data);
            return data
        })
        .catch((err)=>{
            console.log("Lỗi "+ err);
        })
}

export const deleteProduct = async (id)=>{
    try {
        await fetch(`http://localhost:3000/products/${id}`,{
            method: 'delete'
        })
        // alert('Xóa thành công')
    } catch (error) {
        alert("lỗi xóa")
    }
}