import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")

    return (
        <div className='navbar'>
            <Link to="/">
            <img src={assets.logo} className='logo' alt="logo" />
            </Link>

            <ul className="navbar-menu">
                <Link  to='/'onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}  >Menu</a>
                <a href='#app-download'  onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} >Mobile-app</a>
                <a  href='#footer'  onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""} >About-us</a>


            </ul>

            <div className="navbar_right">
                <Link to="/" >
                <img src={assets.search_icon} alt="search" />
                </Link>

                <div className='navbar-search-icon'>
                    <Link to='/cart' >  <img src={assets.basket_icon} alt="basket" /> </Link>
                    <div className='dot'></div>
                </div>

                <div>
                    <button onClick={()=>setShowLogin(true)}>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
