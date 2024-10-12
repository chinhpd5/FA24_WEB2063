

const app ={
    handleLogin: function(){
        // định nghĩa sự kiện submit của form
        const form = document.getElementById('form');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            // lấy input
            const inputUsername = document.getElementById('username')
            const inputPassword = document.getElementById('password')

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
                alert("cần nhập password tối thiểu 6 kí tự");
                inputPassword.focus();
                return;
            }

            // kiểm tra tài khoản và mật khẩu
            // hard code
            if(inputUsername.value.trim() == 'chinhpd5' && inputPassword.value.trim()== '123456'){
                alert("Đăng nhập thành công");
                //lưu trữ trạng thái đăng nhập local storage
                localStorage.setItem("user",inputUsername.value.trim());
                // chuyển về trang danh sach
                window.location ='index.html'

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