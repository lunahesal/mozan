import React,{Component} from 'react'
import './cashier-wrap.css'

class CashierWrap extends Component{
  render(){
    return (
      <div className="cashier-wrap">
				<div className="cashier-wrapin">
					<div>
						<div className="cashier-wraptitle">
							<span>收银台</span>
							<a href="#" className="cashier-close">X</a>
						</div>
						<div className="cashier-wrap-main">
							<p>
								<span>请您在新打开的网上银行页面进行支付</span>
								<span>支付完成前请不要关闭该窗口</span>
							</p>
							<div>
								<a href="#">已完成支付</a>
								<a href="#">支付遇到问题</a>
							</div>
						</div>
						<div className="cashier-wrap-other">
							<a href="#">选择其他支付方式</a>
						</div>
					</div>
				</div>
			</div>
    )
  }
}
export default CashierWrap
