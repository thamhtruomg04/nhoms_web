<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Lấy nội dung từ body của request (JSON)
    $data = json_decode(file_get_contents('php://input'), true);

    // Kiểm tra xem có dữ liệu username và password không
    if (isset($data['username']) && isset($data['password'])) {
        $username = $data['username'];
        $password = password_hash($data['password'], PASSWORD_DEFAULT); // Mã hóa mật khẩu

        $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);

        if ($stmt->execute()) {
            echo json_encode(["message" => "User registered successfully"]);
        } else {
            echo json_encode(["message" => "Registration failed"]);
        }
    } else {
        echo json_encode(["message" => "Please fill in both username and password."]);
    }
}
