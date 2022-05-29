import React from 'react'
import "./Footer.scss"
import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/tmovie.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
      <div className="footer-container container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">TB_Movies</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FQA</Link>
            <Link to="/">Premium</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
