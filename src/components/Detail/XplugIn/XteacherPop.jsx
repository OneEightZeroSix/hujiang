import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd';


export class XteacherPop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="popup" id="__hj_popup_1542803012828" style={{ display: this.props.isTeachersPop ? 'block' : 'none', transformOrigin: '0px 0px 0px', opacity: 1, transform: 'scale(1, 1)' }}>
                <div className="popup-overlay"></div>
                <div className="popup-container">
                    <div className="popup-content">
                        <div className="teacher-detail">
                            <div className="bg">
                                {(() => {
                                    return this.props.teachersData.map((item, index) => {
                                        if(index == this.props.teacherIdx){
                                            return (
                                                <div key={index} className="content">
                                                    <img src={item.avatar} className="img" />
                                                    <div className="hi"></div>
                                                    <div className="text">
                                                        <div className="name">
                                                            {item.teacherName}
                                                        </div>
                                                        <div className="desc">
                                                            {item.summary}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    });
                                })()}

                                <a onClick={this.props.toggloTeacherPop.bind(this)} className="close" href="javascript:void(0);">
                                    <Icon type="close" style={{marginTop: '-5px'}}/>
                                </a>
                            </div>
                        </div>
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
        toggloTeacherPop() {
            console.log();
            dispatch({
                type: "toggloTeacherPop",
                isTeachersPop: false
            });
        },
    }
})(XteacherPop);
