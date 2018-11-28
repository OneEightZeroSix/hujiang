import React, { Component } from 'react';
import { Icon } from 'antd'
import { connect } from 'react-redux'

import lyex from  '../../../libs/store.js'


class XdetailNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedClass: 'nav-tabs-wrapper',
            returnTopArea: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onscroll);

    }
    componentWillUnmount() {
        // 移除页面滚动监听
        window.removeEventListener('scroll', this.onscroll);
    }

    onscroll=()=> {
        let reTop = window.pageYOffset;
        // console.log(window.pageYOffset);
        if(reTop > 800 ) {
            this.setState({
                returnTopArea: true
            })
        }else {
            this.setState({
                returnTopArea: false
            })
        }
        if (reTop >= 190) {
            this.setState({
                fixedClass: 'nav-tabs-wrapper fixed-tab-area visible'
            })
        } else if (reTop < 190) {
            this.setState({
                fixedClass: 'nav-tabs-wrapper'
            })
        }
    }

    // toggleActive(index) {
    //     console.log(index);
    //     this.setState ({
    //         tab: index,
    //     })
    //     window.scrollTo(0, 190)
    //     // lyex.emit("toggleActive",index);
    // }

    returnTop() {
        // 点击滚动到顶端
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
            <div className={this.state.fixedClass}>
                <nav className="nav-tabs clearfix ">
                    {(() => {
                        return this.props.tabDate.map((item, index) => {
                            return (
                                <a href="javascript:void(0);" key={index} onClick={this.props.toggleActive.bind(this,index)} className={this.props.tab === index ? "tab-item active" : "tab-item"} data-target="tab-basic-info" data-trace="introV1_lesson" data-trace-class_id="18387806">
                                    {item.tabItem}
                                    <div className="navMark"></div>
                                </a>
                            );
                        });
                    })()}
                </nav>
            </div>
            <div className="go-to-top-area" onClick={this.returnTop.bind(this)} data-trace="introV1_top" style={{display: this.state.returnTopArea ? 'block' : 'none'}}><Icon type="up" /></div>
        </div>
        );
    }

}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        toggleActive(index) {
            window.scrollTo(0, 190)
            dispatch({
                type: 'toggleActive',
                tab: index
            });
        }
    }
})( XdetailNav );
