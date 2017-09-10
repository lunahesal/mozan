import React,{Component} from 'react'
import './order.css'
import NewWrapp from '../NewWrapp/NewWrapp'
import Adm from '../Adm/Adm'
import Adrrr from '../Adrrr/Adrrr'
import Phone from '../Phone/Phone'
import NewAdd from '../NewAdd/NewAdd'
import join_01 from '../images/join_01.jpg'
import yushou_03 from '../images/yushou_03.png'

class Order extends Component{
  render(){
    return (
      <section className='order'>
  			<div className="orderin">
  				<div className="orderup">
  					<div>
  						<p>
  							收银台
  						</p>
  						<div className="word">
  							<span>购物车</span>
  							<span>填写订单</span>
  							<span>付款，购买成功</span>
  						</div>
  					</div>
  				</div>
  				<div></div>
  				<div className="orderdown">
  					<div className="adr">
  						<p>收获地址</p>
  						<a href="#" className="setnew"><NewAdd />新增地址</a>
  					</div>
  					<div className="listbox">
  						<div></div>
  						<div className="list active1">
  							<ul>
  								<li>
  									<Adm />阿不来提·阿不杜热西提
  								</li>
  								<li>
  									<Adrrr />
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<Phone />186***5194
  								</li>
  							</ul>
  							<div>
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn2">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list active">
  							<ul>
  								<li>
  									<Adm />阿不来提·阿不杜热西提
  								</li>
  								<li>
  									<Adrrr />
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<Phone />186***5194
  								</li>
  							</ul>
  							<div>
  								<a href="#" className="set goset">设为默认</a>
  								<span className="setdown pretermission">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn2">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list">
  							<ul>
  								<li>
  									<Adm />阿不来提·阿不杜热西提
  								</li>
  								<li>
  									<Adrrr />
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<Phone />186***5194
  								</li>
  							</ul>
  							<div>
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn2">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list">
  							<ul>
  								<li>
  									<Adm />阿不来提·阿不杜热西提1111
  								</li>
  								<li>
  									<Adrrr />
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<Phone />186***5194
  								</li>
  							</ul>
  							<div>
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn2">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list">
  							<ul>
  								<li>
  									<Adm />阿不来提·阿不杜热西提1111
  								</li>
  								<li>
  									<Adrrr />
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<Phone />186***5194
  								</li>
  							</ul>
  							<div>
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn2">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list">
  							<ul>
  								<li>
  									<Adm />阿不来提·阿不杜热西提1111
  								</li>
  								<li>
  									<Adrrr />
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<Phone />186***5194
  								</li>
  							</ul>
  							<div>
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn2">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  					</div>
  					<div>
  						<div>
  							<div className="showmore">
  								<a href="#" className="more">显示更多</a>
  								<a href="#" className="toup">向上收起</a>
  							</div>
  						</div>
  					</div>

  					<div className="adr goods">
  						<p>商品信息</p>
  						<a href="#">返回购物车修改</a>
  					</div>
  					<div className="listd">
  						<div className="pic">
  							<a href="#">
  								<img src={join_01} alt="" />
  							</a>
  							<span><img src={yushou_03} alt="" /></span>
  							<a href="#" className="words">
  							龙之谷六周年限定礼包大Boss 冰龙款男士T恤
  							</a>
  						</div>
  						<div className="size">
  							<span>款式：iphone 5</span>
  							<span>尺码：XL</span>
  							<span>￥<em>79</em></span>
  							<span>x1</span>
  						</div>
  					</div>
  					<div className="listd">
  						<div className="pic">
  							<a href="#">
  								<img src={join_01} alt="" />
  							</a>
  							<a href="#" className="words">
  							龙之谷六周年限定礼包大Boss 冰龙款男士T恤
  							</a>
  						</div>
  						<div className="size">
  							<span>款式：iphone 5</span>
  							<span>尺码：XL</span>
  							<span>￥<em>79</em></span>
  							<span>x1</span>
  						</div>
  					</div>
  					<div className="messege">
  						<p>
  							<span>支付方式</span>
  							<a href="#">在线支付</a>
  						</p>
  						<p>
  							<span>物流方式</span>
  							<a href="#">普通快递</a>
  						</p>
  						<p className="invoice">
  							<span>发票信息</span>
  							<a href="#" className="no">不开发票</a>
  							<a href="#" className="yes active3">开发票</a>
  						</p>
  						<p className="yesinvoice">

  							<input type="text" value="请输入个人/单位名称" />
  							<a href="#" className='save'>保存</a>
  						</p>
  					</div>
  					<div className="other">
  						<p>备注</p>
  						<input type="text" className="text" />
  						<p>
  							<span>数量</span>
  							<span>单价</span>
  							<span>小计</span>
  							<span>优惠</span>
  							<span>运费</span>
  							<span>实际应付</span>
  						</p>
  						<p>
  							<span>2</span>
  							<span>x</span>
  							<span>79.00</span>
  							<span>=</span>
  							<span>￥158.00</span>
  							<span>-</span>
  							<span>￥0.00</span>
  							<span>+</span>
  							<span>￥10.00</span>
  							<span>=</span>
  							<span>￥168.00</span>
  						</p>
  						<div>
  							<a href="cashier.html" className="btn">提交订单</a>
  						</div>
  					</div>
  				</div>

  				{
            // 新增地址弹窗
          }

  			</div>
        <NewWrapp />
  		</section>
    )
  }
}
export default Order
