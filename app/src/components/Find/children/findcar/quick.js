import React, { Component } from "react"
import { NavLink } from "react-router-dom"
class Quick extends Component {
    render() {
        let { quickcar } = this.props;
        return (
            <div className="quickcar">
                <div className="hot">
                    <span>快速找车</span>
                    <div className="selectcar">智能选车</div>
                </div>
                <ul className="brand">
                    {
                        quickcar.map((item, index) => {
                            if (index < 5) {
                                return <li key={index}>
                                    <img src={item.brandlogo} />
                                    <p>{item.brandname}</p>
                                </li>
                            }
                        })
                    }
                </ul>
                <ul className="price">
                    <li>价格</li>
                    <li><NavLink to="#">5-8万</NavLink></li>
                    <li><NavLink to="#">8-15万</NavLink></li>
                    <li><NavLink to="#">15-20万</NavLink></li>
                    <li><NavLink to="#">20-30万</NavLink></li>
                </ul>
                <ul className="price">
                    <li>级别</li>
                    <li><NavLink to="#">全部SUV</NavLink></li>
                    <li><NavLink to="#">中型车</NavLink></li>
                    <li><NavLink to="#">紧凑型车</NavLink></li>
                    <li><NavLink to="#">大型车</NavLink></li>
                </ul>
                <p><NavLink to="">查看更多车型<span className="iconfont" >&#xe733;</span></NavLink></p>
            </div>
        )
    }

}

export default Quick