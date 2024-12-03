const productData = [
    {
        "id": 1,
        "name": "Túi MaKama (Nhập khẩu từ Mỹ)",
        "image": "assets/img/Non_item1.png",
        "price": "14.000.000",
        "highlight_order": 3,  // Thứ tự nổi bật
        "best_seller_order": 12  // Thứ tự bán chạy
    },
    {
        "id": 2,
        "name": "Quần vải lụa cao cấp (Nhập khẩu từ Mỹ)",
        "image": "assets/img/Non_item2.png",
        "price": "9.000.000",
        "highlight_order": 8,
        "best_seller_order": 15
    },
    {
        "id": 3,
        "name": "Túi sách cao cấp (Nhập khẩu từ Mỹ)",
        "image": "assets/img/Non_item3.png",
        "price": "400.000",
        "highlight_order": 5,
        "best_seller_order": 2
    },
    {
        "id": 4,
        "name": "Túi sách Ivy(Màu trắng)",
        "image": "assets/img/Non_item4.png",
        "price": "400.000",
        "highlight_order": 10,
        "best_seller_order": 6
    },
    {
        "id": 5,
        "name": "Áo sơ mi KuBo(Trắng)",
        "image": "assets/img/Non_item5.png",
        "price": "500.000",
        "highlight_order": 4,
        "best_seller_order": 13
    },
    {
        "id": 6,
        "name": "Áo sơ mi KuBo(Đen)",
        "image": "assets/img/Non_item6.png",
        "price": "500.000",
        "highlight_order": 9,
        "best_seller_order": 18
    },
    {
        "id": 7,
        "name": "Mũ lưỡi chai KuBo(Đen)",
        "image": "assets/img/Non_item7.png",
        "price": "200.000",
        "highlight_order": 7,
        "best_seller_order": 14
    },
    {
        "id": 8,
        "name": "Mũ lưỡi chai KuBo(Trắng)",
        "image": "assets/img/Non_item8.png",
        "price": "200.000",
        "highlight_order": 2,
        "best_seller_order": 17
    },
    {
        "id": 9,
        "name": "Mũ lưỡi chai KuBo(Đỏ)",
        "image": "assets/img/Non_item9.png",
        "price": "200.000",
        "highlight_order": 6,
        "best_seller_order": 11
    },
    {
        "id": 10,
        "name": "Ví Non Branded(Đen)",
        "image": "assets/img/Non_item10.png",
        "price": "600.000",
        "highlight_order": 12,
        "best_seller_order": 4
    },
    {
        "id": 11,
        "name": "Ví Non Branded(Tím)",
        "image": "assets/img/Non_item11.png",
        "price": "600.000",
        "highlight_order": 1,
        "best_seller_order": 5
    },
    {
        "id": 12,
        "name": "Ví KuBo(Đen)",
        "image": "assets/img/Non_item12.png",
        "price": "400.000",
        "highlight_order": 11,
        "best_seller_order": 16
    },
    {
        "id": 1,
        "name": "Áo ba lỗ cotton",
        "image": "assets/img/item1.png",
        "price": "100.000",
    },
    {
        "id": 2,
        "name": "Áo phông nam thời trang",
        "image": "assets/img/item2.png",
        "price": "150.000",
    },
    {
        "id": 3,
        "name": "Áo sơ mi trắng nam",
        "image": "assets/img/item3.png",
        "price": "250.000",
    },
    {
        "id": 4,
        "name": "Áo hoodie unisex",
        "image": "assets/img/item4.png",
        "price": "300.000",
    },
    {
        "id": 5,
        "name": "Áo len cổ tròn mùa đông",
        "image": "assets/img/item5.png",
        "price": "400.000",
    },
    {
        "id": 6,
        "name": "Áo ba lỗ thể thao nam",
        "image": "assets/img/item6.png",
        "price": "90.000",
    },
    {
        "id": 7,
        "name": "Áo khoác dạ nam",
        "image": "assets/img/item7.png",
        "price": "500.000",
    },
    {
        "id": 8,
        "name": "Áo phông dài tay unisex",
        "image": "assets/img/item8.png",
        "price": "200.000",
    },
    {
        "id": 9,
        "name": "Áo blazer nam",
        "image": "assets/img/item9.png",
        "price": "600.000",
    },
    {
        "id": 10,
        "name": "Áo thun polo nam",
        "image": "assets/img/item10.png",
        "price": "170.000",
    },
    {
        "id": 11,
        "name": "Áo phao nam mùa đông",
        "image": "assets/img/item11.png",
        "price": "550.000",
    },
    {
        "id": 12,
        "name": "Áo khoác gió nam",
        "image": "assets/img/item12.png",
        "price": "300.000",
    },
    {
        "id": 13,
        "name": "Áo cardigan len nam",
        "image": "assets/img/item13.png",
        "price": "450.000",
    },
    {
        "id": 14,
        "name": "Áo khoác denim",
        "image": "assets/img/item14.png",
        "price": "700.000",
    },
    {
        "id": 15,
        "name": "Áo thun cổ tròn",
        "image": "assets/img/item15.png",
        "price": "130.000",
    },
    {
        "id": 16,
        "name": "Áo phông basic nam",
        "image": "assets/img/item16.png",
        "price": "120.000",
    },
    {
        "id": 17,
        "name": "Áo gile nam",
        "image": "assets/img/item17.png",
        "price": "250.000",
    },
    {
        "id": 18,
        "name": "Áo len cao cổ",
        "image": "assets/img/item18.png",
        "price": "350.000",
    },
    {
        "id": 19,
        "name": "Áo thun họa tiết",
        "image": "assets/img/item19.png",
        "price": "200.000",
    },
    {
        "id": 20,
        "name": "Áo khoác bomber",
        "image": "assets/img/item20.png",
        "price": "800.000",
    }
];

function renderProducts() {
    const productContainer = document.getElementById("productContainer");

    // Clear any existing content
    productContainer.innerHTML = '';

    noBrandData.forEach(item => {
        const productItem = document.createElement('div');
        productItem.classList.add('container-item'); // Thêm class 'container-item' vào mỗi item sản phẩm

        const productHTML = `
            <a href=""><img src="${item.image}" alt="${item.name}"></a>
            <p>${item.name}</p>
            <div class="product_info">
                <p><span>đ</span>${item.price}</p> 
                <button>Thêm giỏ hàng</button> 
            </div>
        `;

        productItem.innerHTML = productHTML;
        productContainer.appendChild(productItem);
    });
}


// Call the function to render the products
renderProducts();
