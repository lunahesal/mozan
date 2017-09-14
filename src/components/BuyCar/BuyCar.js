import React,{Component} from 'react'

import './buy-car.css'
import join_01 from '../images/join_01.jpg'
import yanzheng_03 from '../images/yanzheng_03.jpg'
import Load from '../Load/Load'
import Delete from '../Delete/Delete'
import { Link } from 'react-router-dom'


class BuyCar extends Component{
  render(){
    return (
    <section className='buy-car'>
      <div className="buycar">
				<div className="buycarup">
					<div>
						<p>购物车
							<b>[ <span className="totalqty"></span>件 ]</b>
						</p>
						<div className="word">
							<span>购物车</span>
							<span>填写订单</span>
							<span>付款，购买成功</span>
						</div>
					</div>
				</div>
				<div></div>
				<form className="listone">
					<div className="title">
						<input type="checkbox" id="all" className="all" />
						<label htmlFor="all">全选</label>
						<span>商品</span>
						<span>单价</span>
						<span>数量</span>
						<span>小计</span>
						<span>操作</span>
					</div>
					<div className="goodsone">
						<input type="checkbox"  className="item" />
						<a href="#"><img src={join_01} alt="" /></a>
						<p>
							<a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
							<span>款式：iphone 5</span>
							<span>尺码：XL</span>
						</p>
						<div className="money">
							<p>￥<span className="price">79.00</span></p>
							<a href="#" className="add">+</a>
							<span className="qty">1</span>
							<a href="#" className="red">-</a>
							<p >￥<span className="tt">79</span></p>
							<a href="#" className="del">x</a>
						</div>
						<div className="delbtn delup">
							<a href="#" className="delyes">确定删除</a>
							<a href="#" className="delno">不删除</a>
						</div>
					</div>
					<div className="goodsone">
						<input type="checkbox"  className="item" />
						<a href="#"><img src={join_01} alt="" /></a>
						<p>
							<a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
							<span>款式：iphone 5</span>
							<span>尺码：XL</span>
						</p>
						<div className="money">
							<p>￥<span className="price">90.00</span></p>
							<a href="#" className="add">+</a>
							<span className="qty">1</span>
							<a href="#" className="red">-</a>
							<p >￥<span className="tt"></span></p>
							<a href="#" className="del">x</a>
						</div>
						<div className="delbtn delup">
							<a href="#" className="delyes">确定删除</a>
							<a href="#" className="delno">不删除</a>
						</div>
					</div>
					<div className="goodsone">
						<input type="checkbox"  className="item" />
						<a href="#"><img src={join_01} alt="" /></a>
						<p>
							<a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
							<span>款式：iphone 5</span>
							<span>尺码：XL</span>
						</p>
						<div className="money">
							<p>￥<span className="price">90.00</span></p>
							<a href="#" className="add">+</a>
							<span className="qty">1</span>
							<a href="#" className="red">-</a>
							<p >￥<span className="tt"></span></p>
							<a href="#" className="del">x</a>
						</div>
						<div className="delbtn delup">
							<a href="#" className="delyes">确定删除</a>
							<a href="#" className="delno">不删除</a>
						</div>
					</div>
					<div className="goodsone">
						<input type="checkbox"  className="item" />
						<a href="#"><img src={join_01} alt="" /></a>
						<p>
							<a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
							<span>款式：iphone 5</span>
							<span>尺码：XL</span>
						</p>
						<div className="money">
							<p>￥<span className="price">90.00</span></p>
							<a href="#" className="add">+</a>
							<span className="qty">1</span>
							<a href="#" className="red">-</a>
							<p >￥<span className="tt"></span></p>
							<a href="#" className="del">x</a>
						</div>
						<div className="delbtn delup">
							<a href="#" className="delyes">确定删除</a>
							<a href="#" className="delno">不删除</a>
						</div>
					</div>
					<div className="end">
						<div className="endin">
							<div className="endleft">
								<input type="checkbox" id="all1" className='all' />
								<label htmlFor="all1">全选</label>
								<a href="#" className="deldown"><Delete />删除</a>
								<div className="delbtn delbtndown">
									<a href="#" className="delyes">确定删除</a>
									<a href="#" className="delno">不删除</a>
								</div>
								<p>共 <span className="totalqty"></span> 件商品,已选择 <span className="selectnum"></span> 件</p>
								<div className="endtotal">
									<p>
										<span>合计:</span>
										<span>[不含运费]</span>
									</p>
									<p>￥<span className="total">0</span></p>
								</div>
							</div>
							<div className="endright">
                <Link to='/mozan/order' className="gosub">去结算</Link>
							</div>
						</div>
					</div>
				</form>
				<div className="empty">
					<div className="inempty">
						<span></span>
						<h3>抓点妖怪</h3>
						<h3>填满为师的取经袋呀~</h3>
					</div>
				</div>
			</div>
      {
        // <Load />
      }

		</section>
    )
  }
}
export default BuyCar
