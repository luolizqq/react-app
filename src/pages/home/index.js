import React,{Component} from "react";
import {connect} from "react-redux";
import PublicHeader from "components/publicHeader";
import styles from "./index.less";
import mixin,{padstr} from "utils/mixin";
import Proptypes from "prop-types";
import {clearData,saveformData} from "store/home/action"
import {Link} from "react-router-dom";
@mixin({padstr})
class Home extends  Component{
    constructor(props){
        super(props);
        this.state={
            salesAmount:null,
            customTel:null,
            customName:null
        }
    }
    static propTypes ={
        formData:Proptypes.object.isRequired,
        productData:Proptypes.object.isRequired,
        saveformData:Proptypes.func.isRequired,
        clearData:Proptypes.func.isRequired
    }
    componentDidMount(){
        // setTimeout(()=>{
        //     this.props.dispatch({type:"left"})
        // },3000)
    }
    changeInput=(e,type)=>{
        let value = e.target.value;
        switch(type){
            case "salesAmount":
                value = value.replace(/[^0-9]/g,'');
                break;
            case "customTel":
                value = this.padstr(value.replace(/[^0-9]/g,''),[3,7]," ");
                break;
            case 'customName':
                break;
            default:;
        }
        this.props.saveformData(type,value)
    }
    render(){
        const productList = this.props.productData.productList;
        const selectProduct =(<Link to="/production" className={styles.selectProd}>
            {
                productList.length >0 ? (<ul>
                    {
                        productList.map((item)=>(<li>{item.product_name}</li>))
                    }
                </ul>):(<div className={styles.emptyPro}>选择产品</div>)
            }
        </Link>)
        return <div className={styles.head}>
            <PublicHeader title="首页"></PublicHeader>
            <h2>请录入您的信息</h2>
            <form className={styles.form}>
                <div className={styles.formItem}>
                    <span>销售金额:</span>
                    <input type="text" placeholder="请输入订单金额" value={this.props.formData.salesAmount} onChange={(e)=>{this.changeInput(e,"salesAmount")}}/>
                </div>
                <div className={styles.formItem}>
                    <span>客户姓名:</span>
                    <input type="text" placeholder="请输入客户姓名" value={this.props.formData.customName} onChange={(e)=>{this.changeInput(e,"customName")}}/>
                </div>
                <div className={styles.formItem}>
                    <span>客户电话:</span>
                    <input type="text" placeholder="请输入客户电话" value={this.props.formData.customTel} onChange={(e)=>{this.changeInput(e,"customTel")}}/>
                </div>
            </form>
            <h2>请选择销售的产品</h2>
            {selectProduct}
            <button>提交</button>
        </div>  
    }
}
export default connect(
    ({formData,productData})=>({formData,productData}),
    {
        clearData,
        saveformData
    }
    )(Home)
// export default Home