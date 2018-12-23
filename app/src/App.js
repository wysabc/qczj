import React, { Component,} from 'react';
import {HashRouter as Router, Route,NavLink,Switch} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import Redirect from 'react-router-dom/Redirect';
import Observer from "./components/observer"
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
<<<<<<< HEAD
=======
import More from "./components/Find/children/more"
import BScroll from "better-scroll"
>>>>>>> wang3
class App extends Component {
  constructor(){
    super();
    this.state = {
      flag:true
<<<<<<< HEAD

=======
>>>>>>> wang3
    }
    Observer.$on("changeHead",(params)=>{
      this.setState({
        flag:params
      })
  })
  }
  render() {
    let {flag} = this.state;
    return (
      <Provider store = {store}>
       <Router>
<<<<<<< HEAD
         <div>
            <div className = "header">
            {flag?<Header handleAddClass = {this.handleAddClass}/>:"" } 
           </div>
<<<<<<< HEAD
=======
           <div className = "content1">
          
>>>>>>> zzz
=======
         <div> 
            <div className = "header" >
            {flag?<Header handleAddClass = {this.handleAddClass}/>:"" } 
           </div>
>>>>>>> wang3
           <Switch>
                <Route path = "/home" component = {Home}></Route>
                <Route path = "/find"  component = {Find}></Route>
               <Route path = "/forum"  component = {Forum}></Route>
                {/* <Route path = "/forum" render = {
                  ({history,match,location})=>{
                      return <Forum scroll = {this.scroll} history = {history} match = {match} location = {location} />
                  }
                }  />*/}
                <Route path = "/login"  component = {Login}></Route>
                <Route path = "/register"  component = {Register}></Route>
                <Route path = "/my"  component = {My}></Route>
                <Route path = "/server"  component = {Server}></Route>
                <Route path = "/used"  component = {Used}></Route>
                <Route path="/creact" component={Creact} />
                <Route path = "/more" component = {More} />
                <Redirect path = "/" to = "/home"></Redirect>
<<<<<<< HEAD
           </Switch>
          </div>
=======
           </Switch>        
         </div>
>>>>>>> wang3
       </Router>
      </Provider>
    );
  }

}

export default App;
