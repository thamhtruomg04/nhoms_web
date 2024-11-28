<?php
$basePath = '/ecommerce/public';
$uri = trim(str_replace($basePath,'',$_SERVER['REQUEST_URI']),'/');

if ($uri == '' || $uri == 'home') {
    require_once '../app/controllers/HomeController.php';
    $controller = new HomeController();
    $controller->index();
    echo "$uri";
} elseif ($uri == 'nobrand') {
    require_once '../app/controllers/NoBrandController.php';
    $controller = new NoBrandController();
    $controller->index();
} else {
    http_response_code(404);
    echo "lỗi rồi bạn ơi";
}
?>