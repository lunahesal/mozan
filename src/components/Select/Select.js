import React,{Component} from 'react'
import './select.css'
class Select extends Component{
  state = {
    count:1,
    activeIndex:0,
    activeIndex1:0,
    styleList:[
      {style:'iphone5'},
      {style:'iphone6'},
      {style:'iphone6+'}
    ],
    sizeList:[
      {size:'XXS'},
      {size:'XS'},
      {size:'S'},
      {size:'M'},
      {size:'L'},
      {size:'XL'},
      {size:'XXL'}
    ]
  }
  addClick = () => {
    this.setState({
      count:this.state.count + 1
    })
  }
  subClick = () => {
    if(this.state.count > 1){
      this.setState({
        count:this.state.count - 1
      })
    }
  }
  handleClick = (i) => {
    this.setState({
      activeIndex:i
    })
  }
  handleClick1 = (i) => {
    this.setState({
      activeIndex1:i
    })
  }
  render(){
    const styleLists = this.state.styleList.map((item,i) =>(
      <a onClick={()=>this.handleClick(i)}
        className={this.state.activeIndex===i ? 'active':''}
        href={"javascript:;"} key={i}>{item.style}</a>
    ))
    const sizeLists = this.state.sizeList.map((item,i) =>(
      <a onClick={()=>this.handleClick1(i)}
        className={this.state.activeIndex1===i && 'active'}
        href={"javascript:;"} key={i}>{item.size}</a>
    ))
    return (
      <div className='select'>
        <div className="price">
          <p>定金</p>
          <div>
            <b>￥<em>500.00</em></b>
            <span>全款金额：￥1500.00</span>
          </div>
        </div>
        <div className="style1">
          <p>款式</p>
          <div>
            {styleLists}
          </div>
        </div>
        <div className="size">
          <p>尺码</p>
          <div>
          {sizeLists}
          </div>
        </div>
        <div className="num">
          <p>数量</p>
          <div>
            <a href="javascript:;" className="sub" onClick={this.subClick}>-</a>
            <span>{this.state.count}</span>
            <a href="javascript:;" className="add" onClick={this.addClick}>+</a>
          </div>
        </div>
        <div className="ps">
          <div>
            <span>注：</span>
            商品将于
            <span>2017/9/30</span>
            统一发货!
          </div>
        </div>
      </div>
    )
  }
}
export default Select
