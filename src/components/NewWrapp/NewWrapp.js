import React,{Component} from 'react'
import './new-wrapp.css'

class NewWrapp extends Component{
  render(){
    return (
      <div className="new-wrapp">
        <div className="newadr">
          <div className="innew">
            <div className=" inup">
              <h3>新增地址</h3>
              <div>
                <a href="#" className="close">x</a>
              </div>
            </div>
            <form>
              <div>
                <div className="administrator">
                  <label htmlFor="adm">
                    <span>*</span>收货人
                  </label>
                  <input type="text" id="adm" className="inputpub" />
                  <span>请填写收货人!</span>
                </div>
                <div className="tel">
                  <label htmlFor="telp">
                    <span>*</span>联系电话
                  </label>
                  <input type="text" id="telp" className="inputpub" />
                  <span>填写的手机格式错误!</span>
                </div>
              </div>
              <div>
                <div>
                  <label>
                    <span>*</span>所在地区
                  </label>
                </div>
                <div className="noempty">
                  <span>请填写完整的所在地区!</span>
                </div>
              </div>
              <div className="outer">
                <select name="province" id="province">
                  <option value="请选择">请选择</option>
                </select>
                <select name="city" id="city">
                  <option value="请选择">请选择</option>
                </select>
                <select name="town" id="town">
                  <option value="请选择">请选择</option>
                </select>
              </div>
              <div>
                <div className="address">
                  <label htmlFor="addr">
                    <span>*</span>详细地址
                  </label>
                  <input type="text" id="addr" className="inputpub" value="请填写详细地址" />
                  <span>请填写详细地址!</span>
                </div>
              </div>
              <div>
                <div className="addrother">
                  <label htmlFor="ather">
                    地址别名
                  </label>
                  <input type="text" id="aother" />
                  <span></span>
                </div>
                <div className="othermore">
                  <label>
                    常用别名
                  </label>
                  <div>
                    <a href="#">家</a>
                    <a href="#">公司</a>
                    <a href="#">父母家</a>
                  </div>
                </div>
              </div>
              <div className="lastone">
                <div className="last">
                  <input type="checkbox" />
                  <em>设为默认地址</em>
                </div>
                <div className="lastbtn">
                  <a href="#" className="save">保存地址</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default NewWrapp
