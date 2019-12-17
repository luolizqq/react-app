import React, { Component } from "react";
import  {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import Home from "pages/home"
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }
    render() {
        // let match = useRouteMatch();
        return <div>
            <Link to='/record/passed'>pass页面</Link>
            <Switch>
                <Route path={`${this.props.match.url}/:type`} component={Home}>
                </Route>
                
            </Switch>
        </div>
    }
}