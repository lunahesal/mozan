import React,{Component} from 'react'
import './main.css'
import Home from '../Home/Home'
import JoinMain from '../JoinMain/JoinMain'
import BuyCar from '../BuyCar/BuyCar'
class Main extends Component{
  render(){
    return (
      <div className='main'>
        <BuyCar />
      </div>
    )
  }
}
export default Main
