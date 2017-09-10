import React,{Component} from 'react'
import './paywx.css'
import wx_pay_03 from '../images/wx_pay_03.jpg'
import wx_pay2_03 from '../images/wx_pay2_03.png'

class Paywx extends Component{
  render(){
    return (
      <div className="paywx">
        <p>微信支付</p>
        <div className="paytime">
          <p><span>距离二维码过期还剩
            <em className="timelast">60</em>
            秒</span>
            <span>过期后请刷新页面重新获取二维码</span>
          </p>
          <img src={wx_pay_03} alt="" />
          <p className="downtips">
            <span>请使用微信扫一扫</span>
            <span>扫描二维码支付！</span>
          </p>
        </div>
        <div>
          <img src={wx_pay2_03} alt="" />
        </div>
      </div>
    )
  }
}
export default Paywx
