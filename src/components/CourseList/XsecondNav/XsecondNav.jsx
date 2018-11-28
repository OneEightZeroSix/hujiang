import React, { Component } from 'react';

class XsecondNav extends Component {
    render() {
        return (
            <div id="courseNavWrapper" className="coursewrapper">
                <div data-reactroot="" className="second_nav">
                    <div className="course_nav">
                        <div className="courseNavCon">
                            <ul id="courseNavList" className="second_nav_list cf">
                                <li className="sub_cate_all" data-cateid="0">
                                    <a href="javascript:;" id="allCourseBtn" title="全部课程">全部课程</a></li>
                                <li className="active" data-cateid="29" data-twotabindex="0">
                                    <div className="cateItem"><span className="name">英语能力/考试</span></div>
                                    <div className="nav_list" style={{display: 'block'}}>
                                        <ul className="sub_cate_wrapper">
                                            <li className="sub_cate_item sub_cate_all" data-name="英语能力/考试" data-enid="29">全部</li>
                                            <li className="sub_cate_item"><span className="sub_cate_title" data-enid="33">零基础英语</span>
                                                <ul className="cate_item_list">
                                                    <li className="cate_item" data-enid="33">全部</li>
                                                    <li className="cate_item" data-enid="50">英语入门</li>
                                                    <li className="cate_item" data-enid="51">新概念</li>
                                                    <li className="cate_item" data-enid="52">从零学美语</li>
                                                    <li className="cate_item" data-enid="53">零至四六级</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default XsecondNav;
