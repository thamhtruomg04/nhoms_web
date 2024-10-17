
import './home.css'

const Home = () => {
  return (
    <div className="container__container">
            <div className="container">
                <p className="container__text">Giá Tốt</p>
                <div className="aspect-ratio-169">
                    <img src="/assets/img/anhnenYaMe1.png" alt=""/>
                    <img src="/assets/img/anhnenYaMe2.png" alt=""/>
                    <img src="/assets/img/anhnenYaMe3.png" alt=""/>
                </div>
            </div>
            <div className="dot__container">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
    
            <div className="slide__container">
                <p className="slide__text">Giá luôn tốt</p>
                <a href=""><img src="assets/img/slide.png" alt=""/></a>
            </div>
    
            <div className="container__item">
                <a href=""><img className="container-img" src="/assets/img/item1.png" alt=""/></a>
                <a href=""><img className="container-img" src="/assets/img/item2.png" alt=""/></a>
            </div>
    
            <div className="container__item">
                <a href=""><img className="container-img" src="/assets/img/item3.png" alt=""/></a>
                <a href=""><img className="container-img" src="/assets/img/item4.png" alt=""/></a>
            </div>
    
            <div className="container__item">
                <a href=""><img className="container-img" src="assets/img/item5.png" alt="" /></a>
                <a href=""><img className="container-img" src="assets/img/item6.png" alt="" /></a>
            </div>
            
            <div className="container__discount">
                <img src="assets/img/discount.png" alt=""/>
            </div>
        </div>
  )
}

export default Home
