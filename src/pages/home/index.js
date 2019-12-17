import React,{Component} from "react";
import {connect} from "react-redux";
import PublicHeader from "components/publicHeader";

@connect(({home})=>({home}))
class Home extends  Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.dispatch({type:"left"})
        },3000)
    }
    
    render(){
        return <div>
            <PublicHeader title="首页"></PublicHeader>
        </div>  
    }
}
export default Home