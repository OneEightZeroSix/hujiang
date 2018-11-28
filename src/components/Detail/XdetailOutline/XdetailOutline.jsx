import React, { Component } from 'react'
import { connect } from 'react-redux'

export class XdetailOutline extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  render() {
    return (
        // style={{display: 'block', minHeight: 'initial'}}
      <div className="tab-content-item tab-outline" style={{ display:this.props.tab === 1 ? 'block' : 'none'}} >
        <div className="outline-area">
            <ul className="accordion ">
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>

                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-head">
                        <div className="unit-name-wrapper">
                            <i className="hui-icon hui-icon-list"></i>
                            <span className="unit-name">试听单元</span>
                        </div>
                        <i className="arrow hui-icon hui-icon-carat-u"></i>
                    </div>
                    <div className="accordion-body" data-is-open="false" style={{display: 'none'}}>
                        <ul className="lesson-list">
                            <li>0 - 沪江网校学习指南</li>
                            <li>0 - 字母音标学习（1）</li>
                            <li>0 - Excuse me!</li>
                            <li>0 - A private conversation</li>
                            <li>0 - A puma at large</li>
                            <li>0 - Finding fossil man</li>
                        </ul>
                    </div>
                </li>


            </ul>
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
})( XdetailOutline );
