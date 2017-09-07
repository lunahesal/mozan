import React,{Component} from 'react'
import './banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import pic1 from '../images/pic1_03.jpg'
import pic2 from '../images/pic2_03.jpg'
import pic3 from'../images/pic3_03.jpg'

class Banner extends Component{
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      dots:false,
      autoplay:true
    }
    const slides = [
      <div className="banner-card-wrap" key='1'>
        <div className="banner-card">
          <img src={pic1} alt=""/>
        </div>
      </div>,
      <div className="banner-card-wrap" key='2'>
        <div className="banner-card">
          <img src={pic2} alt=""/>
        </div>
      </div>,
      <div className="banner-card-wrap" key='3'>
        <div className="banner-card">
          <img src={pic3} alt=""/>
        </div>
      </div>
    ]
    const slider = (
      <Slider {...settings}>
        {slides}
      </Slider>
    )
    return (
      <div className='banner'>
        <div className="bannerin">
          <div className="swiper-container">
            {slider}
          </div>
        </div>
      </div>
    )
  }
}
export default Banner
