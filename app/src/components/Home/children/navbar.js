import React,{Component} from "react"
import { Tabs } from 'antd';


const TabPane = Tabs.TabPane;
 class Navbar extends Component{
    render(){
        let {getcontentlist,moneycar,sizecar}=this.props
     
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
             <TabPane tab="贷款购车" key="3" className="tabbar">
               <div className="money">
                    <p>品牌</p>
                    <ul>
                    {moneycar.brand&&moneycar.brand.length>0?moneycar.brand.map((item,index)=>{
                            return <li key={index}><a href={item.url}>{item.name}</a></li>
                    }):""}
                    </ul>
               </div>
               <div className="money">
                    <p>车系</p>
                    <ul>
                    {moneycar.series&&moneycar.series.length>0?moneycar.series.map((item,index)=>{
                            return <li key={index}><a href={item.url}>{item.name}</a></li>
                    }):""}
                    </ul>
               </div>
               <div className="money">
                    <p>首付</p>
                    <ul>
                    {moneycar.firstpay&&moneycar.firstpay.length>0?moneycar.firstpay.map((item,index)=>{
                            return <li key={index}><a href={item.url}>{item.name}</a></li>
                    }):""}
                     </ul>
               </div>
               <p>
                 {moneycar.button&&moneycar.button.length>0?moneycar.button.map((item,index)=>{
                            return <li key={index}><a href={item.url}>{item.name}</a></li>
                    }):""}
               </p>
             </TabPane>
             <TabPane tab="二手车" key="4" className="tabbar">
                        <div className="size">
                            <ul className="sizecar">
                                {sizecar.pricerange && sizecar.pricerange.length > 0 ? sizecar.pricerange.map((item, index) => {
                                    return <li key={index}><a href={item.url}>{item.region}</a></li>
                                }) : ""}
                            </ul>
                        </div> 
                        <div className="size">
                            <ul className="sizecar">
                                {sizecar.levellist && sizecar.levellist.length > 0 ? sizecar.levellist.map((item, index) => {
                                    return <li key={index}><a href={item.url}>{item.levelname}</a></li>
                                }) : ""}
                            </ul>
                        </div> 
                        <div className="size">
                            <ul className="sizecar1">
                                {sizecar.brandlist && sizecar.brandlist.length > 0 ? sizecar.brandlist.map((item, index) => {
                                    return <li key={index}><a href={item.url}>{item.brandname}</a></li>
                                }) : ""}
                            </ul>
                        </div> 
                        <div className="more">
                                <a href={sizecar.buycarurl}>买车</a>
                                <a href={sizecar.sellcarurl}>卖车</a>
                                <a href={sizecar.moreurl}>金融服务</a>
                        </div>
             </TabPane>
            </Tabs>
            </div>
        )
    }
  
}

export default Navbar