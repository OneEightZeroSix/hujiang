import React, { Component } from 'react';

class Xcourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    courseName: '英语课程',
                    
                }
            ]
        }
    }
  render() {
    return (
        <section className="floor floor-visible floor-item english" id="english" data-trace="homePage_floor">
        <div className="header">
            <div className="left">英语课程</div>
            <a className="more" id="english-more" href="#"><span className="icon-text">更多</span><i className="icon-arrow2"></i></a>
        </div>
        <div className="body">
            <div className="inlineCon">
                <a className="inlineBox imggu col-6" id="english-oral" href="#" data-course="口语"></a>
                <a className="inlineBox imggu col-6" href="#" data-course="考试"></a>
                <a className="inlineBox imggu col-6" id="english-business" href="#" data-course="商务"></a>
                <a className="inlineBox imggu col-6" href="#" data-course="能力"></a>
            </div>
            <div className="inlineCon">
                <a className="inlineBox col-3 textgu" id="english-1v1" href="#">外教1对1</a>
                <a className="inlineBox col-3 textgu" id="english-oral-from-start" href="#">从零学口语</a>
                <a className="inlineBox col-3 textgu" href="#">新概念</a>
                <a className="inlineBox col-3 textgu" href="#">商务英语</a>
            </div>
            <div id="course_dsp_eng" className="dsp_space_banner" data-dsp="371"><div className="floor_dsp" id="mch_dsp_14"><a href="#" target="_self"><img src="https://resu8.hjfile.cn/resu8/2018/11/13/1cbf9a55cee7adcacd11e1ab7a0e1790.jpg" title="" alt="" border="0" height="auto" width="100%" /></a></div></div>
        </div>
    </section>
    );
  }
}

export default Xcourse;
