import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Balance from 'pages/balance';  
import Helpcenter from 'pages/helpcenter'; 
import Home from 'pages/home'; 
import Production from 'pages/production'; 
import Record from 'pages/record'; 
export default class App extends Component{
    render(){
        return <Router>
            <Switch>
                <Route path="/record" component={Record}></Route>
                <Route path="/balance" component={Balance}></Route>
                <Route path="/helpcenter" component={Helpcenter}></Route>
                <Route path="/production" component={Production}></Route>
                <Route path="/"  exact component={Home}></Route>
            </Switch>
        </Router>
    }
}