import React,{Component} from 'react'
import './join-pre.css'
import join_01 from '../images/join_01.jpg'
import {Link} from 'react-router-dom'

class JoinPre extends Component{
  render(){
    return (
      <section className='join-pre'>
        <div className='joinpre'>
          <div className="joinpreup">
  					<div>
  						<p>已成功加入购物车！</p>
  					</div>
  				</div>
  				<div></div>
  				<div className='joinpreList'>
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
              <Link to='/'>返回</Link>
              <Link to='/mozan/buycar'>去购物车结算</Link>

  					</div>
  				</div>
        </div>
      </section>

    )
  }
}
export default JoinPre
