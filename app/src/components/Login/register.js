import React,{Component} from "react"
import {register_action} from "../../action/actionCreator"
import { connect } from "react-redux"
import store from "../../store"
import { Button, Radio, Icon ,Input} from 'antd';
import "./logn.css"
import Observer from "../observer"

class Register extends Component{
    constructor(){
        super()
        this.state = {
            yzm:"",
            telflag:false,
            pwdflag:false,
            tel:"",
            pwd:"",
            flagtj:false
        }
    }
    render(){
        return(
            <div>
                <div className = "head">
                    <span  onClick = {this.goback.bind(this)}>返回</span>
                    <span>注册</span> 
                    <span  onClick = {this.goback.bind(this)}>登录</span>
                </div>
                <div className ="box">
                    <Input placeholder="仅支持中国大陆手机号" className = "input uname" onBlur = {this.checktel.bind(this)}/>
                    <Input placeholder="请输入密码" className = "input pwd" onBlur = {this.checkpwd.bind(this)}/>
                    <Button type="primary" className = "input logins" onClick = {this.register.bind(this)}>注册</Button>
                    <p>如遇问题可联系客服：4000-666-850</p>
                </div>

            </div>
        )
    }
    
    goback(){
        this.props.history.goBack()

    }
    checktel(e){
        var val = e.target.value;
        var reg = /^\d{11}$/;
            if(!reg.test(val)){
                alert("请输入正确的手机号码")
            }else{
                this.setState({telflag:true,tel:val}) 
            }
       
    }
    checkpwd(e){
        var val = e.target.value;
        var reg = /^\w{6,12}$/;
        if( !reg.test(val) ){
            alert("密码格式不正确")
        }else{
            this.setState({pwdflag:true,pwd:val}) 
        }
    }
    register(){
        if( this.state.telflag&& this.state.pwdflag  ){//&& this.state.pwdflag
        this.props.getUserList(this.state.tel,this.state.pwd);  
        }else{
            alert("输入不符合规定")
        }
    }
} 
const mapStateToProps = (state) =>({
    userlist: state.header_reducer.userlist
})
const mapDispatchToProps = (dispatch) => ({
    getUserList(tel,pwd){
        dispatch(register_action(tel,pwd));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)
