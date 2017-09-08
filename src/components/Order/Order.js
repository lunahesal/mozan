import React,{Component} from 'react'
import '../pub/joinPub.css'
import './order.css'
import Adm from '../Adm/Adm'
import Adr from '../Adr/Adr'
import Telp from '../Telp/Telp'

import join_01 from '../images/join_01.jpg'
import yushou_03 from '../images/yushou_03.png'

class Order extends Component{
  render(){
    return (
      <section className='order'>
  			<div className="join">
  				<div className="joinup">
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
  				<div className="joindown">
  					<div className="adr">
  						<p>收获地址</p>
  						<a href="#" className="setnew"><i className="iconfont icon-xinzeng"></i>新增地址</a>
  					</div>
  					<div className="listbox">
  						<div></div>
  						<div className="list active1">
  							<ul>
  								<li>
  									<i className="iconfont icon-weibiaoti1"></i>阿不来提·阿不杜热西提
  								</li>
  								<li>
  									<i className="iconfont icon-weibiaoti3"></i>
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<i className="iconfont icon-phone"></i>186***5194
  								</li>
  							</ul>
  							<div className="clearfix">
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn clearfix">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list active clearfix">
  							<ul>
  								<li>
  									<i className="iconfont icon-weibiaoti1"></i>阿不来提·阿不杜热西提
  								</li>
  								<li>
  									<i className="iconfont icon-weibiaoti3"></i>
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<i className="iconfont icon-phone"></i>186***5194
  								</li>
  							</ul>
  							<div className="clearfix">
  								<a href="#" className="set goset">设为默认</a>
  								<span className="setdown pretermission">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn clearfix">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list clearfix">
  							<ul>
  								<li>
  									<i className="iconfont icon-weibiaoti1"></i>阿不来提·阿不杜热西提
  								</li>
  								<li>
  									<i className="iconfont icon-weibiaoti3"></i>
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<i className="iconfont icon-phone"></i>186***5194
  								</li>
  							</ul>
  							<div className="clearfix">
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn clearfix">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list clearfix">
  							<ul>
  								<li>
  									<i className="iconfont icon-weibiaoti1"></i>阿不来提·阿不杜热西提1111
  								</li>
  								<li>
  									<i className="iconfont icon-weibiaoti3"></i>
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<i className="iconfont icon-phone"></i>186***5194
  								</li>
  							</ul>
  							<div className="clearfix">
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn clearfix">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list clearfix">
  							<ul>
  								<li>
  									<i className="iconfont icon-weibiaoti1"></i>阿不来提·阿不杜热西提1111
  								</li>
  								<li>
  									<i className="iconfont icon-weibiaoti3"></i>
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<i className="iconfont icon-phone"></i>186***5194
  								</li>
  							</ul>
  							<div className="clearfix">
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn clearfix">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list clearfix">
  							<ul>
  								<li>
  									<i className="iconfont icon-weibiaoti1"></i>阿不来提·阿不杜热西提1111
  								</li>
  								<li>
  									<i className="iconfont icon-weibiaoti3"></i>
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<i className="iconfont icon-phone"></i>186***5194
  								</li>
  							</ul>
  							<div className="clearfix">
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn clearfix">
  								<a href="#" className="delyes">确定删除</a>
  								<a href="#" className="delno">不删除</a>
  							</div>
  						</div>
  						<div className="list clearfix">
  							<ul>
  								<li>
  									<i className="iconfont icon-weibiaoti1"></i>阿不来提·阿不杜热西提1111
  								</li>
  								<li>
  									<i className="iconfont icon-weibiaoti3"></i>
  								新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
  								<li>
  									<i className="iconfont icon-phone"></i>186***5194
  								</li>
  							</ul>
  							<div className="clearfix">
  								<a href="#" className="set">设为默认</a>
  								<span className="setdown">默认</span>
  								<a href="#" className="editor"><i className="iconfont icon-bianji"></i>编辑</a>
  								<a href="#" className="del"><i className="iconfont icon-trash"></i>删除</a>
  							</div>
  							<div className="delbtn clearfix">
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
  						<p className="clearfix">
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
  				<div className="wrapp">
  					<div className="newadr">
  						<div className="innew">
  							<div className=" inup clearfix">
  								<h3>新增地址</h3>
  								<div>
  									<a href="#" className="close">x</a>
  								</div>
  							</div>
  							<form>
  								<div className="clearfix">
  									<div className="administrator">
  										<label for="adm">
  											<span>*</span>收货人
  										</label>
  										<input type="text" id="adm" className="inputpub" />
  										<span>请填写收货人!</span>
  									</div>
  									<div className="tel">
  										<label for="telp">
  											<span>*</span>联系电话
  										</label>
  										<input type="text" id="telp" className="inputpub" />
  										<span>填写的手机格式错误!</span>
  									</div>
  								</div>
  								<div className="clearfix">
  									<div>
  										<label>
  											<span>*</span>所在地区
  										</label>
  									</div>
  									<div className="noempty">
  										<span>请填写完整的所在地区!</span>
  									</div>
  								</div>
  								<div className="outer">
  									<select name="province" id="province">
  										<option value="请选择">请选择</option>
  									</select>
  									<select name="city" id="city">
  										<option value="请选择">请选择</option>
  									</select>
  									<select name="town" id="town">
  										<option value="请选择">请选择</option>
  									</select>
  								</div>

  								<div className="clearfix">
  									<div className="address">
  										<label for="addr">
  											<span>*</span>详细地址
  										</label>
  										<input type="text" id="addr" className="inputpub" value="请填写详细地址" />
  										<span>请填写详细地址!</span>
  									</div>
  								</div>
  								<div className="clearfix">
  									<div className="addrother">
  										<label for="ather">
  											地址别名
  										</label>
  										<input type="text" id="aother" />
  										<span></span>
  									</div>
  									<div className="othermore">
  										<label>
  											常用别名
  										</label>
  										<a href="#">家</a>
  										<a href="#">公司</a>
  										<a href="#">父母家</a>
  									</div>
  								</div>
  								<div className="lastone clearfix">
  									<div className="last">
  										<input type="checkbox" />
  										<em>设为默认地址</em>
  									</div>
  									<div className="lastbtn">
  										<a href="#" className="save">保存地址</a>
  									</div>
  								</div>


  							</form>
  						</div>
  					</div>
  				</div>
  			</div>

  		</section>
    )
  }
}
export default Order
