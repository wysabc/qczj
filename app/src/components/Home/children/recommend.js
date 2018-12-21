import React,{Component} from "react"
import "../../../../node_modules/swiper/dist/css/swiper.css"
import Swiper from "swiper";
import {Link} from "react-router-dom"


export default  class Recomment extends Component{
    render(){
        let {list}=this.props
       
        return (
            <div id="recomment">
                <div className="swiper-container swiper_recomment" ref="swiper_recomment">
                    <div className="swiper-wrapper">
                    {
                        list.map((item,index)=>{
                            return <div className="swiper-slide" key={index}>
                                <Link to={item.hrefs}>{item.name}</Link>
                            </div>
                        })
                    }
                        
                       
                    </div>
                </div>
            </div>
        )
    }
    
    componentDidMount(){
        var mySwiper = new Swiper(this.refs.swiper_recomment,{
            slidesPerView : 5,
            spaceBetween : 20,
            //spaceBetween : '10%',按container的百分比
            })
    }
}

