import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from "./router";
import store from "./store";
import {Provider} from "react-redux"
import * as serviceWorker from './serviceWorker';
import setRem from "./utils/rem";
import 'antd-mobile/dist/antd-mobile.css';  
import './styles/iconfont/iconfont.css'
import "styles/reset.css";
setRem();
var FastClick = require('fastclick');
FastClick.attach(document.body);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
