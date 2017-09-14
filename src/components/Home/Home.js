import React,{ Component } from 'react'
import './home.css'
import Banner from '../Banner/Banner'
import Count from '../Count/Count'
import Select from '../Select/Select'
import { Link } from 'react-router-dom'
class Home extends Component{
  render(){
    return (
      <section className='home'>
        <div className="onmain">
          <Banner />
          <div className="inmain">
            <div className="mainup">
              <div className="left">
                <p className="">
                  <img src={require('../images/pic03_04.png')} />
                  龙之谷六周年限定礼包大Boss 冰龙款男士T恤
                </p>
                <div className='leftdown'>
                  <div className="over ">
                    <p>距预售结束</p>
                    <Count />
                  </div>
                  <div>
                    <p>相关专区</p>
                    <a href="#">
                      <img src={require('../images/pic_03.png')} />
                    </a>
                  </div>
                </div>
              </div>
              <Select />
            </div>
            <div className="maindown">
              <Link to='/mozan/joinpre' className="sum">立即预购</Link>            
            </div>
          </div>
          <div className="picc">
          <img src={require('../images/picc_03.jpg')} />
          </div>
        </div>
      </section>
    )
  }
}
export default Home
