import React from "react"
import "./style.less"

export default class CustomerHeader extends React.Component{
    render(){
        return(
            <div id="home-header" className="clear-fix">
                <div className="home-header-middle">
                    <div className="search-container">
                        <p className="customer-head">customer update</p>
                    </div>
                </div>
            </div>
        )
    }
}