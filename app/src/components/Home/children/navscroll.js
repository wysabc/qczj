import React, { Component } from "react"
import "../../../../node_modules/swiper/dist/css/swiper.css"
import Swiper from "swiper";
export default class Navscoll extends Component {
    render() {
        let { navlist } = this.props

      
        return (
            <div id="navscoll">
                <div className="swiper-container nav_container" refs="nav_container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    </div>
                    
                    <div className="swiper-pagination nav_pagination"></div>

                  
                </div>
            </div>
        )
    }
    componentDidMount(){
              new Swiper (this.refs.nav_container, {
                  
                    loop: true, // 循环模式选项
                    
                    // 如果需要分页器
                    pagination: {
                    el: '.nav_pagination',
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                        }
                  })
    

           
        }
   
}