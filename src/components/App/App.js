import React,{Component} from 'react'
import './app.css'
import Layout from '../Layout/Layout'
import Main from '../Main/Main'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
class App extends Component{
  render(){
    return (
      <Router>
        <div className='app'>
          <Layout>
          <Main />
          </Layout>
        </div>
      </Router>

    )
  }
}
export default App
