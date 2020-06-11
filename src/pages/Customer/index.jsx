import React from "react"
import CustomerHeader from "./CustomerHeader"
import CustomerBody from "../Customer/CustomerBody"

import { connect } from "react-redux"

class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomerHeader city={ this.props.city.cityName} history={this.props.history}/>
                <CustomerBody />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(Customer)