<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ban quan ao</title>
    <link rel="stylesheet" href="/ecommerce/public/css/header.css">
    <link rel="stylesheet" href="/ecommerce/public/css/body.css">
    <link rel="stylesheet" href="/ecommerce/public/css/footer.css">
    <link rel="stylesheet" href="../public/css/main.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body> 
    <!-- import header -->
    <?php include __DIR__ . '/../components/header.php'; ?>
    
    <!-- home html -->
    <div class="container__container">
        <div class="container_header">
            <div class="container">
                <div class="aspect-ratio-169">
                    <div class="overlay">
                        <span class="overlay_text"> VÌ SAO <br>BẠN NÊN CHỌN YaMe?</span>
                    </div>
                    <img src="assets/img/tex6_img.png" alt="">
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

        

        
        <div class="container_section1">
            <span class= "section1_text">VÌ...</span>
        </div>

        <div class="container_section2">
            <div class="container_content">
                <span>Vì YaMe là thương hiệu thời trang</span>
                <ul class="container_list">
                    <li>
                    <i class="fa-solid fa-check"></i>Không phân biệt độ tuổi
                    </li>
                    <li>
                    <i class="fa-solid fa-check"></i>Không phân biệt quan điểm
                    </li>
                    <li>
                    <i class="fa-solid fa-check"></i>Không phân biệt giới tính
                    </li>
                    <li>
                    <i class="fa-solid fa-check"></i>Không phân biệt hình thể
                    </li>
                </ul>
            </div>
        </div>

        <div class="container_section3">
            <div class="container_sc">
                <div class="section-a section3-1">
                    <div class="section-left">
                        <img src="assets/img/anh5.jpg" alt="">
                    </div>
                    <div class="section-right">
                        <span>Vì đây là giai đoạn khám phá bản thân, tìm kiếm định hướng và tạo dấu ấn riêng.</span>
                    </div>
                </div>
                <div class="section-b section3-2">
                    <div class="section-left">
                        <span>Vì đây là giai đoạn xây dựng nền tảng sự nghiệp, vươn lên và gặt hái thành công.</span>
                    
                    </div>
                    <div class="section-right">
                        <img src="assets/img/anh7.jpg" alt="">
                    </div>
                </div>
                <div class="section-a section3-3">
                    <div class="section-left">
                        <img src="assets/img/anh6.jpg" alt="">
                    </div>
                    <div class="section-right">
                        <span>Vì giai đoạn này tập trung vào ổn định cuộc sống gia đình và sự nghiệp.</span>
                    </div>
                </div>
                <div class="section-b section3-4">
                    <div class="section-left">
                        <span>Vì giai đoạn này sức khỏe là vốn quý, kinh nghiệm là tài sản để cống hiến và truyền đạt.</span>
                        
                    </div>
                    <div class="section-right">
                        <img src="assets/img/anh9.jpg" alt="">
                    </div>
                </div>
                <div class="section-a section3-5">
                    <div class="section-left">
                        <img src="assets/img/anh8.jpg" alt="">
                    </div>
                    <div class="section-right">
                        <span>Vì đây là lúc nghỉ ngơi, theo đuổi đam mê và hưởng thụ cuộc sống sau bao năm lao động.</span>
                    </div>
                </div>
            </div>
        </div>


        <div class="container_section4">
            <span class= "section4_text">VÌ TRẢI NGHIỆM <br>
            LIỀN MẠCH</span>
        </div>


        <div class="container_section5">
            <div class="container_sc">
                <div class="container-left">
                        <img src="assets/img/guide1.png" alt="">
                </div>
                <div class="container-right">
                    <img src="assets/img/guide2.png" alt="">
                </div>
            </div>
        </div>
       

        

<!-- 
        <div class="main_content">
            <div class="main_content_header">
                <a href="home"><i class="fa-solid fa-house"></i></a>
                <p>/ Sản phẩm hot</p>
            </div>
            <div class="main_content_filter">
                <p>Nổi bật | Bán chạy | Mới</p>
            </div>
            <div class="sanpham" id="sanpham">
                
            </div>
        </div>
 -->

        
    </div>
    <script src="/ecommerce/public/js/home/home.js"></script>
    <!-- import footer -->
    <?php include __DIR__ . '/../components/footer.php'; ?>
</body>
</html>