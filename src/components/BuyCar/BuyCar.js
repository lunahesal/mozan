import React,{Component} from 'react'
import '../pub/joinPub.css'
import './buyCar.css'
import join_01 from '../images/join_01.jpg'
import yanzheng_03 from '../images/yanzheng_03.jpg'


class BuyCar extends Component{
  render(){
    return (
    <section className='buyCar'>
      <div className="join">
				<div className="joinup">
					<div className="clearfix">
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

				<form className="list">
					<div className="title">
						<input type="checkbox" id="all" className="all" />
						<label for="all">全选</label>
						<span>商品</span>
						<span>单价</span>
						<span>数量</span>
						<span>小计</span>
						<span>操作</span>
					</div>
					<div className="goods clearfix">
						<input type="checkbox"  className="item" />
						<a href="#"><img src={join_01} alt="" /></a>
						<p>
							<a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
							<span>款式：iphone 5</span>
							<span>尺码：XL</span>
						</p>
						<div className="money clearfix">
							<p>￥<span className="price">79.00</span></p>
							<a href="#" className="add">+</a>
							<span className="qty">1</span>
							<a href="#" className="red">-</a>
							<p >￥<span className="tt">79</span></p>
							<a href="#" className="del">x</a>
						</div>
						<div className="delbtn clearfix">
							<a href="#" className="delyes">确定删除</a>
							<a href="#" className="delno">不删除</a>

						</div>
					</div>
					<div className="goods clearfix">
						<input type="checkbox"  className="item" />
						<a href="#"><img src={join_01} alt="" /></a>
						<p>
							<a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
							<span>款式：iphone 5</span>
							<span>尺码：XL</span>
						</p>
						<div className="money clearfix">
							<p>￥<span className="price">90.00</span></p>
							<a href="#" className="add">+</a>
							<span className="qty">1</span>
							<a href="#" className="red">-</a>
							<p >￥<span className="tt"></span></p>
							<a href="#" className="del">x</a>
						</div>
						<div className="delbtn clearfix">
							<a href="#" className="delyes">确定删除</a>
							<a href="#" className="delno">不删除</a>
						</div>
					</div>
					<div className="goods clearfix">
						<input type="checkbox"  className="item" />
						<a href="#"><img src={join_01} alt="" /></a>
						<p>
							<a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
							<span>款式：iphone 5</span>
							<span>尺码：XL</span>
						</p>
						<div className="money clearfix">
							<p>￥<span className="price">90.00</span></p>
							<a href="#" className="add">+</a>
							<span className="qty">1</span>
							<a href="#" className="red">-</a>
							<p >￥<span className="tt"></span></p>
							<a href="#" className="del">x</a>
						</div>
						<div className="delbtn clearfix">
							<a href="#" className="delyes">确定删除</a>
							<a href="#" className="delno">不删除</a>
						</div>
					</div>
					<div className="goods clearfix">
						<input type="checkbox"  className="item" />
						<a href="#"><img src={join_01} alt="" /></a>
						<p>
							<a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
							<span>款式：iphone 5</span>
							<span>尺码：XL</span>
						</p>
						<div className="money clearfix">
							<p>￥<span className="price">90.00</span></p>
							<a href="#" className="add">+</a>
							<span className="qty">1</span>
							<a href="#" className="red">-</a>
							<p >￥<span className="tt"></span></p>
							<a href="#" className="del">x</a>
						</div>
						<div className="delbtn clearfix">
							<a href="#" className="delyes">确定删除</a>
							<a href="#" className="delno">不删除</a>
						</div>
					</div>
					<div className="end">
						<div className="endin clearfix">
							<div className="endleft clearfix">
								<input type="checkbox" id="all1" className='all' />
								<label for="all1">全选</label>
								<a href="#" className="deldown"><i className="iconfont icon-trash"></i>删除</a>
								<div className="delbtn delbtndown clearfix">
									<a href="#" className="delyes">确定删除</a>
									<a href="#" className="delno">不删除</a>
								</div>
								<p>共 <span className="totalqty"></span> 件商品,已选择 <span className="selectnum"></span> 件</p>
								<div className="clearfix">
									<p className="clearfix">
										<span>合计:</span>
										<span>[不含运费]</span>
									</p>
									<p>￥<span className="total">0</span></p>
								</div>
							</div>
							<div className="endright">
								<a href="order.html" className="gosub">去结算</a>
							</div>
						</div>

					</div>
				</form>
				<div className="wrapp">
					<div className="login">
						<div className="inlogin">
							<p className="clearfix">
								<a href="#" className="close">x</a>
							</p>
							<a href="index.html" className="logo1"></a>
							<form>
								<div className="clearfix">
									<label for="tel" className="tel"></label>
									<input type="text" id="tel"value="请输入手机号" />
									<span>请输入正确的手机号</span>
								</div>
								<div className="clearfix">
									<label for="password" className="password"></label>
									<input type="password" id="password" value="请输入密码" />
									<span>请输入正确的密码</span>
								</div>
								<div className="codebox clearfix">
									<input type="text" id="code" className="code" value="请输入验证码" />
									<span className="">请输入正确的密码</span>
									<img src={yanzheng_03} alt="" />
								</div>
								<a href="#" className="load">登录</a>
							</form>
							<div className="forget clearfix">
								<a href="#">忘记密码？</a>
								<a href="#">注册</a>
							</div>
						</div>
						<div className="line"></div>
						<div className="thirdload clearfix">
							<a href="#"><i className="iconfont icon-qq"></i></a>
							<a href="#"><i className="iconfont icon-icon-"></i></a>
							<a href="#"><i className="iconfont icon-weibo"></i></a>
						</div>
					</div>
				</div>
				<div className="empty">
					<div className="inempty">
						<span></span>
						<h3>抓点妖怪</h3>
						<h3>填满为师的取经袋呀~</h3>
					</div>
				</div>
			</div>
		</section>
    )
  }
}
export default BuyCar
