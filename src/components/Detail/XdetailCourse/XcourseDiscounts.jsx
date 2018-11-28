import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Icon } from 'antd'


class XcourseDiscounts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

  render() {
    return (
        <div className="class-info">
            <ul className="list">
                <li></li>
                <li>
                    <div className="discount-activity-area item-info">
                        <div onClick={this.props.toggleCountsPlug.bind(this)} className="list-item benefit-bar clearfix">
                            <div className="list-item-title">优&nbsp;&nbsp;&nbsp;惠</div>
                            <div className="list-item-content " data-trace="introV1_discount" data-trace-class_id="18390791">
                            <div className="benefit-icon">折</div>
                            <div className="benefit-name " data-url="">
                                <span className="coupon-name" style={{width: '171.578px'}}>爆款直降！限时8折！</span>
                            </div>
                        </div>
                    <div className="list-item-nav" data-trace="introV1_discount" data-trace-class_id="18390791">
                        <span className="benefit-count">3项</span>
                        <i className="hui-icon hui-icon-carat-r"><Icon type="right" /></i>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className="item-info guarantee-area" data-trace="introV1_service" data-trace-class_id="18390791">
                <div className="guarantee-wrapper">
                    <div className="list-item guarantee-bar clearfix">
                        <div className="list-item-content">
                            <div className="guarantee-icon"></div>
                            <div className="guarantee-name-wrapper"><span className="guarantee-name" style={{width: '98.4844px'}}>15天保价</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div   onClick={this.props.toggleFeaturePlug.bind(this)} className="item-info service-area" data-trace="introV1_feature" data-trace-class_id="18390791">
                <ul className="item-info-list clearfix" style={{marginRight:'10px'}}>
                    <li className="list-item">配套词场</li>
                    <li className="list-item">24H内答疑</li>
                    <li className="list-item">作业批改</li>
                    <li className="list-item">系统化学习</li>
                </ul>
                <i  className="hui-icon hui-icon-carat-r"><Icon type="right" /></i>
            </div>
        </li>
        <li>
            <div className="select-class-area item-info">
                <div className="list-item" data-trace="introV1_classType" data-trace-class_id="18390791">
                    <div className="list-item-title">已&nbsp;&nbsp;&nbsp;选</div>
                        <div className="list-item-content">
                            <span className="class-name">特惠班 报班即学,有效期365天</span>
                        </div>
                        <div className="list-item-nav">
                            <i className="hui-icon hui-icon-carat-r"><Icon type="right" /></i>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    );
  }
}

export default connect((state) => {
	return state
},(dispatch) => {
	return {
		toggleCountsPlug() {
            console.log(333);
			dispatch({
				type: "toggleCountsPlug",
				isShowDisCountsPlug: true
            });
        },
        toggleFeaturePlug() {
            console.log(333);
			dispatch({
				type: "toggleFeaturePlug",
				isShowFeaturePlug: true
            });
		}
	}
})(XcourseDiscounts);
