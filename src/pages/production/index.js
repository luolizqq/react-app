import React,{Component} from "react";
import {connect} from "react-redux";
import {getProductList} from "store/production/action";
import styles from "./index.less";
import PublicHeader from "components/publicHeader";
@connect(({productData,})=>({productData}))
class Production extends  Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        if(this.props.productData.productList.length ==0){
            this.props.dispatch(getProductList());
        }
    }
    render(){
        const productList =this.props.productData.productList;
        console.log("list",productList)
        return <div>
            <PublicHeader title="首页"></PublicHeader>
            <ul className={styles.productList}>
                {
                    productList.map(item=>(<li className={styles.productItem}>
                        <div>
                            <span class="iconfont icon-xxx"></span>
                            <span>{item.product_name}</span>
                        </div>
                        <div>
                            <span>-</span>
                            <span>{item.product_num}</span>
                            <span>+</span>
                        </div>
                    </li>))
                }
            </ul>
        </div>  
    }
}
export default  Production