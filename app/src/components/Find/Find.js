import React,{Component} from "react"
import {HashRouter as Router, Route,NavLink,Switch} from "react-router-dom"
import {Provider} from "react-redux"
import Redirect from 'react-router-dom/Redirect';
import "./css/find.css"
import Swiper from "swiper"
//引入组件
import Findcar from "./children/Findcar"
import Buycar from "./children/Buycar"
import New from "./children/New"
import Used from "./children/Used"
import Banking from "./children/Banking"
import VRtry from "./children/VRtry"
class Find extends Component{
    constructor(){
        super();
        this.state = {
            navList :[ {name:"找车",path:"/find/findcar"},
                        {name:"买车",path:"/find/buycar"},
                        {name:"新能源",path:"/find/new"},
                        {name:"二手车",path:"/find/used"},
                        {name:"金融",path:"/find/banking"},
                        {name:"VR体验中心",path:"/find/vrtry"}
                     ]
        }
    }
    render(){
        let {navList} = this.state;
        return(
            <div className = "find">
                <img src = "https://img2.autoimg.cn/admdfs/g28/M07/B1/44/ChcCR1wPjK6AJsGbAABvnvyOvFE248.jpg" />
                <Router>
                    <div>
                     
                            <div className="swiper-container findNav" ref = "swiper">
                                <div className="swiper-wrapper ul">
                                {
                                    navList.map((item,index)=>{
                                        return <div className="swiper-slide li" key = {index}><NavLink to ={item.path}>{item.name}</NavLink></div>
                                    })
                                }
                                </div>    
                            </div>
                       
                        <Switch>
                            <Route path = "/find/findcar" component = {Findcar}/>
                            <Route path = "/find/buycar" component = {Buycar}/>
                            <Route path = "/find/new" component = {New}/>
                            <Route path = "/find/used" component = {Used}/>
                            <Route path = "/find/banking" component = {Banking}/>
                            <Route path = "/find/vrtry" component = {VRtry}/>
                            <Redirect path = "/find" to = "/find/findcar"/>
                        </Switch>
                    
                        
                    </div>
                </Router>
            </div>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper (this.refs.swiper, {
            slidesPerView:'auto', //显示几张幻灯片
				freeMode:true,//变换为自由模式
          })        
    }
} 
export default Find;