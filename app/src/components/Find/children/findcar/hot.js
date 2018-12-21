import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Swiper from "swiper"
class Hot extends Component {
    render() {
        let { carlist } = this.props;
        return (
            <Fragment>
                <div className="hot">
                    <span>热门车</span>
                    <div><span>北京</span><span className="iconfont">&#xe733;</span></div>
                </div>
                <div className="swiper-container longbox" ref="swiper">
                    <div className="swiper-wrapper ">
                        {carlist.map((item, index) => {
                            return <div className="swiper-slide" key={index}>
                                <a href="#" className="">
                                    <img src={item.picitems[0]} />
                                    <span>{item.name}</span>
                                </a>
                            </div>
                        })}
                    </div>
                </div>
                <p><NavLink to="">查看更多热门车<span className="iconfont" >&#xe733;</span></NavLink></p>
            </Fragment>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            var mySwiper = new Swiper(this.refs.swiper, {
                slidesPerView: 'auto'
            })
        }, 300)
    }
}
export default Hot






