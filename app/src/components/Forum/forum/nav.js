import React,{Component} from "react"
import  Swiper from "swiper" 
class Nav extends Component{
    render(){
        let {logolist} = this.props;
        return(
            <div className="swiper-container3 nav-swiper">
                <div className="swiper-wrapper nav-box">
                    {logolist.map((item, index) => {
                        return <div className="swiper-slide" key={index}>
                            
                                <span className="small">{item.name}</span>
                         
                        </div>
                    })}
                </div>
            </div>
        )
    }
    componentDidMount(){
            var mySwiper = new Swiper(".nav-swiper", {
                slidesPerView: 'auto'
            })
    }
} 
export default Nav