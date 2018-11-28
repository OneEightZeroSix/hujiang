import React, { Component } from 'react'
import { connect } from 'react-redux';


export class XfeaturePlug extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featureData: [
                {
                    title: '配套词场',
                    detail: '提供配套开心词场背词系统，学练结合，及时巩固与复习，背词效果更出众！'
                },
                {
                    title: '24H内答疑',
                    detail: '24小时内助教答疑区专业答疑，解决您课程学习中的问题。'
                },
                {
                    title: '作业批改',
                    detail: '24小时内助教作业区专业批改课后作业，帮助巩固学习效果！'
                },
                {
                    title: '资料下载',
                    detail: '提供独家学习资料或内部讲义下载，辅助课程学习，助力达成最终学习目标！'
                },
                {
                    title: '系统化学习',
                    detail: '学习规划一目了然，学习、练习、测试高度结合、完整的教学过程带来更好的学习效果！'
                }
            ]
        }
    }

    render() {

        return (

            <div className="feature-modal action-bar" id="__hj_action_bar_tpl-pop-content-service-detail" style={{ display: this.props.isShowFeaturePlug ? 'block' : 'none' }}>
                
                <div className="modal-mask" style={{}}></div>
                <div className="action-bar-content fadeInUp">
                    <div className="feature-detail-wrapper">
                        <ul className="feature-detail">
                            {(() => {
                                return this.state.featureData.map((item, index) => {
                                    return (
                                        <div  key={index}>
                                                <li className="feature-item">
                                                    <h2 className="feature-item-title">{item.title}</h2>
                                                    <p className="feature-item-detail">
                                                        {item.detail}
                                                    </p>
                                                </li>
                                        </div>
                                    );
                                })
                            })()}

                        </ul>
                    </div>

                    <div className="action-bar-btn" onClick={this.props.toggleFeaturePlug.bind(this)}>取消</div>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        toggleFeaturePlug() {
            dispatch({
                type: "toggleFeaturePlug",
                isShowFeaturePlug: false
            });
        },
    }
})(XfeaturePlug);
