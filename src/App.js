import React,{PureComponent} from 'react'
import {hashHistory} from 'react-router'
import Routers from './Routers'

export default class App extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Routers history={hashHistory}/>
        )
    }
}