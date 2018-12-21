import React, { Component } from "react"
import { connect } from "react-redux"
import Hot from "./findcar/hot"
import Quick from "./findcar/quick"
import Alllist from "./findcar/alllist"
import { findcar_list_action, quick_car } from "../../../action/Find/actionCreator"
class Findcar extends Component {
    render() {
        let { carlist, quickcar } = this.props;
        return (
            <div className="findcar">
                <Hot carlist={carlist} />
                <Quick quickcar={quickcar} />
                <Alllist quickcar={quickcar} />
            </div>
        )
    }
    componentDidMount() {
        this.props.getCarList();
    }
}
const mapStateToProps = (state) => ({
    carlist: state.Findcar.carlist,
    quickcar: state.Quickcar.quickcar
})
const mapDispatchToPROPS = (dispatch) => ({
    getCarList() {
        dispatch(findcar_list_action());
        dispatch(quick_car());
    }
})
export default connect(mapStateToProps, mapDispatchToPROPS)(Findcar)