# nhoms_web
clone vao 1 folder trong file htdocs tên ecommerce -> chay xampp -> truy cap tai (http://localhost/ecommerce/public/home)
<div>
    <p>cấu trúc file:</p>
    <p><span style="font-weight: bold">app</span>--> controllers: logic xử lý trước khi chạy html (vd: lấy dữ liệu db)</p>
    <p><span style="font-weight: bold">app</span>--> models: logic api </p>
    <p><span style="font-weight: bold">app</span>--> view: các file html bình thường nhưng đuôi php. component là tệp các phần tái sử dụng như header, footer,... </p>
    <p><span style="font-weight: bold">public</span>:các file css, ảnh, js. file index ở đây là file chính khi chạy</p>
    <p><span style="font-weight: bold">config</span>: cấu hình (kết nối mysql) </p>
    <p><span style="font-weight: bold">routes</span>: cấu hình điều hướng giữa các trang</p>
    <p>khi chạy tại địa chỉ <a href="http://localhost/ecommerce/public/home">http://localhost/ecommerce/public/home</a>
    sẽ gọi file routes -> gọi controllers -> xử lý logic -> in ra file html,css</p>
</div>

