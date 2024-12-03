<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ban quan ao</title>
    <link rel="stylesheet" href="/ecommerce/public/css/header.css">
    <link rel="stylesheet" href="/ecommerce/public/css/footer.css">
    <link rel="stylesheet" href="../public/css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body> 
    <!-- import header -->
    <?php include 'components/header.php'; ?>
    
    <!-- home html -->
    <div class="container__container">
        <div class="container_header">
            <div class="container">
                <div class="aspect-ratio-169">
                    <img src="assets/img/anhnenYaMe1.png" alt="">
                    <!-- <img src="assets/img/anhnenYaMe2.png" alt=""> -->
                    <!-- <img src="assets/img/anhnenYaMe3.png" alt=""> -->
                </div>
                <div class="dot__container">
                    <div class="dot active"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        </div>

        <div class="main_content">
            <div class="main_content_header">
                <a href="home"><i class="fa-solid fa-house"></i></a>
                <p>/ Sản phẩm hot</p>
            </div>
            <div class="main_content_filter">
                <p>Nổi bật | Bán chạy | Mới</p>
            </div>
            <div class="sanpham" id="sanpham"></div>
        </div>
        
        <!-- <div class="container__discount">
            <img src="assets/img/discount.png" alt="">
        </div> -->
    </div>
    <script src="/ecommerce/public/js/home/data_dump.js"></script>
    <!-- import footer -->
    <?php include 'components/footer.php'; ?>
</body>
</html>