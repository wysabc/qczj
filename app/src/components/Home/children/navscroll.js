import React, { Component } from "react"
import "../../../../node_modules/swiper/dist/css/swiper.css"
import Swiper from "swiper";
export default class Navscoll extends Component {
    render() {
        let { navlist } = this.props

<<<<<<< HEAD
      
=======
        //console.log(navlist)
>>>>>>> zzz
        return (
            <div id="navscoll">
                <div className="swiper-container nav_container" ref="nav_container">
                    <div className="swiper-wrapper">
                       {
                            navlist.map((item,index)=>{
                                return <div className="swiper-slide" key={index}>
                                        <img  src={item} />
                                </div>
                            })
                        }
                       
                    </div>
                    
                    <div className="swiper-pagination nav_pagination"></div>

                  
                </div>
            </div>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper (this.refs.nav_container, {
                  
                    loop: true, // 循环模式选项
                    
                    // 如果需要分页器
                    pagination: {
                    el: '.nav_pagination',
                    },
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                        }
                  })
    

           
        }
   
}