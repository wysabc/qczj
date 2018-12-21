import React, { Component ,Fragment} from "react"
import "../../style/index.css"
import { connect } from "react-redux"
import Swiper from "swiper"
import {HashRouter as Router,Route,Link, Switch,Redirect} from "react-router-dom"
import All from "./all" 
import News from "./news" 
import Try from "./try" 
class Creact extends Component {
    render() {
        let { navlists ,IndexInfo} = this.props

        return (
          
            <Router>
                <Fragment>
            <div id="creact">
                <div className="swiper-container navbar-container" ref="navbar_container">
                    <div className="swiper-wrapper">
                    {
                       navlists.map((item,index)=>{
                           return(
                            <div className="swiper-slide" key={index}>
                                <Link to={item.src}>{item.name}</Link>
                            </div>
                           )
                       }) 
                    }
                    </div>
                    
                </div>
             </div>
             <Switch>
                    <Route path="/creact/all" component={All} />
                    <Route path="/creact/news" component={News} />
                    <Route path="/creact/try" component={Try} /> 
                    <Redirect path="/creact" to="/creact/all" />
            </Switch>
            </Fragment>
            </Router>
           
        )
    }
    componentDidMount() {
        setTimeout(() => {
            
            var mySwiper = new Swiper(this.refs.navbar_container, {
                slideToClickedSlide:true,
                    slidesPerView :5,
                    centeredSlides : true,
                   
              
                
            })
        }, 300)
    }
}
const mapStateToProps = (state) => ({
    navlists: state.creact.navlist,
    IndexInfo :state.creact.indexInfo
})

export default connect(mapStateToProps)(Creact)