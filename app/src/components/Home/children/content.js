import React,{Component} from "react"

export default class Content extends Component{
    render(){
        let {getcontentlist}=this.props
        return (
            <div id="content">
               {
                  getcontentlist.map((item,index)=>{
                      if(index<9){
                          return (
                              <div key={index} >
                                <img src={item.logo} />
                                <p>{item.name}</p>
                              </div>
                          )
                      }
                  })
               }
            </div>
        )
    }
}