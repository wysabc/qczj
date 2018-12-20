import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import {findcar_list_action} from "../../../action/Find/actionCreator"
import {connect} from "react-redux"
import Swiper from "swiper"
import Quick from "./findcar/quick"
import Alllist from "./findcar/alllist"
class Findcar extends Component{
    render(){
        let {carlist} = this.props;
      
        return(
            <div className = "findcar">
                <div className = "hot"> 
                    <span>热门车</span>
                    <div><span>北京</span><span className = "iconfont">&#xe733;</span></div>
                </div>
                <div className="swiper-container longbox" ref = "swiper">
                    <div className="swiper-wrapper ">
                    {
                        carlist.map((item,index)=>{
                            return <div className="swiper-slide" key = {index}>
                                    <a href = "#" className = "">
                                        <img src = {item.picitems[0]} />
                                        <span>{item.name}</span>
                                    </a>
                                  </div>
                        })
                    }
                    </div>  
                      
                </div>
                <p><NavLink to = "">查看更多热门车<span className = "iconfont" >&#xe733;</span></NavLink></p>
                <Quick />
                <Alllist />
            </div>
        )
    }
    componentDidMount(){
        this.props.getCarList();
        var mySwiper = new Swiper (this.refs.swiper, {
            slidesPerView: 'auto'//显示几张幻灯片
          })    
    }
    
} 
const mapStateToProps = (state)=>({
    carlist:state.Findcar.carlist
})
const mapDispatchToPROPS = (dispatch)=>({
    getCarList(){
        dispatch(findcar_list_action())
    }
    
})

export default connect(mapStateToProps,mapDispatchToPROPS)(Findcar)