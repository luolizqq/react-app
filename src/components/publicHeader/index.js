import React,{Component} from "react";
import {connect} from "react-redux";
import { Drawer} from 'antd-mobile';
import styles from "./index.less";
import {NavBar} from 'antd-mobile';
import {withRouter} from "react-router-dom";
import classNames from "classnames";
import { Transition } from 'react-transition-group';
import {Link} from "react-router-dom"
@withRouter
class PublicHeader extends  Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
        }
    }
    handleClose=()=>{
        this.setState({open:!this.state.open})
    }
    render(){
        const duration = 300;
        const defaultStyle = {
        transition: `left ${duration}ms ease-in-out`,
        left:'-100%'
        }
        const transitionStyles = {
        entering: { left: 0},
        entered:  { left: 0},
        exiting:  { left: '-100%' },
        exited:  { left: '-100%' },
        };
        return <div className={styles.header}>
            <NavBar 
            className={styles.title}
            leftContent={<span className="iconfont icon-liebiaozhankai"></span>}
            onLeftClick={this.handleClose}
            rightContent={<span onClick={()=>{this.props.history.push("/record")}} className="iconfont icon-dlsz"></span>}
            >{this.props.title}</NavBar>
             <Transition in={this.state.open} timeout={500}>
                {state => (
                    <div className={styles.list} style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                      }}>
                        <Link to="/">
                            <span>首页</span>
                            <span className="iconfont icon-icon1"></span>
                        </Link>
                        <Link to="/balance">
                            <span>提现</span>
                            <span className="iconfont icon-icon1"></span>
                        </Link>
                        <Link to="/helpcenter">
                            <span>帮助中心</span>
                            <span className="iconfont icon-icon1"></span>
                        </Link>
                    </div>
                )}
            </Transition>
        </div>  
    }
}
export default PublicHeader;