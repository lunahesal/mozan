import React,{Component} from 'react'
import './cashier.css'
import Adm from '../Adm/Adm'
import Adrrr from '../Adrrr/Adrrr'
import Phone from '../Phone/Phone'
import Paywx from '../Paywx/Paywx'
import LastPage from '../LastPage/LastPage'
import CashierWrap from '../CashierWrap/CashierWrap'

class Cashier extends Component{
  render(){
    return (
      <section>
  			<div className="cashier">
  				<div className="cashierup">
  					<div>
  						<p>
  							收银台
  						</p>
  						<div className="word">
  							<span>购物车</span>
  							<span>填写订单</span>
  							<span className='wordthr'>付款，购买成功</span>
  						</div>
  					</div>
  				</div>
  				<div></div>
  				<div className="cashierdown">
  					<div className="downone">
  						<p className='please'>订单提交成功，请您尽快付款！</p>
              <div className='tip'>
                <p className="time">请您在提交订单后<span>24小时</span>内完成支付，否则订单会自动取消</p>
    						<p className="mny">应付金额：<span>￥<em>168</em></span></p>
              </div>

  					</div>
  					<div className="numm">
  						<p>订单号：1234567898</p>
  						<div className="adress">
  							<p><span><Phone />182****1234</span><span><Adm />迪里木拉图</span></p>
  							<p><span><Adrrr />新疆乌鲁木齐56园57栋3单元9号</span></p>
  						</div>
  					</div>
            <div className="onway">
              <div className="way">
    						<p>选择支付方式</p>
    						<div>
    							<a href="#" className="ali"></a>
    						</div>
    						<div>
    							<a href="#" className="wmp"></a>
    						</div>

    					</div>
    					<div className="pay">
    						<a href="#" className="gopay">付 款</a>
    					</div>
            </div>
            {
              //  微信支付
             }
					  <Paywx />

  				</div>
          {
          // 支付完成
          }
          <LastPage />
  			</div>
        <CashierWrap />
  		</section>
    )
  }
}
export default Cashier
