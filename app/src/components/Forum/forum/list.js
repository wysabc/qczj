import React,{Component} from "react"

class List extends Component{
    render(){
     let {navlist} = this.props;
        return(
        <ul className = "con_list">{
           
        }</ul>
        )
    }
} 
export default List

/** navlist.list.map((item,index)=>{
                return <li key ={index}>
                    <img src = {item.Img} />
                    <p>{item.Title}</p>
                </li>
            }) */