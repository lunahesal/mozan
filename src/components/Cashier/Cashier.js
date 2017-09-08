import React,{Component} from 'react'
import '../pub/joinPub.css'
import './cashier.css'
import Adm from '../Adm/Adm'
import Adr from '../Adr/Adr'
import Telp from '../Telp/Telp'
class Cashier extends Component{
  render(){
    return (
      <section>
  			<div className="join">
  				<div className="joinup">
  					<div className="clearfix">
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
  				<div className="joindown">
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
  							<p><span><Telp />182****1234</span><span><Adm />迪里木拉图</span></p>
  							<p><Adr />新疆乌鲁木齐56园57栋3单元9号</p>
  						</div>
  					</div>
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
  			</div>
  		</section>
    )
  }
}
export default Cashier
