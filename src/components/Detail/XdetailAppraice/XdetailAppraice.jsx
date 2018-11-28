import React, { Component } from 'react'
import { connect } from 'react-redux'

export class XdetailAppraice extends Component {
    render() {
        return (
            <div className="tab-content-item tab-evaluation" style={{ display:this.props.tab === 2 ? 'block' : 'none' }}>
                <div className="evaluation-list-area" style={{ minHeight: '614px' }}>
                    <div className="item-info">
                        <div className="item-name">
                            学员评价<span className="evaluation-count">(2000+)</span>
                            <a className="more-evaluation-info check-more" href="javascript:void(0);">
                                <div className="evaluation-star-wrapper" data-score="4.77"><div className="hj-evaluation-star-content small-star">
                                    <div className="star-content">
                                        <div className="star-content-inner">
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                        </div>
                                    </div>
                                    <div className="solid-star-content" style={{width: '70px'}}>
                                        <div className="star-content-inner">
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </a>

                        </div>
                        <ul className="evaluation-list">
                            <li>
                                <div className="evaluation-student-info">
                                    <div>
                                        <img src="https://i2n.hjfile.cn/u/200/102944640/951a7647593b401.jpg" className="student-photo" />
                                        <span className="student-name">考***墙</span>
                                    </div>
                                    <div className="evaluation-create-date">2018-08-04</div>
                                </div>
                                <div className="evaluation-comment-wrapper">
                                    <div className="evaluation-comment">简直完美</div>
                                    <div className="evaluation-comment-show-all"><div className="simi-transparent-bg"></div>更多<i className="hui-icon hui-icon-carat-d"></i></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                )
            }
        }
        
        export default connect((state) => {
            return state
        }, (dispatch) => {
            return {

            }
        })( XdetailAppraice );
