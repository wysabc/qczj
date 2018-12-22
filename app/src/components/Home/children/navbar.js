import React,{Component} from "react"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class Navbar extends Component{
    render(){
        let {getcontentlist}=this.props
        return (
            <div id="navbar">
                <Tabs defaultActiveKey="1" >
               <TabPane tab="选车" key="1" className="tabbar"> {
                  getcontentlist.map((item,index)=>{
                      if(index<9){
                          return (
                              <div key={index} className="tabcar">
                                <img src={item.logo} />
                                <p>{item.name}</p>
                              </div>
                          )
                      }
                  })
               }
               <div className="tabcar">
               <a href="/">
                <img  src="//x.autoimg.cn/m/images/100x100_2.png"/>
                <p>更多</p>
                </a>
               </div> 
               </TabPane>
             <TabPane tab="主打车" key="2" className="tabbar">Content of Tab Pane 2</TabPane>
             <TabPane tab="二手车" key="3" className="tabbar">Content of Tab Pane 3</TabPane>
             <TabPane tab="贷款购车" key="4">Content of Tab Pane 4</TabPane>
            </Tabs>
            </div>
        )
    }
}