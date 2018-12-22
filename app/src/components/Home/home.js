import React,{Component,Fragment} from "react"
import Loadable from "react-loadable"
import Loading from "../../commit/loading"
import {connect} from "react-redux"
import Recomment from "./children/recommend"
import Navscroll from "./children/navscroll"
import Navbar from "./children/navbar"
import Content from "./children/content"
import Newstop from "./children/newstop"
import Contentlist from "./children/contentlist"
//import Ailisting from "./children/ailisting"
import {get_recomment,get_ailisting} from "../../action/Home/actionCreator"
import "./style/index.css"
const Adver = Loadable({
    loader: () => import('./children/adver'),
    loading: Loading,
  });
const Ailisting =Loadable({
    loader : ()=>import("./children/ailisting"),
    loading :Loading
})
 class Home extends Component{
    render(){
        let {getcontentlist,navlist,list,contentlist,getailisting}=this.props
        return(
           <Fragment>
               <Recomment list={list}/>
             
               <Navbar getcontentlist={getcontentlist}/>
              
               <Navscroll navlist={navlist}/>
               <Newstop />
               <Contentlist contentlist={contentlist}/>
               <Adver />
               {/*<Ailisting  getailisting={getailisting}/>*/}
           </Fragment>
        )
    }
    componentDidMount(){
        this.props.getData();
        this.props.getAilisting()
       
    }
} 
const mapStateToProps=(state)=>({
    getcontentlist:state.home.contentlist,
    navlist:state.home.navlist,
    list:state.home.list,
    contentlist:state.home.carlist,
    getailisting:state.home.getailistings
   
})
const  mapDispatchToprops=(dispatch)=>({
    getData(){
        dispatch(get_recomment())
    },
    getAilisting(){
        dispatch(get_ailisting())
    }
})
export default connect(mapStateToProps,mapDispatchToprops)(Home)