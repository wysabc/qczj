import React, { Component, Fargment } from "react"
import { connect } from "react-redux"
import { findcar_list_action } from "../../../action/Find/actionCreator"
import store from "../../../store"
import BScroll from "better-scroll"
import "../css/more.css"
import Swiper from "swiper"

class More extends Component {
    render() {

        console.log(this.props.carlist)
        console.log(this.props.location.search.slice(1))

        let obj = this.props.carlist[this.props.location.search.slice(1)]
        console.log(obj)
        return (
            <div className="more">
            <div className="wrapper" ref="wrapper">
                <div className="content">

                            <div className="swiper-container " ref="swiper">
                                    <div className="swiper-wrapper ">
                                        {
                                            obj.picitems.map((item, index) => {
                                                console.log(item)
                                                return <div className="swiper-slide li" key={index}><img  src={item} /></div>
                                            })
                                        }
                                    </div>
                                </div>
                                    
                       <p>{obj.name}</p> 
                      <p> {obj.fctname}</p>
                        <p>指导价：￥{obj.minprice/10000}万 - ￥{obj.maxprice/10000}万</p>
                        <p>发动机:{obj.displacementitems.map((item,index)=>{
                            return <span key = {index}>{item}/</span>
                        })}</p>
                        <p>级别：{obj.levelname}</p>
                        
                       
                    </div>

                </div>
            </div>

        )
    }
    componentDidMount() {
        this.scroll = new BScroll(this.refs.wrapper, {
            click: true,
            pullUpLoad: true,
            probeType: 2
        });
        var mySwiper = new Swiper(this.refs.swiper, {
            loop: true, // 循环模式选项
            autoplay: {
                delay: 1500,
                disableOnInteraction: true
            }
        })
    }
}


const mapStateToProps = (state) => ({
    carlist: state.Findcar.carlist
})
const mapDispatchToPROPS = (dispatch) => ({
    getCarList() {
        dispatch(findcar_list_action());
    }
})
export default connect(mapStateToProps, mapDispatchToPROPS)(More)


/**
 * brandid: 33
brandname: "奥迪"
displacementitems: (4) ["1.8T", "2.0T", "2.5L", "3.0T"]
fctid: 9
fctname: "一汽-大众奥迪"
id: 18
levelid: 5
levelname: "中大型车"
maxfuelconsumption: 11
maxprice: 694800
minfuelconsumption: 6
minprice: 402800
name: "奥迪A6L"
picitems: Array(3)
0: "https://car2.autoimg.cn/cardfs/product/g29/M04/32/F3/autohomecar__ChsEn1vtpgGAGKgoAANCJp9b8Xg537.jpg"
1: "https://car2.autoimg.cn/cardfs/product/g29/M05/35/CC/autohomecar__ChcCSFvtpfyAWZbpAAOWKrbLT5w029.jpg"
2: "https://car3.autoimg.cn/cardfs/product/g29/M09/3C/86/autohomecar__ChsEflvtpfKAEOC_AALMSBNFPrg849.jpg"
length: 3
__proto__: Array(0)
picnum: 918
sellspecnum: 7
specnum: 7
state: 20
stopspecnum: 102
transmissionitems: (2) ["无级", "双离合"]
waitspecnum: 12
 */