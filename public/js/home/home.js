// test
const homeProductData = [
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
        "image": "assets/img/item3.png",
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
        "image": "assets/img/item6.png",
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
        "image": "assets/img/item1.png",
        "price": "800.000",
    }
]

function renderProducts() {
    const sanphamElement = document.querySelector("#sanpham");
    sanphamElement.innerHTML = ""; // Xóa nội dung cũ

    homeProductData.forEach(product => {
        const productHTML = `
            <div class="sanpham_container">
                <img class="sanpham_img" src="${product.image}" alt="${product.name}">
                <div class="sanpham_name">${product.name}</div>
                <div class="sanpham_options">
                    <div>${product.price}<span>đ</span></div>
                    <button>Thêm giỏ hàng</button>
                </div>
            </div>
        `;
        sanphamElement.innerHTML += productHTML; // Thêm sản phẩm mới
    });
}
renderProducts();

