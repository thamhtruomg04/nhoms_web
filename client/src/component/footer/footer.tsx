import './footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src="/logoYaMe.png" alt="" />
                <p className="footer-p1">Đặt hàng và thu tiền tận nơi toàn quốc</p>
                <p className="footer-p2">Liện hệ: (028) 7307 1441</p>
                <div className="footer-link">
                    <a href="">CHƯƠNG TRÌNH KHUYẾN MÃI</a>

                </div>
                <div className="footer-link">

                    <a href="">GIỚI THIỆU VỀ YAME</a>

                </div>
                <div className="footer-link">

                    <a href="">GIỚI THIỆU CÁC BỘ SƯU TẬP</a>
                </div>
                <div className="footer-icon">
                    <a href="">Xem thêm thông tin YaMe
                        <i className="icon-near fa-solid fa-chevron-down"></i>
                    </a>
                </div>
                <div className="footer-icon">
                    <a href=""> Danh sách CH YaMe trên toàn quốc
                        <i className="icon-near fa-solid fa-chevron-down"></i>

                    </a>
                </div>
                <div className="footer-icon-map">
                    <i className="fa-solid fa-location-dot"></i>
                    <a href="">Tìm cửa hàng gần bạn</a>
                </div>

                <div className="footer-end">
                    <p className="footer-last">
                        © 2024 - CÔNG TY TNHH YAME VN
                        Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM
                        Địa chỉ đăng ký kinh doanh: 766/3B-3C Sư Vạn Hạnh (Nối dài), Phường 12, Quận 10, TP.HCM - Điện thoại: (028) 3868 4857 - Mua hàng: (028) 7307 1441 - Email: cskh@yame.vn
                    </p>
                    <div className='footer-img'>
                        <img src="/assets/img/bocongthuong.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
