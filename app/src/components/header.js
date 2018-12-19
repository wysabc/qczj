import React,{Component,Fragment} from "react"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {
    head_list_action
} from "../action/actionCreator"
class Header extends Component{
    render(){
        console.log(this.props)
        return(
            <Fragment> 
                <div className = "head_sea">  
                    <p><NavLink to = "/home">汽车之家</NavLink></p>
                    <p>
                        <span className = "iconfont icon">&#xe6d8;</span>
                        <span className = "iconfont icon">&#xe642;</span>
                    </p>
                    <p><span className = "iconfont app">&#xe66e;</span></p>
                    <div></div>
                </div>
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