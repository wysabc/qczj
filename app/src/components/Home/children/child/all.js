import React,{Component} from "react"
import {connect} from "react-redux"
import {findcar_list_action} from "../../../../action/Find/actionCreator"
 class All extends Component{
    render(){
        let{carlist}=this.props
        
        return (
            <div id="all">
            {
                carlist.map((item,index)=>{
                    return <div key={index} className="car">
                        <p>
                            <span>{item.name}</span><span>{item.fctname}</span>
                            <p>最高价格：<span>{item.maxprice}</span></p>
                            <p>最低价格：<span>{item.minprice}</span></p>
                        </p>
                        <img src={item.picitems[0]}/>
                    </div>
                })
            }
            </div>
        )
    }
    componentDidMount(){
        this.props.getcar()
    }
}
const mapStateToProps=(state)=>({
    carlist :state.find_reducer.carlist
})
const mapDispatchToProps=(dispatch)=>({
    getcar(){
        dispatch(findcar_list_action())
    }
})
export default connect (mapStateToProps,mapDispatchToProps)(All)