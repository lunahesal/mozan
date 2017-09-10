import React,{Component} from 'react'
import './main.css'
import Home from '../Home/Home'
import JoinPre from '../JoinPre/JoinPre'
import BuyCar from '../BuyCar/BuyCar'
import Cashier from '../Cashier/Cashier'
import Order from '../Order/Order'
class Main extends Component{
  render(){
    return (
      <div className='main'>
        <Home />
      </div>
    )
  }
}
export default Main
