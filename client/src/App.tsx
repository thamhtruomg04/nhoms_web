import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/footer/footer'
import Header from './component/header/header'
import Home from './page/home/home'
import NoStyle from './page/no-style/noStyle'
import SeventySeven from './page/seventy-seven/seventySeven'
import Nobrand from './page/nobrand/nobrand'
import Cart from './page/cart/cart'

function App() {

  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/giỏ-hàng' element={<Cart />}></Route>
          <Route path='/bộ-sưu-tập/no-brand' element={<Nobrand />}></Route>
          <Route path='/bộ-sưu-tập/seventy-seven' element={<SeventySeven />}></Route>
          <Route path='/bộ-sưu-tập/no-style' element={<NoStyle />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
