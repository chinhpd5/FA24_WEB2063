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

export const addProduct = async (data)=>{ // data có kiểu là object
    try {
        await fetch(`http://localhost:3000/products`,{
            method: "post",// post: thêm mới
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)// chuyển từ object -> json
        })
        alert("Thêm thành công")
        
    } catch (error) {
        alert("Thêm thất bại")
    }
}
export const getProductById = async(id)=>{
    try {
        const res  = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        alert("Lỗi")
    }
}

export const updateProduct = async(id,data)=>{
    try {
        await fetch(`http://localhost:3000/products/${id}`,{
            method: "put",// put: cập nhật
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)// chuyển từ object -> json
        })
        alert("Cập nhật thành công")
    } catch (error) {
        alert("Thêm thất bại")
    }
}