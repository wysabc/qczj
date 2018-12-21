import React, { Component } from "react"
import { connect } from "react-redux"
import {low_price,use_car} from "../../../../action/Home/actionCreator"
import Swiper from "swiper"
import Usecar from "./usecar"
class News extends Component {
    render() {
        let { getlowprices,usecar} = this.props
        console.log(usecar)
        return <div id="news">
            <div id="head">
            <div id="title">低价询车</div>
            <div className="swiper-container car_container" ref="car_container">
                <div className="swiper-wrapper">
                    {
                       getlowprices.map((item,index)=>{
                           return <div className="swiper-slide" key={index}>
                                <img  src={item.specImgUrl}/>
                                <h4>{item.seriesName}</h4>
                                <p>{item.specName}</p>
                           </div>
                       }) 
                    }
                
                   
                
                </div>
                
            </div>
            </div>
            <Usecar usecar={usecar}/>
           
        </div>
    }
    componentDidMount() {
        this.props.getlowprice();
        this.props.getusecar();
        setTimeout(()=>{
            var mySwiper = new Swiper(this.refs.car_container,{
                slidesPerView : "auto",
               
                })
        },300)
       

    }
}
const mapStateToProps = (state) => ({
    getlowprices: state.home.lowprice,
    usecar :state.home.usecar
})
const mapDispatchToProps = (dispatch) => ({
    getlowprice() {
        dispatch(low_price())
    },
    getusecar(){
        dispatch(use_car())
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(News)