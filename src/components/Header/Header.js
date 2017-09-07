import React,{ Component } from 'react'
import '../pub/pub.css'

import './header.css'
import bag from '../icons/bag.svg'
import search from '../icons/search.svg'

class Header extends Component{
  render(){
    return (
      <div className='header'>
          <div className="top">
            <div className="topin">
              <a href="#" className="menu">
                <span></span>
                <span></span>
                <span></span>
              </a>
              <a href="#" className="logo"></a>
              <div className="topother">
                <a href="#" className="search">
                  <img className='search' src={search} alt="" />
                </a>
                <a href="#" className="cart">
                  <img className='bag' src={bag} alt="" />
                </a>
                <div>
                  <a href="#">登录</a>
                  <span> / </span>
                  <a href="#">注册</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Header
