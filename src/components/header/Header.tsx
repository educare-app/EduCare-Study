import { Link } from "react-router-dom"
import EduCareLogo from "../../assets/logo/EduCareLogo.png"
import Menu from '../../assets/menu.png'
import Close from '../../assets/close.png'
import "./css/header.css"
import { useState } from "react"

function Header() {
  const [MenuClicked, SetMenuClicked] = useState(false)

  const handleMenu = function() {
      if(MenuClicked){
        SetMenuClicked(false)
      }else {
        SetMenuClicked(true)
      }
  }

  return (
    <section className="section-one-wrapper">
        <header className="header-wrapper">
          <div className="header-options">
              <Link to='/'>
                <div id="header-logo">
                      <img src={EduCareLogo} alt="home-logo" className="logo"/>
                </div>
              </Link>
              <div className="header-menu">
                <nav id="navbar">
                    <div className="nav-links">
                      <Link to='/' id="home">Home</Link>
                    </div>
                    <div className="nav-links">
                      <Link to='/about' id="home">About</Link>
                    </div>
                    <div className="nav-links">
                      <Link to='/services' id="home">Services</Link>
                    </div>
                    <div className="nav-links">
                      <Link to='/career' id="home">Career</Link>
                    </div>
                    
                </nav>
              </div>
              <div className="header-login-wrapper">
                <button id="header-login-btn">Login</button>
              </div>
          </div>

          <div className="menu-btn-container">
            <button id="menu"
              onClick={handleMenu}
            >
              <img src={MenuClicked ? Close : Menu} alt="manu-bar" id="menu-img"/>
            </button>
          </div>

          {/* RESPONSIVE HEADER  */}

          <div id={MenuClicked ? "responsive-header" : "unchecked"} >
            <div className="res-header-menu">
              <nav id="res-navbar">
                <div className="res-nav-links">
                  <Link to='/' id="home">Home</Link>
                </div>
                <div className="res-nav-links">
                  <Link to='/about' id="home">About</Link>
                </div>
                <div className="res-nav-links">
                  <Link to='/services' id="home">Services</Link>
                </div>
                <div className="res-nav-links">
                  <Link to='/career' id="home">Career</Link>
                </div>
              </nav>
            </div>
            <div className="res-header-login-wrapper">
              <button id="header-login-btn">Login</button>
            </div>
          </div>
      </header>
    </section>
  )
}

export default Header