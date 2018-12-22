import React,{Component,Fragment} from "react"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {
    head_list_action
} from "../action/actionCreator"
class Header extends Component{
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
                    <div></div>
                </div>
                <ul className = "head_nav">
                  <li><NavLink to = "/home">首页</NavLink></li>
                  <li><NavLink to = "/find">找车</NavLink></li>
                  <li><NavLink to = "/forum">论坛</NavLink></li>
                  <li><NavLink to = "/used">二手车</NavLink></li>
                  <li><NavLink to = "/server">服务</NavLink></li>
                  <li><span className = "iconfont down">&#xe733;</span></li>
                  {/*<li><NavLink to = "/my">个人</NavLink></li>
                  <li><NavLink to = "/login">登录</NavLink></li>
    <li><NavLink to = "/register">注册</NavLink></li>*/}
              </ul>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getListData();
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