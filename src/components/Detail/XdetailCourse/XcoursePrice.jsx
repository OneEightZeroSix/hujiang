import React, { Component } from 'react';
import { connect } from 'react-redux'

class XcoursePrice extends Component {
    constructor(props) {
       console.log(props);
        super(props);
        // 获取路由方式一：简单暴力，到处都可以用到
        // console.log(window.location.hash);
        // 获取路由方式二：获取从列表页传过来的props【注意，要从详情页的最大组件去获取，然后一层层传递到要使用的子组件，否则直接从子组件获取获取不到】
        this.props = props;
        console.log(this.props.url.split('/')[2])
    }
    render() {
        var dataID = this.props.url.split('/')[2];
        return (
            <div className="class-info">
                {(() => {
                    return this.props.courseData.map((item, index) => {
                        // 判断仓库中与从列表页传递过来的id相等的一项，【注意，可能两个的数据类型不同，所以用全等于符号无法判断，导致获取不到数据，因此改用双等于符号】
                        if(this.props.url.split('/')[2] == item.dataId){
                        return (
                            <ul key={index} className="list">
                                <li>
                                    <div className="title-area item-info">
                                        <p className="class-title">{item.title}</p>
                                        <p className="sub-title-2">{item.desc}&nbsp;•&nbsp;{item.time}</p>
                                        <p className="sub-title">经典教材打牢基础，PETS3强化课程带你顺利过关<a className="activityLink" href="http://q.url.cn/s/RHVa06m?_type=wpa&amp;isKfuin=1" >咨询赠学习资料！好课低至5折起&gt;&gt;</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="class-price-wrapper price-area">
                                        <div className="item-info">
                                            <div className="class-price-info">
                                                <div className="tab-cell">
                                                    <span className="class-price"><em>¥</em>{item.ori_price}<em>{item.small_ori_price}</em></span>
                                                    <span className="line-throu">¥{item.del_price}</span>
                                                </div>
                                                <div className="tab-cell">
                                                    <div className="discount-text">
                                                        <span className="">8折</span>
                                                    </div>
                                                </div>
                                                <div className="tab-cell"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        );
                        }
                    });
                })()}
            </div>
        );
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {

    }
})(XcoursePrice);
