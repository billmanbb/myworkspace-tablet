import React from "react"
import { Route,HashRouter,Switch } from "react-router-dom"

import App from "../pages/app"
import Customer from "../pages/Customer"
import NotFound from "../pages/NotFound"


export default class AppRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App path="/">
                    <Switch>
                        <Route exact path="/" component={Customer}></Route>
                        <Route path="*" component={NotFound}></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}