
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/ecommerce/public/css/header.css?v=<?php echo time(); ?>">
</head>
<body>
<header class="header">
    <div class="logo">
        <a href="home">
            <img src="/ecommerce/public/assets/img/logoYaMe.png" alt="" class="header__nav-img">
        </a>
    </div>

    <ul class="header_nav_list">
        <!-- bộ sưu tập -->
        <li class="header_nav_item">
            <a href="bo_suu_tap">BỘ SƯU TẬP</a>
            <i class="fa-solid fa-chevron-down"></i>
            <ul class="header_nav_item_sub_container">
                <li class="header__item-item"><a href="bo_suu_tap?type=nobrand">Non Branded (Tối giản, Tiết kiện)</a></li>
                <li class="header__item-item"><a href="bo_suu_tap?type=seventy">Seventy Seven (Giá Tốt, Jean 277k)</a></li>
                <li class="header__item-item"><a href="bo_suu_tap?type=nostyle">No Style (Gu nào cũng có)</a></li>
                <li class="header__item-item"><a href="bo_suu_tap?type=premium">Premium (Dáng chuẩn, Vải xịn)</a></li>
                <li class="header__item-item"><a href="bo_suu_tap?type=cooltouch">Cool Touch (Vải Mềm-Mịn-Mát)</a></li>
            </ul>
        </li>
        <!-- áo thun -->
        <li class="header_nav_item">
            <a href="">ÁO THUN NAM NỮ</a>
            <i class="fa-solid fa-chevron-down"></i>
            <ul class="header_nav_item_sub_container">
                <li class="header__item-item"><a href="nobrand">Non Branded (Tối giản, Tiết kiện)</a></li>
                <li class="header__item-item"><a href="seventy">Seventy Seven (Giá Tốt, Jean 277k)</a></li>
                <li class="header__item-item"><a href="nostyle">No Style (Gu nào cũng có)</a></li>
                <li class="header__item-item"><a href="premiup">Premium (Dáng chuẩn, Vải xịn)</a></li>
                <li class="header__item-item"><a href="cool_touch">Cool Touch (Vải Mềm-Mịn-Mát)</a></li>
            </ul>

        </li>
        <!-- giá tốt -->
        <li class="header_nav_item">
            <a href="">GIÁ LUÔN TỐT</a>
            <i class="fa-solid fa-chevron-down"></i>
            <ul class="header_nav_item_sub_container">
                <li class="header__item-item"><a href="nobrand">Thời Trang Giá Tốt</a></li>
                <li class="header__item-item"><a href="seventy">Phụ Kiện Giá Tốt</a></li>
                
            </ul>
        </li>
        <!-- mới -->
        <li class="header_nav_item">
            <a href="bo_suu_tap?type=new">MỚI</a>
            <div>
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <ul class="header_nav_item_sub_container">
                <li class="header__item-item"><a href="nobrand">Non Branded (Tối giản, Tiết kiện)</a></li>
                <li class="header__item-item"><a href="seventy">Seventy Seven (Giá Tốt, Jean 277k)</a></li>
                <li class="header__item-item"><a href="nostyle">No Style (Gu nào cũng có)</a></li>
                <li class="header__item-item"><a href="premiup">Premium (Dáng chuẩn, Vải xịn)</a></li>
                <li class="header__item-item"><a href="cool_touch">Cool Touch (Vải Mềm-Mịn-Mát)</a></li>
            </ul>
        </li>
    </ul>

    <div class="header_link_icon">
        <ul class="header_link_icon_list">
            <li class="header_link_icon_item">
                <a href="">
                    <i class="header-icon fa-solid fa-magnifying-glass"></i>
                </a>
            </li>

            <li class="header_link_icon_item">
                <a class="login_icon_container">
                    <i class="fa-solid fa-user"></i>
                    <div class="login_icon_container_sub_box">
                        <div class="register">Đăng kí</div>
                        <div class="login">Đăng nhập</div>
                    </div>
                </a>
            </li>

            <li class="header_link_icon_item">
                <a href="">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <!-- <span class="header__cart-notice">2</span>           -->
                </a>
            </li>
        </ul>
    </div>
</header>
</body>
</html>