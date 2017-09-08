import React,{Component} from 'react'
import './load.css'
import yanzheng_03 from '../images/yanzheng_03.jpg'
import qq from './QQ.svg'
import sina from './sina.svg'
import wxx from './wx.svg'
class Load extends Component{
  state = {
    userName:'',
    password:''
  }
  changeUserName = (e) => {
    this.setState({
      userName:e.target.value
    })
  }
  changePassword = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  handleSubmit =() => {
    console.log(this.state.userName)
    this.props.load(this.state.userName)
    this.props.hideLoadForm()
  }
  render(){
    const { hideLoadForm } = this.props
    const { userName,password } = this.state
    return (
      <div className='load'>
        <div className="wrapp">
          <div className="login">
            <div className="inlogin">
              <p>
                <a href="javascript:;" onClick={hideLoadForm} className="close">x</a>
              </p>
              <a href="index.html" className="logo1"></a>
              <form>
                <div>
                  <label htmlFor="tel" className="tel"></label>
                  <input type="text" id="tel" value={userName}
                    onChange={this.changeUserName} />
                  <span>请输入正确的手机号</span>
                </div>
                <div>
                  <label htmlFor="password" className="password"></label>
                  <input type="password" id="password" value={password}
                    onChange={this.changePassword} />
                  <span>请输入正确的密码</span>
                </div>
                <div className="codebox">
                  <input type="text" id="code" className="code" value="请输入验证码" />
                  <span className="">请输入正确的密码</span>
                  <img src={yanzheng_03} alt="" />
                </div>
                <a href="javascript:;" className="load"
                  onClick={this.handleSubmit}>登录</a>
              </form>
              <div className="forget">
                <a href="#">忘记密码？</a>
                <a href="#">注册</a>
              </div>
            </div>
            <div className="line"></div>
            <div className="thirdload clearfix">
              <a href="#"><img src={qq} alt="" /></a>
              <a href="#"><img src={wxx} alt=""/></a>
              <a href="#"><img src={sina} alt=""/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Load
