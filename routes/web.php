<?php
$basePath = '/ecommerce/public'; 
$uri = parse_url(trim(str_replace($basePath, '', $_SERVER['REQUEST_URI']), '/'), PHP_URL_PATH);
if ($uri == '' || $uri == 'home') {
    require_once '../app/controllers/HomeController.php';
    $controller = new HomeController();
    $controller->index();
    echo "$uri";
} elseif ($uri == 'bo_suu_tap') {
    if (isset($_GET['type'])) {
        $type = $_GET['type']; 
        $validTypes = ['nobrand', 'seventy', 'nostyle', 'premium', 'cooltouch','new'];

        if (in_array($type, $validTypes)) {
            require_once '../app/controllers/BoSuuTapController.php';
            $controller = new BoSuuTapController();
            $controller->index($type);  
        } else {
            http_response_code(404);
            echo "Lỗi: loại bộ sưu tập không hợp lệ.";
        }
    } else {
        require_once '../app/controllers/BoSuuTapController.php';
        $controller = new BoSuuTapController();
        $controller->index();
    }
} else {
    http_response_code(404);
    echo "Lỗi rồi bạn ơi";
}
?>
