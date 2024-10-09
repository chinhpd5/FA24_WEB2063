

const app ={
    handleSubmit: function(){
        const form = document.getElementById('form');
        form.addEventListener("submit", (e)=>{
            // ngăn chặn hành vi
            e.preventDefault();

            // lấy input
            const inputUsername = document.getElementById('username')
            const inputPassword = document.getElementById('password')

            // validate

            if(!inputUsername.value.trim()){
                alert("cần nhập username");
                inputUsername.focus();
                return;
            }

            if(!inputPassword.value.trim()){
                alert("cần nhập password");
                inputUsername.focus();
                return;
            }

            if(inputPassword.value.length < 6){
                alert("cần tối thiểu 6 kí tự");
                inputUsername.focus();
                return;
            }

            // kiểm tra dữ liệu
            // hard code
            if(inputUsername.value == "chinhpd5"  && inputPassword.value =="123456"){
                // lưu trữ user vào local storage
                localStorage.setItem('user', inputUsername.value );
                // chuyển về trang danh sách
                window.location= 'index.html'
                alert("Đăng nhập thành công")
            }else{
                alert("Sai tài khoản hoặc mật khẩu")
            }


        })
    },
    start: function(){
        this.handleSubmit()
    }
}

app.start();