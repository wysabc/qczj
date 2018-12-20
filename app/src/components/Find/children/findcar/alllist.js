import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import {all_list_action} from "../../../../action/Find/actionCreator"
import {connect} from "react-redux"
class Alllist extends Component{
    render(){
        let {alllist} = this.props;
     
        return(
            <div className = "allcar">
                <ul>
                    {
                       alllist.map((item,index)=>{
                           return  <li key = {index}>
                            <img src = {item.picitems[0]} />
                            <p>{item.name}</p>
                           </li>
                       })
                      
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getCarList();
    }
} 
const mapStateToProps = (state)=>({
    alllist:state.AllList.alllist
})
const mapDispatchToPROPS = (dispatch)=>({
    getCarList(){
        dispatch(all_list_action())
    }
    
})

export default connect(mapStateToProps,mapDispatchToPROPS)(Alllist)