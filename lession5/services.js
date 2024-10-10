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

export const addProduct = async (data)=>{
    try {
        await fetch(`http://localhost:3000/products`,{
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // chuyển object -> JSON
        })
    } catch (error) {
        alert("Thêm thất bại");
    }
}