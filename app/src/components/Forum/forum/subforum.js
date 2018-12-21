import React, { Component } from "react"
import { NavLink } from "react-router-dom";
class Subforum extends Component {
    render() {
        let { forumlist, subfor_logo } = this.props;
        return (
            <div className="subfor">
                <div className="subfor_input">
                    <input text="type" className="iconfont" placeholder="&#xe6d8;请输入论坛名称" />
                </div>
                <div className="container">
                    <div className = "containernav">
                        <NavLink to="">常用论坛</NavLink>
                        <NavLink to="">收藏论坛</NavLink>
                        <NavLink to="">找论坛&gt; </NavLink>
                    </div>
                    <ul className="subfor_list">
                        {
                            forumlist.map((item, indux) => {
                                return <li key={indux}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <ul className="subfor_logo">
                    {
                        subfor_logo.map((item, index) => {
                            return <li key={index}>
                                <NavLink to={item.path}>
                                    <img src={item.src} />
                                    <p>{item.name}</p>
                                </NavLink>
                            </li>
                        })
                    }

                </ul>


            </div>
        )
    }
}
export default Subforum