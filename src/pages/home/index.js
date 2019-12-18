import React,{Component} from "react";
import {connect} from "react-redux";
import PublicHeader from "components/publicHeader";
import styles from "./index.less";
@connect(({home})=>({home}))
class Home extends  Component{
    constructor(props){
        super(props);
        this.state={
            salesAmount:0
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.dispatch({type:"left"})
        },3000)
    }
    changeSalesAmount=(value)=>{
        this.salesAmount = value;
    }
    render(){
        return <div className={styles.head}>
            <PublicHeader title="首页">
            
            </PublicHeader>
            <h2>请录入您的信息</h2>
            <form className={styles.form}>
                <div>
                    <span>销售金额</span>
                    <input type="text" placeholder="请输入订单金额" value={this.state.salesAmount} onChange={this.changeSalesAmount}/>
                </div>
            </form>
        </div>  
    }
}
export default Home