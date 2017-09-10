import React,{ Component } from 'react'
import './header.css'
import bag from '../icons/bag.svg'
import search from '../icons/search.svg'

class Header extends Component{
  render(){
    const {showLoadForm,currentUser,logout} = this.props
    const logoutStr = (
      <span className="logout-str">
        {currentUser} |
         <span onClick={logout}
          className='logout-bth'>
           退出
        </span>
      </span>
    )
    const loadStr = (
      <a href="javascript:;" onClick={showLoadForm}>
        登录
      </a>
    )
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
                  {currentUser?logoutStr:loadStr}
                  <span> / </span>
                  <a href="#" className='sign'>注册</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Header
