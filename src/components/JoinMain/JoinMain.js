import React,{Component} from 'react'
import '../pub/joinPub.css'
import './joinMain.css'
import join_01 from '../images/join_01.jpg'

class JoinMain extends Component{
  render(){
    return (
      <section className='joinMain'>
        <div className='join'>
          <div className="joinup">
  					<div>
  						<p>已成功加入购物车！</p>
  					</div>
  				</div>
  				<div></div>
  				<div>
  					<div className="pic">
  						<a href="#">
  							<img src={join_01} alt="" />
  						</a>
  						<a href="#" className="words">
  						龙之谷六周年限定礼包大Boss 冰龙款男士T恤
  						</a>
  					</div>
  					<div className="sizes">
  						<span>款式：iphone 5</span>
  						<span>尺码：XL</span>
  						<span>数量：x1</span>
  					</div>
  					<div className="btn">
  						<a href="index.html">返回</a>
  						<a href="buycar.html">去购物车结算</a>
  					</div>
  				</div>
        </div>
      </section>

    )
  }
}
export default JoinMain
