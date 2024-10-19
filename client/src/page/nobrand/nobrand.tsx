import './nobrand.css'
import listProduct from '../../assets/asset.js'
import SortProduct from '../../component/sort-product/sortProduct.js'
import { useState } from 'react'

const Nobrand = () => {
  const[isDisplaySort,setIsDisplaySort] = useState(false)
  return (
    <div className="container__Non">

      {/* sort-product */}
      <div className='nonbrand-input' onClick={()=>setIsDisplaySort(!isDisplaySort)}>
        <button className="container-input">Lọc sản phẩm phù hợp</button>
        <i className="container-icon fa-solid fa-caret-down"></i>
        {isDisplaySort&&<SortProduct/>}
      </div>

      {/* slide */}
      <div className="container__slide">
        <img src="/assets/img/BST_Non_Branded_(2).png" alt="" />
      </div>

      {/* sub nav */}
      <div className="container__text-numbr">
        <p>Nổi bật / Bán chạy / <b>Mới</b></p>
        <div className="dot__container-nobrand">
          <div className="dot active">1</div>
          <div className="dot">2</div>
          <div className="dot">3</div>
          <div className="dot"><i className="fa-solid fa-angles-right"></i></div>
        </div>
      </div>
      {/* list product*/}
      <div className='container-list'>
        {listProduct.map((product: any) =>
          <div key={product.id} className="container-item">
            <a href=""><img src={product.img} alt="" /></a>
            <h2>{product.name}</h2>
            <p>Giá: {product.price}đ</p>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Nobrand
