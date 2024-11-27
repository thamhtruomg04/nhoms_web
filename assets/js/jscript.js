// Slide chuyen dong slide

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector(".aspect-ratio-169")
const dotItem = document.querySelectorAll(".dot")
let imgNumber = imgPosition.length
let index = 0

imgPosition.forEach(function (image, index) {
    image.style.left = index * 100 + "%";
    dotItem[index].addEventListener("click", function () {
        slide(index)
    })
})

function imgSlide() {
    index++;
    if (index >= imgNumber) {
        index = 0
    }
    slide(index)

}
function slide(index) {
    imgContainer.style.left = "-" + index * 100 + "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove('active')
    dotItem[index].classList.add('active')
}

// setInterval(imgSlide, 5000)
var troiToi = true
function doiCheDo() {
    if (troiToi == true) {
        document.getElementsByClassName('change-mode')[0].innerHTML = 'Tối';
        document.getElementsByClassName('header')[0].style = 'background-color: black';
        document.getElementsByClassName('container__container')[0].style = 'background-color: black';
        document.getElementsByClassName('footer')[0].style = 'background-color: black';
        troiToi = false;
    }
    else {
        document.getElementsByClassName('change-mode')[0].innerHTML = 'Sáng';
        document.getElementsByClassName('header')[0].style = 'background-color: grey';
        document.getElementsByClassName('container__container')[0].style = 'background-color: grey';
        document.getElementsByClassName('footer')[0].style = 'background-color: grey';
        troiToi = true;
    }
}

// dang ky
var register_button = document.querySelector('.register-button')
if(register_button){
    register_button.addEventListener('click', (e) => {
        e.preventDefault();
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
        var confirm_password = document.getElementById('confirm_password').value
        if (password !== confirm_password) {
            alert('Mật khẩu không trùng kh��p');
            return;
        }
        if (username && password) {
            fetch('http://localhost/ecommerce/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password })
            })
                .then(response => response.json()) // Parse response nếu server trả về JSON
                .then(data => {
                    // Xử lý kết quả từ server
                    console.log('Success:', data);
                    alert('Đăng ký thành công!');
                    window.location.href = 'http://127.0.0.1:5551/dangnhap.html';
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Đăng ký thất bại.');
                });
        }
    })
}

var login_button = document.getElementById("login_button")
if(login_button){
    login_button.addEventListener('click', (e) => {
        e.preventDefault();
        
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
        if (username && password) {
            fetch('http://localhost/ecommerce/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password })
            })
                .then(response => response.json()) // Parse response nếu server trả về JSON
                .then(data => {
                    // Xử lý kết quả từ server
                    console.log('Success:', data);
                    alert('Đăng nhập thành công!');
                    window.location.href = 'http://127.0.0.1:5551';
                    localStorage.setItem("user_id",data.user_id)
                    localStorage.setItem("cart",data.cart)
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Đăng ký thất bại.');
                });
        }
    })
}
var user_id = localStorage.getItem('user_id')
var cart = localStorage.getItem('cart')
var login_container = document.getElementById('login_container')
if(user_id){
    login_container.innerHTML = "đăng xuất"
    login_container.addEventListener('click', () => {
        if(confirm('Bạn sẽ đăng xuất ?')){
            localStorage.removeItem("user_id")
            localStorage.removeItem("cart")
            window.href= "/"
        }
    })
}


