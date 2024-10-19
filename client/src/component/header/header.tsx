
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import { useState } from 'react'
import Login from '../login/login'
import Signup from '../login/signup'

const Header = () => {
    const [isInputDisplay, setIsInputDisplay] = useState(false)
    const [isLogin, setIsLogin] = useState("")
    const navigate = useNavigate()
    return (
        <header >
            <div className="header">
                <div className="logo">
                    <a href="/"><img src="/logoYaMe.png" alt="" className="header__nav-img" /></a>
                </div>

                <ul className="header__list">
                    <li className="header__list-item">
                            BỘ SƯU TẬP
                        <i className="icon-near fa-solid fa-chevron-down"></i>
                        <ul className="header__item-list">
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/no-brand'}>
                                    Non Branded (Tối giản, Tiết kiện)
                                </Link>
                            </li>
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/seventy-seven'}>
                                    Seventy Seven (Giá Tốt, Jean 277k)
                                </Link>
                            </li>
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/no-style'}>
                                    No Style (Gu nào cũng có)
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="header__list-item">
                        <a href="">
                            ÁO THUN NAM NỮ
                        </a>
                        <i className="icon-near fa-solid fa-chevron-down"></i>
                        <ul className="header__item-list">
                        <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/no-brand'}>
                                    Non Branded (Tối giản, Tiết kiện)
                                </Link>
                            </li>
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/seventy-seven'}>
                                    Seventy Seven (Giá Tốt, Jean 277k)
                                </Link>
                            </li>
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/no-style'}>
                                    No Style (Gu nào cũng có)
                                </Link>
                            </li>
                        </ul>

                    </li>
                    <li className="header__list-item">
                        <a href="">
                            GIÁ LUÔN TỐT
                        </a>
                        <i className="icon-near fa-solid fa-chevron-down"></i>
                        <ul className="header__item-list">
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/no-brand'}>
                                    Non Branded (Tối giản, Tiết kiện)
                                </Link>
                            </li>
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/seventy-seven'}>
                                    Seventy Seven (Giá Tốt, Jean 277k)
                                </Link>
                            </li>
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/no-style'}>
                                    No Style (Gu nào cũng có)
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="header__list-item">MỚI</li>
                    <li className="header__list-item">
                        <i className="fa-solid fa-bars"></i>
                        <i className="icon-near fa-solid fa-chevron-down"></i>

                        <ul className="header__item-list">
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/no-brand'}>
                                    Non Branded (Tối giản, Tiết kiện)
                                </Link>
                            </li>
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/seventy-seven'}>
                                    Seventy Seven (Giá Tốt, Jean 277k)
                                </Link>
                            </li>
                            <li className='header__item-item'>
                                <Link to={'/bộ-sưu-tập/no-style'}>
                                    No Style (Gu nào cũng có)
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className='header__action'>
                    <input type="text" placeholder="Nhập sản phẩm cần tìm kiếm..." className="header__input-search" />
                    <i className="logo-search fa-solid fa-x"></i>

                    <ul className="header__list">
                        <li className="header__list-item" onClick={() => setIsInputDisplay(!isInputDisplay)}>
                            <i className="search-icon fa-solid fa-magnifying-glass"></i>
                        </li>
                        <li className="header__list-item"><a href="explore.html">EXPLORE</a></li>
                        <li className="header__list-item" onClick={()=>setIsLogin("login")}>
                            <i className="icon-user header-icon fa-solid fa-user"></i>
                        </li>
                        <li className="header__list-item" onClick={()=> navigate('/giỏ-hàng')}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="header__cart-notice">2</span>
                        </li>
                    </ul>
                </div>
            </div>
            {
                isInputDisplay && <div className='search-input'>
                    <input autoFocus type="text" placeholder='Tìm kiếm sản phẩm' />
                </div>
            }
            {
                isLogin === "login" && <Login setIsLogin={setIsLogin}/>
            }
            {
                isLogin === "register" && <Signup setIsLogin={setIsLogin}/>
            }
        </header>
    )
}

export default Header
