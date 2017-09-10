import React,{ Component } from 'react'
import './footer.css'
import guider from '../icons/guider.svg'
import pay from '../icons/pay.svg'
import way from '../icons/way.svg'
import service from '../icons/service.svg'
import tel from '../icons/tel.svg'
import about from '../icons/about.svg'
import free from '../icons/free.svg'
import link from '../icons/link.svg'



import taobao from '../icons/taobao.svg'
import wx from '../icons/wx.svg'
import telphone from '../icons/telphone.svg'
class Footer extends Component{
  render(){
    return (
      <div className='footer'>
        <div className="footerup">
          <div>
            <div className="helpmessege">
              <h3>帮助信息</h3>
              <div>
                <ul>
                  <li><img src={guider} alt=""/><a href="#">购物指南</a></li>
                  <li><img src={pay} alt=""/><a href="#">支付方式</a></li>
                  <li><img src={way} alt=""/><a href="#">配送方式</a></li>
                  <li><img src={service} alt=""/><a href="#">售后服务</a></li>
                </ul>
                <ul>
                  <li><img src={tel} alt=""/><a href="#">服务中心</a></li>
                  <li><img src={about} alt=""/><a href="#">关于我们</a></li>
                  <li><img src={free} alt=""/><a href="#">免责条款</a></li>
                  <li><img src={link} alt=""/><a href="#">友情链接</a></li>
                </ul>
              </div>
            </div>
            <div className="footertcontain">
              <h3>关注我们</h3>
              <div>
                <span></span>
              </div>
              <div>
                <img src={taobao} alt=""/>
                <img src={wx} alt=""/>
              </div>
            </div>
            <div className='telphone'>
              <h3>客服热线</h3>
              <div>
                <img src={telphone} alt=""/>
                <div>
                  <span>400 113 5353</span>
                  <span>[周一至周五 9:00-18:00]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerdown">
          <div>
            <div>
              <a href="#"></a>
            </div>
            <div>
              <span>北京开普勒科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</span>
              <span>地址：北京市朝阳区建国路93号院4号楼4层505</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
