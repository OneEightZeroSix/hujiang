import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd';
import '../../../assets/antd.css';



export class XimgPop extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

 
    render() {
        return (

            <div className="pswp pswp--open pswp--touch pswp--svg" aria-hidden="false" style={{ display:this.props.isShowImg ? 'block':'none',position: 'fixed', opacity: 1 }}>
                <div className="pswp__bg" style={{ opacity:"1"}}></div>
                <div id="slideBox" className="slide" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: 'auto', marginTop: '50%' }}>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <Carousel dots='false' >
                            <div className="slideitem" data-dsp="464" style={{display: 'table-cell', verticalAlign: 'top', width: '375px' }}>
                                <div id="mch_dsp_5">
                                    <a href="#" target="_self">
                                        <img src="http://f2n.c.hjfile.cn/pic/201508/65799476-77e4-48f5-9760-9da3eee694c8_n.jpg" title="" alt="" border="0" height="auto" width="100%" /></a>
                                </div>
                            </div>
                            <div className="slideitem" data-dsp="464" style={{ display: 'table-cell', verticalAlign: 'top', width: '375px' }}>
                                <div id="mch_dsp_5">
                                    <a href="#" target="_self">
                                        <img src="//res.hjfile.cn/classecm/pages/abTestIntro/images/how-to-class-60abe.png" title="" alt="" border="0" height="auto" width="100%" /></a>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                 <div className="pswp__top-bar">
                            {/* <div className="pswp__counter">1 / 2</div> */}
                            <button onClick={this.props.showImg.bind(this)} className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                            <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                            <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut"></div>
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
        showImg() {
            dispatch({
                type: "showImg",
                isShowImg: false
            });
        },
    }
})(XimgPop);
