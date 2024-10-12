

const app ={
    handleLogin: function(){
        const form = document.getElementById('form');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            // lấy input
            const inputUserName = document.getElementById("username")
            const inputPassword = document.getElementById("password")

            if(!inputUserName.value.trim()){
                alert("Cần nhập thông tin username");
                inputUserName.focus();
                return
            }

            if(!inputPassword.value.trim()){
                alert("Cần nhập thông tin password");
                inputPassword.focus();
                return
            }

            if(inputPassword.value.trim().length < 6 ){
                alert("Cần nhập thông tin password lớn hơn hoặc bằng 6 kí tự");
                inputPassword.focus();
                return
            }

            // kiểm tra usename và password
            // hard code

            if(inputUserName.value.trim() == 'chinhpd5' && inputPassword.value.trim() == '123456'){
                alert("Đăng nhập thành công");
                // lưu trữ trạng thái trong localstorage
                localStorage.setItem("user",inputUserName.value)
                // chuyển về tảng danh sách
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