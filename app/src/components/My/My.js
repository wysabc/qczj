import React,{Component} from "react"
import Observer from "../observer"
import BScroll from "better-scroll"
import "./my.css"
class My extends Component{
    render(){
        return(
            <div className="wrapper" ref="wrapper">
            <div className="content">
            <div className = "my">
            <div className = "head">
                        <span className = "iconfont" onClick = {this.goback.bind(this)}>&#xe7f9;</span>
                        <span className = "iconfont">&#xe664;</span>
                        <span>我的汽车之家</span>
                        <span className = "iconfont">&#xe6d8;</span>
                        <span className = "iconfont">···</span>
                    </div>
            <div className = "blueBox">  
                    <div className = "myhead">
                        <div className = "photo"></div>
                        <div>
                            <p className = "iconfont"> name  &#xe663;</p>
                            <p></p>
                        </div>
                        <div>
                            <span className = "iconfont">&#xe62b;</span>
                            签到有礼
                        </div>
                    </div>
                    <ul className = "crea">
                       <li>
                           <p>0</p>
                           <p>关注</p>
                       </li>
                       <li>
                           <p>0</p>
                           <p>粉丝</p>
                       </li>
                    </ul>
                    <div>
                        <p>  <span className = "iconfont"></span>
                        <span>会员福利兑换</span>
                        <span className = "iconfont">&#xe731;</span>
                        </p>
                      
                    </div>
                </div>
            
            <div className = "con" >
            <div>
                <h1>我的消息</h1>
                <ul>
                    <li><p className = "iconfont">&#xe690;</p><p>论坛回复</p></li>
                    <li><p className = "iconfont">&#xe690;</p><p>评论回复</p></li>
                    <li><p className = "iconfont">&#xe6b8;</p><p>私信</p></li>
                    <li><p className = "iconfont">&#xe63d;</p><p>车友圈</p></li>
                    <li><p className = "iconfont">&#xe8c1;</p><p>系统通知</p></li>
                </ul>
            </div>
            <div>
                <h1>我的钱包</h1>
                <ul>
                    <li><p >领现金红包</p><p>论坛回复</p></li>
                    <li><p >办联名卡</p><p>评论回复</p></li>
                    <li><p >0</p><p>私信</p></li>
                    <li><p >￥0.00</p><p>车友圈</p></li>
                
                </ul>
            </div>   
            <div>
                <h1>常用工具</h1>
                <ul>
                    <li><p className = "iconfont">&#xe684;</p><p>我的油耗</p></li>
                    <li><p className = "iconfont">&#xe662;</p><p>爱车评估</p></li>
                    <li><p className = "iconfont">&#xe60b;</p><p>家家小蜜</p></li>
                    <li><p className = "iconfont">&#xe633;</p><p>七步买车</p></li>
                   
                </ul>
            </div>

            </div>
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
    }
    componentWillUnmount(){
        Observer.$emit("changeHead",true)

    }
    goback(){
        
        this.props.history.goBack()
    }
} 
export default My