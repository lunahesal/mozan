import React,{Component} from 'react'
import './main.css'
import Home from '../Home/Home'
import JoinPre from '../JoinPre/JoinPre'
import BuyCar from '../BuyCar/BuyCar'
import Cashier from '../Cashier/Cashier'
import Order from '../Order/Order'
import {Route} from 'react-router-dom'
class Main extends Component{
  render(){
    return (
      <div className='main'>
        <Route exact path='/' component={Home} />
        <Route path='/mozan/joinpre' component={JoinPre} />
        <Route path='/mozan/buycar' component={BuyCar} />
        <Route path='/mozan/order' component={Order} />
        <Route path='/mozan/cashier' component={Cashier} />
      </div>
    )
  }
}
export default Main
