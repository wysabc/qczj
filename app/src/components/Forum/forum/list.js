import React,{Component} from "react"
import Loading from "../../loading"
class List extends Component{
    render(){
<<<<<<< HEAD
     let {navlist} = this.props;

    
=======
     let {list} = this.props;
>>>>>>> wang3
        return(
        <ul className = "con_list">{
            list.map((item,index)=>{
                return <li key ={index}>
                    <img src = {item.Img} />
                    <div>
                        <p>{item.Title}</p>
                        <p className = "iconfont">&#xe671;{item.PublicTimeStr}</p>
                        <p className = "iconfont">&#xe609;{item.ReplycountStr}</p>
                    </div>
                </li>
            })
          
        }
        <Loading />
          </ul>
        
        )
    }
} 
export default List

