import React,{Component} from "react"
import {login_action} from "../../action/actionCreator"
import { connect } from "react-redux"
import store from "../../store"
import { Button, Radio, Icon ,Input} from 'antd';
import "./logn.css"
import Observer from "../observer"
class Login extends Component{
    constructor(){
        super()
        this.state = {
            yzm:"",
            telflag:false,
            yzmflag:false,
            pwdflag:false,
            tel:"",
            pwd:"",
            flagtj:false
        }
    }
    render(){
        return(
            <div className = "login">
                <div className = "head">
                    <span  onClick = {this.goback.bind(this)}>返回</span>
                    <span>登录</span> 
                    <span  onClick = {this.goregister.bind(this)}>注册</span>
                </div>
                <div className ="box">
                    <Input placeholder="仅支持中国大陆手机号" className = "input uname" onBlur = {this.checktel.bind(this)}/>
                    <Input placeholder="请输入密码" className = "input pwd" onBlur = {this.checkpwd.bind(this)}/>
                    <Input placeholder="请输入验证码" className = "input yzm" onBlur = {this.checkyzm.bind(this)}/>
                    <Button type="primary" className = "input btn" onClick = {this.getYzm.bind(this)} >获取验证码</Button>
                    <Button type="primary" className = "input logins" onClick = {this.login.bind(this)}>登录</Button>
                    <p>如遇问题可联系客服：4000-666-850</p>
                </div>

            </div>
        )
    }
   componentDidUpdate(){
        console.log(this.props)
        if( !this.state.flagtj ) return
        if( this.props.userlist.length == 1 ){
            alert( "登录成功")
            Observer.$emit("islogin",true)

        }else{
            alert("登录失败")
        }
    }
    componentWillUnmount(){
        

    }
 
    getYzm(){
        var str = String.fromCharCode(parseInt(Math.random()*(26)+65))+String.fromCharCode(parseInt(Math.random()*(26)+65))+String.fromCharCode(parseInt(Math.random()*(26)+65))+String.fromCharCode(parseInt(Math.random()*(26)+65))
        alert(str);
        this.setState({
            yzm:str
        })
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
    
    checkyzm(e){
        var val = e.target.value;
        if( val != this.state.yzm ){
            alert('验证码不正确')
        }else{
            this.setState({yzmflag:true}) 

        }
    }
    goback(){
        this.props.history.goBack()
        Observer.$emit("changeHead",true)
    }
    goregister(){
        this.props.history.push("/register")

    }
    login(){
        if( this.state.telflag  ){//&& this.state.yzmflag&& this.state.pwdflag
            this.props.getUserList(this.state.tel,this.state.pwd);  
            this.setState({flagtj:true}) 

            console.log(this.props)
        }
    }
} 


const mapStateToProps = (state) =>({
    userlist: state.header_reducer.userlist
})
const mapDispatchToProps = (dispatch) => ({
    getUserList(tel,pwd){
        dispatch(login_action(tel,pwd));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)


/**
 *    componentDidUpdate(){
        console.log(this.props)
        if( this.state.flagyz ){
            var arr = this.props.userlist;
            var flag1 = false;
            var flag2 = false; 
            arr.map((item)=>{
                if(item.tel == this.state.tel ){
                    flag1 = true;
                    if(item.pwd == this.state.pwd ){
                        flag2 = true;
                    } 
                } else{
                    return
                }  
            })
                if( flag1 ){
                    if(flag2){
                        alert("登录成功")
                    }else{
                        alert("密码错误")
                        return
                    }         
                }else{
                    alert("用户名不存在")
                }
        
            }
            

    }
 */