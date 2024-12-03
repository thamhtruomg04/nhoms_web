<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ban quan ao</title>
    <link rel="stylesheet" href="/ecommerce/public/css/header.css">
    <link rel="stylesheet" href="/ecommerce/public/css/footer.css">
    <link rel="stylesheet" href="/ecommerce/public/css/nobrand.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body> 
    <!-- import header -->
    <?php include 'components/header.php'; ?>
    
    <!-- home html --> 
    <div class="nobrand_container">
        <div id="NonBranded" class="nobrand_header">
            <a href="home"><i class="fa-solid fa-house"></i></a>
            <p>/ Bộ sưu tập / Non Branded (Tối giản, Tiết kiệm)</p>
        </div>
        <!-- <input type="text" class="container-input" placeholder="Lựa chọn sản phẩm">
        <i class="container-icon fa-solid fa-caret-down"></i> -->
        <!-- <div class="container__section">
            <div class="container__list">
                <div class="container__hover">
                    <p>Chủng loại</p>
                    <div class="container-item">
                        <input type="checkbox"> Túi đeo
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Quần Tây
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Áo Sơ Mi
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> PKTT Nón
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> PKTT Ví
                    </div>
                    
                </div>
            </div>
            <div class="container__list">
                <div class="container__hover">
                    
                    <div class="container-item">
                        <input type="checkbox"> PKTT Vớ
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Áo Thun
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Quần Short
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Quần Dài
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Áo Polo
                    </div>
                    
                </div>
            </div>
            
                
            
        </div>
        <div class="container__section">
            <div class="container__list">
                <div class="container__hover">
                    <p>Ưu điểm</p>
                    <div class="container-item">
                        <input type="checkbox"> Co Giãn
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Thấm Hút
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Trượt nước
                    </div>
                    
                </div>
            </div>
            <div class="container__list">
                <div class="container__hover">
                    
                    <div class="container-item">
                        <input type="checkbox"> Nhỏ - Nhẹ
                    </div>
                    <div class="container-item">
                        <input type="checkbox"> Mỏng - Nhẹ
                    </div>
                    
                    
                </div>
            </div>
            
                
            
        </div> -->

        <div class="nobrand_filter">
            <p>Nổi bật | Bán chạy | Mới</p>
            <div class="dot__container">
                <div class="dot active">1</div>
                <div class="dot">2</div>
                <div class="dot">3</div>
                <div class="dot"><i class="fa-solid fa-angles-right"></i></div>
            </div>
        </div>

        
        <!-- <div class="container__slide">
            <img src="assets/img/BST_Non_Branded_(2).png" alt="">
        </div> -->

        <div class="product_container" id="productContainer">
             <!-- Các sản phẩm sẽ được chèn vào đây bằng JavaScript -->
        </div>
    </div>
    <script src="../public/js/nobrand/data_dump.js"></script>
    <script type="module" src="../public/js/nobrand/nobrand.js"></script>
    <!-- import footer -->
    <?php include 'components/footer.php'; ?>
</body>
</html>