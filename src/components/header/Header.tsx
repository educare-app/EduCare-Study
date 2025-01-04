import { Link } from "react-router-dom"
import EduCareLogo from "../../assets/logo/EduCareLogo.png"
import "./css/header.css"

function Header() {
  return (
    <div className="section-one-wrapper">
      <div className="section-one">
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
        </header>
      </div>
    </div>
  )
}

export default Header