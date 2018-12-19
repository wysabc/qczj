import React,{Component,Fragment} from "react"
import {connect} from "react-redux"
import Recomment from "./children/recommend"
import Navscroll from "./children/navscroll"
import Navbar from "./children/navbar"
import Content from "./children/content"
import {get_recomment} from "../../action/Home/actionCreator"
import "./style/index.css"
 class Home extends Component{
    render(){
        let {getcontentlist,navlist}=this.props
        return(
           <Fragment>
               <Recomment />
             
               <Navbar/>
               <Content getcontentlist={getcontentlist}/>
               <Navscroll navlist={navlist}/>
               
           </Fragment>
        )
    }
    componentDidMount(){
        this.props.getData()
       
    }
} 
const mapStateToProps=(state)=>({
    getcontentlist:state.home.contentlist,
    navlist:state.home.navlist
   
})
const  mapDispatchToprops=(dispatch)=>({
    getData(){
        dispatch(get_recomment())
    }
})
export default connect(mapStateToProps,mapDispatchToprops)(Home)