

const app  ={
    // check toàn khoản và mật khẩu
    handleSubmit: function(){
        // 0. bắt sự kiện submit form
        const form = document.getElementById('form')
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            // 1. lấy input
            const inputUsername = document.getElementById('username')
            const inputPassword = document.getElementById('password')
            // 2. validate
            if(!inputUsername.value.trim()){
                alert("Cần nhập thông tin username");
                inputUsername.focus();
                return
            }

            if(!inputPassword.value.trim()){
                alert("Cần nhập thông tin password");
                inputPassword.focus();
                return
            }

            if(inputPassword.value.trim().length < 6){
                alert("Password cần tối thiểu 6 kí tự");
                inputPassword.focus();
                return
            }

            // 3. check username và password
            // hard code

            if(inputUsername.value =="chinhpd5" && inputPassword.value == '123456'){
                alert("Đăng nhập thành công")
                // lưu trữ username vào localstorage
                localStorage.setItem("user",inputUsername.value)
                // chuyển về trang danh sách
                window.location = 'index.html'
            }else{
                alert("Sai tài khoản hoặc mật khẩu")
            }
        })
    },
    start:function(){
        this.handleSubmit();
    }
}

app.start();