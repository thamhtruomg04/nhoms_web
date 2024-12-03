// official
import productData from "../productData.js";

// hien thi bo suu tap (full)
function renderAllProducts() {
    const bosuutapData = productData.filter(product => (
        product.type !== "premium" && product.type !== "cooltouch" && product.type !== "new"
    ))
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = '';
    // in ra toan bo san pham
    bosuutapData.forEach(item => {
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
// hien thi san pham theo loai
function renderProductsForType(type) {
    // thêm đường dẫn vào bst_header
    const bosuutapHeader = document.querySelector('.bosuutap_header')
    const uriHeader = document.createElement('div')
    uriHeader.classList.add('uri-header') // Thêm class 'uri-header' vào div header
    uriHeader.innerHTML = `<a href="bo_suu_tap?type=${type}">/ ${type}</a>`
    bosuutapHeader.appendChild(uriHeader)
    // in ra san phẩm theo type
    const productContainer = document.getElementById('productContainer')
    productContainer.innerHTML = ''
    const bosuutapFilter = productData.filter(product => product.type === type)
    bosuutapFilter.forEach(item => {
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
    // them active vào thẻ a(type) được chọn
    const links = document.querySelectorAll('.bosuutap_filter_for_type a');
    links.forEach(link => {
        const urlType = new URL(link.href).searchParams.get('type');
        if (urlType === type) {
            link.classList.add('active'); 
        }
    });
}

const params = new URLSearchParams(window.location.search)
const type = params.get("type")
function renderProduct() {
    if (type) {
        renderProductsForType(type)
    }
    else if (type == null) {
        renderAllProducts();
    }
}
renderProduct()
