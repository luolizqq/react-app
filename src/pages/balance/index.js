import React,{Component} from "react";
import {connect} from "react-redux";
@connect(({home})=>({home}))
class Balance extends  Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){

    }

    render(){
        return <div>
            home{this.props.home.direction}
        </div>  
    }
}
export default Balance