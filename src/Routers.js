import React,{PureComponent} from 'react'
import {Router,Route,Link,hashHistory} from 'react-router'

import Home from './containers/home/Home'


export default class Routers extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Router history={this.props.history}>
                <Route path="/" component={Home}>

                </Route>
            </Router>
        )
    }
}