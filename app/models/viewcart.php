<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $user_id = $_GET['user_id']; // Lấy user_id từ query string

    $stmt = $conn->prepare("SELECT cart FROM users WHERE id = :user_id");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        // Trả về giỏ hàng dưới dạng JSON
        echo json_encode(["cart" => json_decode($user['cart'])]);
    } else {
        echo json_encode(["message" => "User not found"]);
    }
}
?>
