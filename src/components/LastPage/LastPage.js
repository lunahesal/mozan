import React,{Component} from 'react'
import './last-page.css'
import done_03 from '../images/done_03.jpg'
class App extends Component{
  render(){
    return (
      <div className="last-page">
        <div className="lastup">
          <img src={done_03} alt="" />
        </div>
        <div className="doneword">
          <p>
            支付成功！
          </p>
          <div>
            <p>
              <span>订单号：12345598946578</span>
              <span>成功支付：￥168.00</span>
            </p>
            <a href="#">继续逛逛</a>
            <a href="#">查看订单</a>
          </div>
        </div>
      </div>
    )
  }
}
export default App
