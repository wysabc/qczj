import React, { Component,} from 'react';
import {HashRouter as Router, Route,NavLink,Switch} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import Redirect from 'react-router-dom/Redirect';
//引入组件
import Home from "./components/Home/home"
import Find from "./components/Find/Find"
import Forum from "./components/Forum/Forum"
import Login from "./components/Login/login"
import Register from "./components/Login/register"
import My from "./components/My/My"
import Server from "./components/Server/Server"
import Used from "./components/Used/Used"

import Header from "./components/header"
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
       <Router>
         <div>
         <div className = "header">
             <Header />
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
              
           </div>
           <div className = "content">
          
           <Switch>
                <Route path = "/home" exact component = {Home}></Route>
                <Route path = "/find"  component = {Find}></Route>
                <Route path = "/forum"  component = {Forum}></Route>
                <Route path = "/login"  component = {Login}></Route>
                <Route path = "/register"  component = {Register}></Route>
                <Route path = "/my"  component = {My}></Route>
                <Route path = "/server"  component = {Server}></Route>
                <Route path = "/used"  component = {Used}></Route>
                <Redirect path = "/" to = "home"></Redirect>
           </Switch>
          </div>
         </div>
       </Router>
      </Provider>

    );
  }
}

export default App;
