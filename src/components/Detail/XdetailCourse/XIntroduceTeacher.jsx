import React, { Component } from 'react';
import { connect } from 'react-redux'

class XIntroduceTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // componentDidMount(){
    //         document.onclick=this.test;
    //     }
    // test=()=> {
    //     console.log(this.props.teachersData);
    // }

    render() {
        return (
            <div className="teacher-info-area widget-card">
                <div className="item-info">
                    <p className="item-name">师资介绍</p>
                    <ul className="teacher-list">
                        {(() => {
                            return this.props.teachersData.map((item, index) => {
                                return (
                                    <li key={index} data-index="0">
                                        <img onClick={this.props.toggloTeacherPop.bind(this, index)} className="teacher-avatar" src={item.avatar} alt="" />
                                        <p className="teacher-name">{item.teacherName}</p>
                                    </li>
                                );
                            });
                        })()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        toggloTeacherPop(index) {
            console.log(this.props.teachersData[index]);
            dispatch({
                type: "toggloTeacherPop",
                isTeachersPop: true,
                teacherIdx: index
            });
        },
    }
})(XIntroduceTeacher);
