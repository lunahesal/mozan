import React,{Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Load from '../Load/Load'
class Layout extends Component{
  state ={
    showForm:false,
    currentUser:''
  }
  logout = () => {
    this.setState({
    showForm:false,
    currentUser:''
    })
  }
  showLoadForm = () => {
    this.setState({
      showForm:true
    })
  }
  hideLoadForm = () => {
    this.setState({
      showForm:false
    })
  }
  load = (userName) => {
    this.setState({
      currentUser:userName
    })
  }
  render(){
    const { showForm,currentUser } = this.state
    return (
      <div className='layout'>
        <Header
          currentUser={currentUser}
          showLoadForm = {this.showLoadForm}
          logout={this.logout}
          />
        {showForm && <Load
          load = {this.load}
          hideLoadForm = {this.hideLoadForm}/>}
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
export default Layout
