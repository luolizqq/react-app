import React,{Component} from "react";
import {connect} from "react-redux";
@connect(({home})=>({home}))
class HelpCenter extends  Component{
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
export default  HelpCenter