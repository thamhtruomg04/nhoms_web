import './sortProduct.css'
const SortProduct = () => {
    return (
        <div className='sort-container'>
            <div className="kho-nghi-ten-qua">
                <p className='sort-header'>Chủng loại</p>
                <div className='sort-container-item'>
                    <div className="sort-container-item-1">
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>Túi đeo</p>
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>Quần Tây</p>
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>Áo Sơ Mi</p>
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>PKTT Nón</p>
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>PKTT Ví</p>
                        </div>
                    </div>

                    <div className="sort-container-item-1">
                        <div className="sort-option">
                            <input type="checkbox" /> PKTT Vớ
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" /> Áo Thun
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" /> Quần Short
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" /> Quần Dài
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" /> Áo Polo
                        </div>
                    </div>
                </div>
            </div>
        <hr />
            <div className="kho-nghi-ten-qua">
                <p className='sort-header'>Ưu điểm</p>
                <div className='sort-container-item'>
                    <div className="sort-container-item-1">
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>Túi đeo</p>
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>Quần Tây</p>
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>Áo Sơ Mi</p>
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>PKTT Nón</p>
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" />
                            <p>PKTT Ví</p>
                        </div>
                    </div>

                    <div className="sort-container-item-1">
                        <div className="sort-option">
                            <input type="checkbox" /> PKTT Vớ
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" /> Áo Thun
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" /> Quần Short
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" /> Quần Dài
                        </div>
                        <div className="sort-option">
                            <input type="checkbox" /> Áo Polo
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container__section">
                <div className="container__list">
                    <div className="container__hover">
                        <p>Ưu điểm</p>
                        <div className="container-item">
                            <input type="checkbox" /> Co Giãn
                        </div>
                        <div className="container-item">
                            <input type="checkbox" /> Thấm Hút
                        </div>
                        <div className="container-item">
                            <input type="checkbox" /> Trượt nước
                        </div>
                    </div>
                </div>
                <div className="container__list">
                    <div className="container__hover">

                        <div className="container-item">
                            <input type="checkbox" /> Nhỏ - Nhẹ
                        </div>
                        <div className="container-item">
                            <input type="checkbox" /> Mỏng - Nhẹ
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default SortProduct
