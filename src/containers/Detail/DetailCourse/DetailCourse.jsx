import React, { Component } from 'react';
import { HashRouter as Router, Redirect } from "react-router-dom";
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'

import lyex from '../../../libs/store.js'


import XdetailHome from '../../../components/Detail/XdetailCourse/XdetailHome.js';
import XdetailOutline from '../../../components/Detail/XdetailOutline/XdetailOutline.jsx';
import XdetailAppraice from '../../../components/Detail/XdetailAppraice/XdetailAppraice.jsx';

class DetailCourse extends Component {
    constructor(props) {
        super(props);
        console.log(props.url);
        this.props = props;

    }

    componentDidMount() {
        // lyex.on("toggleActive",(data)=>{
        //     console.log(data);
        //     this.setState({

        //     })
        // })
    }

    render() {
        return (
            <div className="tab-content">
            <XdetailHome url={this.props.url}/>
            <XdetailOutline />
            <XdetailAppraice />
                {/* <Router>
                    <Switch>
                        <Route exact path="/detail/:dataId" component={XdetailHome} />,
                        <Redirect path="/" to={{ pathname: '/detail/:dataId' }} />
                          一开始想在页面中使用二级路由跳转到各个tab标签的组件下面，
                                    但如果多次点击同一个tab会出现警告，因为路由跳转到同一个路由的时候会出现警告 ，
                                    因此，改用发布订阅模式进行tab的切换
                         <Route path="/detail/XdetailOutline" component={XdetailOutline} />
                        <Route path="/detail/XdetailAppraice" component={XdetailAppraice} />  
                    </Switch>
                </Router> */}
                
            </div>

        );
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {

    }
})(DetailCourse);
