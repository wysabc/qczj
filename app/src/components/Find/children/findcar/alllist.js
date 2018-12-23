import React, { Component } from "react"
import { Link } from "react-router-dom"

class Alllist extends Component {
    render() {
        let { carlist } = this.props;
        return (
            <div className="allcar">
                <ul>
                    {
                        carlist.map((item, index) => {
                            return <li key={index} >
                               <Link to = {"/more?"+index} > 
                               <img src={item.picitems[0]} />
                                    <span>{item.name}</span>
                                </Link>
                                </li>
                        })

                    }
                </ul>
            </div>
        )
    }
    
}
export default Alllist