import React,{Component} from 'react'
import './count.css'

class Count extends Component{
  state = {
    date:'0',
    hour:'0',
    min:'0',
    sec:'0'
  }
  tick = () => {
    var targetDay = 31,targetHour = 0,targetMinute = 0,targetSecond = 0;
    var date = new Date()
    var nowDate = date.getDate()
    var nowHour = date.getHours()
    var nowMinute = date.getMinutes()
    var nowSecond  = date.getSeconds()
    var nowTime =  (nowDate-1)*24*3600 + nowHour*3600 + nowMinute*60 + nowSecond
    var targetTime = (targetDay-1)*24*3600 + targetHour*3600+targetMinute*60+targetSecond

    var showTime = targetTime - nowTime
    var showDay = Math.floor(showTime/3600/24)
    var showHour = Math.floor(showTime%(3600*24)/3600)
    var showMinute = Math.floor(showTime%(3600*24)%3600/60)
    var showSecond = showTime%(3600*24)%3600%60
    if(showDay < 10){
      showDay = '0' + showDay
    }
    if(showHour < 10){
      showHour = '0' + showHour
    }
    if(showMinute < 10){
      showMinute = '0' + showMinute
    }
    if(showSecond < 10){
      showSecond = '0' + showSecond
    }
    this.setState({
      date:showDay,
      hour:showHour,
      min:showMinute,
      sec:showSecond
    })
  }
  componentDidMount = () => {
    this.timer = window.setInterval(this.tick, 1000)
  }
  componentWillUnmount = () => {
    window.clearInterval(this.timer)
  }

  render(){
    const { date, hour, min, sec } = this.state
    return (
      <div className='count'>
        <div className="timenum">
          <span className="day1">
            <em>{date}</em>
            <b>:</b>
          </span>
          <span className="hour">
            <em>{hour}</em>
            <b>:</b>
          </span>
          <span className="min">
            <em>{min}</em>
            <b>:</b>
          </span>
          <span className="sec">
            <em>{sec}</em>
          </span>
        </div>
        <div className="day">
          <span>天</span>
          <span>时</span>
          <span>分</span>
          <span>秒</span>
        </div>
      </div>
    )
  }
}
export default Count
