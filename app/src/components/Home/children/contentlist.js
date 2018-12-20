import React,{Component} from "react";
import "../../../../node_modules/swiper/dist/css/swiper.css"
import Swiper from "swiper";
export default class Contentlist extends Component{
    render(){
        let {contentlist}=this.props;

        return(<div id="contentlist">
            <div className="swiper-container contentlist_container">
                <div className="swiper-wrapper">
                {
                    contentlist.map((item,index)=>{
                        return  <div className="swiper-slide" key={index}>
                                    <a href={item.href}>
                                        <img  src={item.src}/>
                                        <span>{item.name}</span>
                                    </a>
                               </div>
                    })
                }  
                </div>
                <div className="swiper-pagination contentlist_pagination"></div>
               
            </div>
           
        </div>)
    }
    componentDidMount(){
        var mySwiper = new Swiper('.contentlist_container',{
            slidesPerView : 5,
            slidesPerGroup : 5,
            loop: true, 
            pagination: {
                el: '.contentlist_pagination',
                },
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    }
              })

          
    }
}