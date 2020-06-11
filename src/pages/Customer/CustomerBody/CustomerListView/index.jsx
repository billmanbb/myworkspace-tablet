import React from "react"
import "./style.less"

export default class HomeHotView extends React.Component{

    render(){
        const data = this.props.data;
        const title = this.props.title;
        return(
            <div className="hotproduct">
            <h3>{ title }</h3>
                <div className="hot-container">
                    <ul className="clear-fix">
                        {
                            data.map((element,index) => {
                                return(
                                    <li key={ element.id}>
                                        <span>{ element.id }</span>
                                        <span>{ element.name }</span>
                                        <span>{ element.sex }</span>
                                        <span>{ element.phone }</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}