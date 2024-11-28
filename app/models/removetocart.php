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

            // Kiểm tra xem sản phẩm có trong giỏ không
            if (isset($cart[$product_id])) {
                // Giảm số lượng sản phẩm xuống 1
                $cart[$product_id] -= 1;

                // Nếu số lượng bằng 0, xóa sản phẩm khỏi giỏ hàng
                if ($cart[$product_id] == 0) {
                    unset($cart[$product_id]);
                }

                // Cập nhật lại giỏ hàng trong cơ sở dữ liệu
                $stmt = $conn->prepare("UPDATE users SET cart = :cart WHERE id = :user_id");
                $cart_json = json_encode($cart);
                $stmt->bindParam(':cart', $cart_json);
                $stmt->bindParam(':user_id', $user_id);
                $stmt->execute();

                echo json_encode(["message" => "Product quantity updated in cart"]);
            } else {
                echo json_encode(["message" => "Product not found in cart"]);
            }
        } else {
            echo json_encode(["message" => "User not found"]);
        }
    } else {
        echo json_encode(["message" => "Please provide user_id and product_id"]);
    }
}
?>
