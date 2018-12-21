import React, { Component } from "react"
class Alllist extends Component {
    render() {
        let { quickcar } = this.props;
        return (
            <div className="allcar">
                <ul>
                    {
                        quickcar.map((item, index) => {
                            return <li key={index}>
                                <img src={item.brandlogo} />
                                <p>{item.brandname}</p>
                            </li>
                        })

                    }
                </ul>
            </div>
        )
    }

}
export default Alllist