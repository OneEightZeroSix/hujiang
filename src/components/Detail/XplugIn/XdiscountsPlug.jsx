import React, { Component } from 'react'
import { Provider, connect } from 'react-redux';


export class XdiscountsPlug extends Component {
    constructor(props) {
        super(props);
        this.state = {
            benefitData: [
                {
                    discountType: '折',
                    discountDetail: '爆款直降！限时5.5折！'
                },
                {
                    discountType: '赠',
                    discountDetail: '新概念英语 新版 1 '
                },
                {
                    discountType: '赠',
                    discountDetail: '新概念英语 新版 2 '
                },
                {
                    discountType: '赠',
                    discountDetail: '新概念英语 新版 3 '
                },
                {
                    discountType: '赠',
                    discountDetail: '新概念英语 新版 4 '
                },
            ]
        }
    }

    // 希望实现点击空白处弹窗消失（未完成）
    // componentDidMount(){
    //     document.onclick=this.hide;
    // }
    // clickBlock(e){
    //     e.nativeEvent.stopImmediatePropagation();
    // }
    // hide=()=>{
    //     console.log(this.props);
    //     this.props.isShowDisCountsPlug = 'false'
    //     // this.refs.pop.style = 'none'
        
    // }

    render() {
        return (
            <div  id="__hj_action_bar_j-intro-benefit-modal" className="benefit-modal action-bar" style={{ display: this.props.isShowDisCountsPlug ? 'block' : 'none' }}>
                <div className="modal-mask" style={{}}></div>
                <div ref="pop"  className="action-bar-content fadeInUp">
                {/* onClick={this.one.bind(this)} */}
                    <p className="action-bar-title">优惠信息</p>
                    <ul className="action-bar-list" style={{ maxHeight: '400.2px', overflow: 'auto' }}>
                        {(() => {
                            return this.state.benefitData.map((item, index) => {
                                return (
                                    <li key={index} className="action-bar-item   " data-url="">
                                        <div className="benefit-bar-flag">{item.discountType}</div>
                                        {item.discountDetail}
                                    </li>
                                );

                            })
                        })()}

                    </ul>
                    <div className="action-bar-btn" onClick={this.props.toggleCountsPlug.bind(this)}>取消</div>
                </div>
            </div>
        )
    }

    // componentDidMount() {
    //     window.addEventListener('mouseup', this.handleMouseUp, false)
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('mouseup', this.handleMouseUp, false)
    // }
}



export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        toggleCountsPlug() {
            dispatch({
                type: "toggleCountsPlug",
                isShowDisCountsPlug: false
            });
        },
    }
})(XdiscountsPlug);
