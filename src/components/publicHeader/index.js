import React,{Component} from "react";
import {connect} from "react-redux";
import { Drawer} from 'antd-mobile';
import styles from "./index.less";
import {NavBar} from 'antd-mobile';
import {withRouter} from "react-router-dom";
@withRouter
class PublicHeader extends  Component{
    constructor(props){
        super(props);
        this.state={
            open: true,
        }
    }
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
      }
    componentDidMount(){
       console.log(123,this.props.history)
    }
    handleClose=()=>{
        this.setState({open:!this.state.open})
    }
    render(){
        const sidebar =(
            <ul>
                <li>首页</li>
                <li>提现</li>
                <li>帮助中心</li>
            </ul>  
        )
        return <div className={styles.header}>
            <NavBar 
            className={styles.title}
            leftContent={<span className="iconfont icon-liebiaozhankai"></span>}
            onLeftClick={this.handleClose}
            rightContent={<span onClick={()=>{this.props.history.push("/record")}} className="iconfont icon-dlsz"></span>}
            >{this.props.title}</NavBar>
             
           <Drawer
        className={styles.drawer}
        // style={{ height: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
      </Drawer>
        </div>  
    }
}
export default PublicHeader;