

const app ={
    // xử lý chức năng đăng nhập
    handleLogin: function(){
        document.getElementById("form").addEventListener('submit',(e)=>{
            e.preventDefault();
            // lấy input
            const inputUsername = document.getElementById('username');
            const inputPassword = document.getElementById('pasword')
            // validate

            if(!inputUsername.value.trim()){
                alert("Cần nhập username");
                inputUsername.focus();
                return;
            }
            if(!inputPassword.value.trim()){
                alert("Cần nhập password");
                inputPassword.focus();
                return;
            }

            if(inputPassword.value.trim().length < 6){
                alert("Cần nhập password tối thiểu 6 ký tự");
                inputPassword.focus();
                return;
            }

            // kiểm tra username và password
            // hardcode
            if(inputUsername.value == 'chinhpd5' && inputPassword.value == "123456"){
                alert("Đăng nhập thành công");
                // lưu trữ vào local storage
                localStorage.setItem("user",inputUsername.value)
                // chuyển về trang danh sách
                window.location = 'index.html'
            }else{
                alert("Sai tài khoản hoặc mật khẩu")
            }
        })
    },
    start: function(){
        this.handleLogin();
    }
}

app.start();