import React, { Component } from 'react';

class XlistNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isshowNav: false
        }
    }
    showNav() {
        this.setState({
            // isshowNav: ! this.state.state
        })
    }
  render() {
    return (
        <div className="nav">
            <div id="courseNav" data-trace="xkzx_cp_category" data-tcount="1" className="first_nav" data-cid="29">英语能力/考试</div>
            <div id="filterBtn" className="filter_nav" style={{display: 'block'}}>筛选<i className="filter_icon"></i></div>
            <div onClick={this.showNav.bind(this)} id="orderBtn" className="order_nav">综合<i className="common_order common_order_1"></i></div>
            {/* secondNav */}
            <ul id="orderList" className="order_list" style={{display: this.state.isshowNav ? 'block' : "none"}}>
                <li className="cur" data-title="综合" data-id="1">综合排序<i className="common_order"></i></li>
                <li data-title="人气" data-id="2">人气最高<i className="common_order"></i></li>
                <li data-title="开班" data-id="6">开班时间<i className="common_order"></i></li>
                <li data-title="开班" data-id="5">开班时间<i className="common_order"></i></li>
                <li data-title="价格" data-id="4">课程价格<i className="common_order"></i></li>
                <li data-title="价格" data-id="3">课程价格<i className="common_order"></i></li>
            </ul>
        </div>
    );
  }
}

export default XlistNav;
