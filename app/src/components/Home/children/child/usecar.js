import React, { Component } from "react"

export default class Usecar extends Component {
    render() {
        let { usecar } = this.props
        console.log(usecar)
        return (
            <div id="usecar">
                <div >用车宝典</div>
                <ul>
                    {
                        usecar.map((item, index) => {
                            return <li key={index}>
                                <img src={item.Img} />
                                <div id="info">
                                 <p>{item.Title}</p>
                                <i className="fa fa-clipboard"></i><span>{item.ReplycountStr}</span>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>

        )
    }
}