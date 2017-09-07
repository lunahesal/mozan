import React,{Component} from 'react'
import './app.css'
import Layout from '../Layout/Layout'
import Main from '../Main/Main'
import JoinMain from '../JoinMain/JoinMain'
import BuyCar from '../BuyCar/BuyCar'
class App extends Component{
  render(){
    return (
      <div className='app'>
        <Layout>
        <BuyCar />
        </Layout>
      </div>
    )
  }
}
export default App
