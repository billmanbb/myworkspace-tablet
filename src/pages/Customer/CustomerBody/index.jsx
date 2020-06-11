import React from "react"
import customer from "../../../api/customer"
import CustomerListView from "./CustomerListView"

export default class HomeHot extends React.Component{

    constructor(){
        super();
        this.state = {
            customers:[]
        }
    }

    componentDidMount(){
        customer.getCustomersData()
        // .then(res => res.json())
        .then(res => {
            this.setState({
                customers:res.data
            })
        })

        
    }

    render(){
        const customerlist = this.state.customers;
        return(
            <div>
                {
                    customerlist.length > 0?
                    <CustomerListView data={ customerlist } title={ '顾客列表' }/>
                    : <div>正在请求数据</div>
                }

            </div>
        )
    }
}