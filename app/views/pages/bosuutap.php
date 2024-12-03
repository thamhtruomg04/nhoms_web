<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ban quan ao</title>
    <link rel="stylesheet" href="/ecommerce/public/css/header.css">
    <link rel="stylesheet" href="/ecommerce/public/css/footer.css">
    <link rel="stylesheet" href="/ecommerce/public/css/bosuutap.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body> 
    <!-- import header -->
    <?php include __DIR__ . '/../components/header.php'; ?>

    <!-- home html --> 
    <div class="bosuutap_container">
        <div class="bosuutap_header">
            <a href="home"><i class="fa-solid fa-house"></i></a>
            <a href="bo_suu_tap">/ Bộ sưu tập </a>
        </div>
        
        <div class="bosuutap_filter">
            <div class="bosuutap_filter_simple">
                <p>Nổi bật |</p>
                <p>Bán chạy |</p>
                <p>Mới</p>
            </div>
            <div class="bosuutap_filter_for_type">
                <a href="?type=nobrand">Non Branded</a>
                <a href="?type=seventy">Seventy Seven</a>
                <a href="?type=nostyle">No Style</a>
                <a href="?type=premium">Premium</a>
                <a href="?type=cooltouch">Cool Touch</a>
            </div>
        </div>
        
        <div class="product_container" id="productContainer">
        </div>
    </div>
    <script type="module" src="../public/js/bosuutap/bosuutap.js"></script>
    <!-- import footer -->
    <?php include __DIR__ . '/../components/footer.php'; ?>
</body>
</html>