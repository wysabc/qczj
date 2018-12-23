import React,{Component,Fragment} from "react"
import BScroll from 'better-scroll'
import Loadable from "react-loadable"
import Loading from "../../commit/loading"
import {connect} from "react-redux"
import Recomment from "./children/recommend"
import Navscroll from "./children/navscroll"
import Navbar from "./children/navbar"
import Newstop from "./children/newstop"
import Contentlist from "./children/contentlist"
//import Ailisting from "./children/ailisting"
import {get_recomment,get_ailisting,car_money,size_car,adever_car} from "../../action/Home/actionCreator"
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
        let {getcontentlist,navlist,list,contentlist,moneycar,sizecar,adever_car}=this.props
       //console.log(sizecar)
        return(
           <Fragment>
               <div className="wrapper" ref="wrapper">
                <div className="content">
               <Recomment list={list}/>
             
               <Navbar getcontentlist={getcontentlist} moneycar={moneycar} sizecar={sizecar}/>
              
               <Navscroll navlist={navlist}/>
               <Newstop />
               <Contentlist contentlist={contentlist}/>
               <Adver />
               {/*<Ailisting  getailisting={getailisting}/>*/}
               </div>
               </div>
           </Fragment>
        )
    }
    componentDidMount(){
        this.props.getData();
        this.props.getAilisting()
        this.props.getmoneycar()
        this.props.getsizecar()
        this.props.getadvercar()
        this.scroll=new BScroll(this.refs.wrapper)
        console.log(this.scroll)
        
       
    }
} 
const mapStateToProps=(state)=>({
    getcontentlist:state.home.contentlist,
    navlist:state.home.navlist,
    list:state.home.list,
    contentlist:state.home.carlist,
    getailisting:state.home.getailistings,
    moneycar :state.home.moneycar,
    sizecar:state.home.sizecar
   
})
const  mapDispatchToprops=(dispatch)=>({
    getData(){
        dispatch(get_recomment())
    },
    getAilisting(){
        dispatch(get_ailisting())
    },
    getmoneycar(){
        dispatch(car_money())
    },
    getsizecar(){
        dispatch(size_car())
    },
    getadvercar(){
        dispatch(adever_car())
    }
})
export default connect(mapStateToProps,mapDispatchToprops)(Home)