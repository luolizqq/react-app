import React,{Component} from "react";
import {connect} from "react-redux";
import { Drawer} from 'antd-mobile';
import styles from "./index.less";
import {NavBar} from 'antd-mobile';
import {withRouter} from "react-router-dom";
import classNames from "classnames";
import {Link} from "react-router-dom"
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
            <div className={styles.list}>
                <Link to="/">
                    <span>首页</span>
                    <span class="iconfont icon-icon1"></span>
                </Link>
                <Link to="/balance">
                    <span>提现</span>
                    <span class="iconfont icon-icon1"></span>
                </Link>
                <Link to="/helpcenter">
                    <span>帮助中心</span>
                    <span class="iconfont icon-icon1"></span>
                </Link>
            </div>  
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
        // contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
          {this.props.children}
      </Drawer>
        </div>  
    }
}
export default PublicHeader;