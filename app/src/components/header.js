import React,{Component,Fragment} from "react"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import Observer from "./observer"
import {
    head_list_action
} from "../action/actionCreator"
class Header extends Component{
    constructor(){
        super();
        this.state = {
            activeIndex:-1,
            islogin:false
        }
        Observer.$on("islogin",(params)=>{
            this.setState({
                islogin:params
            })
        })
    }
    render(){
       
        let {list} = this.props;      

        return(
            <Fragment> 
                <div className = "head_sea">  
                    <p><NavLink to = "/home">汽车之家</NavLink></p>
                    <p>
                        <span className = "iconfont icon">&#xe6d8;</span>
                        <i>
                            {
                                list.map((item,index)=>{
                                    return <span key = {index}>{item.name}</span>
                                })
                            }
                        </i>
                        <span className = "iconfont icon">&#xe642;</span>
                    </p>
                    <p><span className = "iconfont app">&#xe66e;</span></p>
                    <div>
                    <NavLink to = {this.state.islogin?"/my":"/login"} onClick = {this.changeHead.bind(this)}></NavLink>
                         {/*<NavLink to = "/my" onClick = {this.changeHead.bind(this)}></NavLink>
                           
                            */}
                    </div>
                </div>
                <ul className = "head_nav">
                  <li><NavLink to = "/home" onClick = {this.handleAddClass.bind(this,0)} className = {this.state.activeIndex == 0?"active":""}>首页</NavLink></li>
                  <li><NavLink to = "/find" onClick = {this.handleAddClass.bind(this,1)} className = {this.state.activeIndex == 1?"active":""}>找车</NavLink></li>
                  <li><NavLink to = "/forum" onClick = {this.handleAddClass.bind(this,2)} className = {this.state.activeIndex == 2?"active":""}>论坛</NavLink></li>
                  <li><NavLink to = "/used" onClick = {this.handleAddClass.bind(this,3)} className = {this.state.activeIndex == 3?"active":""}>二手车</NavLink></li>
                  <li><NavLink to = "/server" onClick = {this.handleAddClass.bind(this,4)} className = {this.state.activeIndex == 4?"active":""}>服务</NavLink></li>
                  <li><span className = "iconfont down">&#xe733;</span></li>
                  
              </ul>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getListData();
    }
    handleAddClass(val){
        this.setState({
          activeIndex:val
        })
    }
    changeHead(){
        Observer.$emit("changeHead",false)
    }

} 

const mapStateToProps = (state) =>({
    list:state.header_reducer.list
})
const mapDispatchToProps = (dispatch)=>({
    getListData(){
        dispatch(head_list_action());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)