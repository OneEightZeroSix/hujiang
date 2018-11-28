import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import creatHistory  from "history/createBrowserHistory";

// const history = creatHistory();

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
// console.log(history);

export class XsearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="search-wrapper">
                <div className="search-content">
                <span className="w-icon-search"></span>
                <input type="text" name="search" className="search-input" id="searchInput" placeholder="搜索沪江网校课程" />
                    <a href="javascript:;" className="search-reset" id="clearInput" style={{display: 'none'}}></a>
                    <a onClick={history.goBack} href="javascript:;" className="search-back-btn" data-trace="homePage_searchField_back">取消</a>
                    <a href="javascript:;" className="search-btn" id="searchbtn" style={{display: 'none'}} data-trace="xkzx_cp_searchbutton">搜索</a>
                </div>
            </div>
            )
        }
    }
    
    export default XsearchHeader
