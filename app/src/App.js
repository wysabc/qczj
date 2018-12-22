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
import Creact from "./components/Home/children/child/creact"
import Header from "./components/header"
import BScroll from "better-scroll"
class App extends Component {
  constructor(){
    super();
    this.state = {
      flag:false
    }
  }
  render() {
    let {flag} = this.state;
    return (
      <Provider store = {store}>
       <Router>
         <div>
           
            <div className = "header">
            {flag?<Header handleAddClass = {this.handleAddClass}/>:"" } 
           </div>
           <div className = "wrapper" ref = "wrapper"> 
            <div className = "content">
           <Switch>
                <Route path = "/home" component = {Home}></Route>
                <Route path = "/find"  component = {Find}></Route>
                <Route path = "/forum"  component = {Forum}></Route>
                <Route path = "/login"  component = {Login}></Route>
                <Route path = "/register"  component = {Register}></Route>
                <Route path = "/my"  component = {My}></Route>
                <Route path = "/server"  component = {Server}></Route>
                <Route path = "/used"  component = {Used}></Route>
                <Route path="/creact" component={Creact} />
                <Redirect path = "/" to = "/home"></Redirect>
           </Switch>
          </div>
          </div>
         </div>
       </Router>
      </Provider>
    );
  }
 componentDidMount(){
      this.scroll = new BScroll(this.refs.wrapper,{
        click:true,
        pullUpLoad:true,
        probeType:2
    });
    console.log(this.scroll)
    /*this.scroll.on("pullingUp",()=>{
      this.props.getNavData(this.props.page);
  })*/
 }
}

export default App;
