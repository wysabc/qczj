import React,{Component,Fragment} from "react"
import Swiper from "swiper"
class Banner extends Component{
   
    render(){
        let {imglist,logolist} = this.props;
        return(
            <Fragment>
                <div className="swiper-container1 banner" ref = "banner">
                    <div className="swiper-wrapper ">
                    {
                        imglist.map((item,index)=>{
                            return <div className="swiper-slide" key = {index}><img src = {item} /></div>
                        })
                    } 
                    </div>
                   {/* <div className="swiper-pagination btns"></div>*/}
                </div>

                <div className="swiper-container2"> 
                    <div className="swiper-wrapper logowrapper">
                    {
                        logolist.map((item,index)=>{
                            return <div className="swiper-slide logoslide" key = {index}>
                            <img src = {item.src} />
                            <p>{item.name}</p>
                            </div>
                        })
                    } 
                    </div>
                </div>

             </Fragment>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper (this.refs.banner, {
            loop: true, // 循环模式选项
            autoplay: {
                delay: 1500,
                disableOnInteraction: true
                },
            pagination: {
                el: '.swiper-pagination'
            }
        })
        var mySwiper = new Swiper ('.swiper-container2', {
            slidesPerView: 'auto'
        })
  }
} 
export default Banner