import React, { useState } from 'react'
import {
  MdExpandMore,
  MdExpandLess,
  MdSearch,
  MdShoppingCart,
} from 'react-icons/md'
import logo from '../../images/logo.png'
import './styles.css'
import { Link } from 'gatsby'

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false)

  function toggle() {
    setIsMobile(!isMobile)
  }

  function toggleSubMenu() {
    setIsShopMenuOpen(!isShopMenuOpen)
  }
  return (
    <>
      <div className="TopHeader">
        <div className="flex-item-center">
          VENTE D'OBJETS DE DÉCORATION MADE IN BALI ● SHIPPING WORLDWIDE
        </div>
        <div className="flex-item-right navbar-link">
          <a href="/" aria-label="link to expand menu">
            MENU
            <button
              id="btnSubMenu"
              className="toggleSubMenu"
              onClick={toggleSubMenu}
              aria-label="SubMenu Button"
            >
              {isShopMenuOpen ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </a>
        </div>
      </div>
      <nav className="Navbar center">
        <div className="flex-item-center">
          <div className="navbar-home">
            <Link to={'/'}>
              <img className="logo" src={logo} alt="KI logo" />
            </Link>
            <button
              id="btnMenu"
              className="toggle"
              onClick={toggle}
              aria-label="Menu Button"
            >
              {isMobile ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </div>
          <ul className={'navbar-links ' + (isMobile ? 'opened' : 'closed')}>
            <li className="navbar-link">
              <Link to={'/'} aria-label="Home page link">
                HOME
              </Link>
            </li>
            <li className="navbar-link">
              <Link to={''} className="toggleSubMenu" onClick={toggleSubMenu}>
                SHOP
                {isShopMenuOpen ? <MdExpandLess /> : <MdExpandMore />}
              </Link>
              <ul
                className={
                  'navbar-sublinks ' + (isShopMenuOpen ? 'opened' : 'closed')
                }
              >
                <li className="navbar-sublink">Test</li>
                <li className="navbar-sublink">Test</li>
                <li className="navbar-sublink">Test</li>
                <li className="navbar-sublink">Test</li>
              </ul>
            </li>
            <li className="navbar-link">
              <Link to={'/'}>PERSONAL SHOPPING</Link>
            </li>
            <li className="navbar-link">
              <Link to={'/'}>STORY</Link>
            </li>
            <li className="navbar-link">
              <Link to={'/'}>INSTAGRAM</Link>
            </li>
          </ul>
        </div>
        <div className="flex-item-right">
          <ul className={'navbar-links ' + (isMobile ? 'opened' : 'closed')}>
            <li className="navbar-link">
              <Link to={'/'} aria-label="mobile menu link">
                <MdSearch />
              </Link>
            </li>
            <li className="navbar-link">
              <Link to={'/cart'} aria-label="Cart page link">
                <MdShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation
