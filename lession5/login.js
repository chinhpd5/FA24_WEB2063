

const app ={
    handleLogin: function(){
        // định nghĩa sự kiện submit

        const form = document.getElementById('form');
        form.addEventListener('submit',(e)=>{
            // ngăn chặn hành vi tải trang
            e.preventDefault();
            // console.log("submit");

            // lấy input
            const inputUserName = document.getElementById('username')
            const inputPassword = document.getElementById('password')

            // validate
            if(!inputUserName.value.trim()){
                alert("Cần nhập tên tài khoản");
                inputUserName.focus();
                return;
            }

            if(!inputPassword.value.trim()){
                alert("Cần nhập password");
                inputPassword.focus();
                return;
            }

            if(inputPassword.value.trim().length < 6 ){
                alert("Cần nhập password tối thiểu 6 kí tự");
                inputPassword.focus();
                return;
            }
            // kiểm tra tài khoản và mật khẩu
            // hard code

            if(inputUserName.value.trim() == 'chinhpd5' && inputPassword.value.trim() == '123456'){
                alert("Đăng nhập thành công");
                // lưu trữ vào local storage
                localStorage.setItem("user",inputUserName.value);
                // chuyển về trang danh sách
                window.location = 'index.html'
            }else{
                alert("Sai tài khoản hoặc mật khẩu")
            }

        })
    },
    start: function(){
        // console.log(123);
        this.handleLogin();
    }
}

app.start();