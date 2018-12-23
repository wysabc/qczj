import React,{Component} from "react"
import { connect } from "react-redux"
import {  findcar_list_action } from "../../../action/Find/actionCreator"

class Buycar extends Component{
   
    render(){
   
            return(
                <div>
                   
                </div>
            )

    }
   
}

const mapStateToProps = (state) => ({
    carlist: state.Findcar.carlist
})
const mapDispatchToPROPS = (dispatch) => ({
    getCarList() {
        dispatch(findcar_list_action());
    }
})
export default connect(mapStateToProps, mapDispatchToPROPS)(Buycar)
 /**   shouldComponentUpdate(){
       this.props.getCarList();
       this.setState({
           flag :true
       })
       console.log(this.state.flag)
       return true
    }

} 
const mapStateToProps = (state) => ({
    carlist: state.Findcar.carlist
})
const mapDispatchToPROPS = (dispatch) => ({
    getCarList() {
        dispatch(findcar_list_action());
    }
})
export default connect(mapStateToProps, mapDispatchToPROPS)(Buycar)
 let id =this.props.location.search.slice(1)
       this.setState({obj :this.props.carlist[id]})
       console.log(this.props)
       console.log(this.state.obj) 
       
        console.log(this.props)
        console.log(store.getState().find_reducer)
        let arr = store.getState().find_reducer.carlist;
       let obj = arr[this.props.location.search.slice(1)]
        localStorage.setItem("obj",JSON.stringify(obj))
        console.log(obj)
       
       
       
       */