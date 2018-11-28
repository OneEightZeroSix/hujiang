import React, { Component } from 'react';

class Xfloor extends Component {
  render() {
    return (
        <section className="floor floor-visible special" id="special">
        <div className="header">●&nbsp;网校特色&nbsp;●</div>
        <div className="body inlineCon" data-trace="xkzx_cp_wyts_v1">
            <a className="inlineBox col-3">
                <i className="icon-note"></i>
                <div>笔记</div>
            </a>
            <a className="inlineBox col-3">
                <i className="icon-qa"></i>
                <div>答疑</div>
            </a>
            <a className="inlineBox col-3">
                <i className="icon-follow"></i>
                <div>跟踪</div>
            </a>
            <a className="inlineBox col-3">
                <i className="icon-contact"></i>
                <div>交流</div>
            </a>
            <a className="inlineBox col-3">
                <i className="icon-courseware"></i>
                <div>课件</div>
            </a>
            <a className="inlineBox col-3">
                <i className="icon-deskmate"></i>
                <div>同桌</div>
            </a>
            <a className="inlineBox col-3">
                <i className="icon-chart"></i>
                <div>互动</div>
            </a>
            <a className="inlineBox col-3">
                <i className="icon-touch"></i>
                <div>移动</div>
            </a>
        </div>
    </section>
    );
  }
}

export default Xfloor;
