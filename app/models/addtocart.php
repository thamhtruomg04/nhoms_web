<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['user_id']) && isset($data['product_id'])) {
        $user_id = $data['user_id'];
        $product_id = $data['product_id'];

        // Lấy giỏ hàng hiện tại
        $stmt = $conn->prepare("SELECT cart FROM users WHERE id = :user_id");
        $stmt->bindParam(':user_id', $user_id);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            $cart = json_decode($user['cart'], true); // Giỏ hàng hiện tại dưới dạng mảng PHP

            // Kiểm tra xem sản phẩm đã có trong giỏ chưa
            if (isset($cart[$product_id])) {
                // Nếu có, tăng số lượng sản phẩm lên 1
                $cart[$product_id] += 1;
            } else {
                // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng với số lượng = 1
                $cart[$product_id] = 1;
            }

            // Cập nhật lại giỏ hàng trong cơ sở dữ liệu
            $stmt = $conn->prepare("UPDATE users SET cart = :cart WHERE id = :user_id");
            $cart_json = json_encode($cart);
            $stmt->bindParam(':cart', $cart_json); // Mã hóa giỏ hàng lại thành JSON
            $stmt->bindParam(':user_id', $user_id);
            $stmt->execute();

            echo json_encode(["message" => "Product added to cart successfully"]);
        } else {
            echo json_encode(["message" => "User not found"]);
        }
    } else {
        echo json_encode(["message" => "Please provide user_id and product_id"]);
    }
}
?>
