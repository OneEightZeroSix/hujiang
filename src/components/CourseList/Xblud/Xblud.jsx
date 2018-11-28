import React, { Component } from 'react';

class Xblud extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handlesScroll = this.handlesScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handlesScroll);
    }
    componentWillUnmount() {
        // 移除页面滚动监听
        window.removeEventListener('scroll', this.handlesScroll);
    }

    handlesScroll = () => {
        let reTop = window.pageYOffset;
        if (reTop >= 800) {
            this.refs.returnTop.className = "returnTop"
        } else if (reTop < 800) {
            this.refs.returnTop.className = "returnTop hide"
        }
    }
    toTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <div className="buld-wrapper" style={{ bottom: '2.0533rem' }}>
                    <a href="//mc.hujiang.com/crm/zx?c=1&amp;jId=8&amp;tp=1004&amp;td=6&amp;utr=10000107" className="btn-consult"></a>
                </div>
                {/* // 当页面下拉到一定程度时，出现返回顶部的图标 */}
                <a onClick={this.toTop.bind(this)} ref="returnTop" id="returnTop" href="javascript:;" className="returnTop hide"></a>
            </div>

        );
    }
}

export default Xblud;
