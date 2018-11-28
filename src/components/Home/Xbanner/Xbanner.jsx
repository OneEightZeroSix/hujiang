import React, { Component } from 'react';

// 引入轮播图
import { Carousel } from 'antd';
import '../../../assets/antd.css';
class Xbanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    imgSrc: 'https://resu8.hjfile.cn/resu8/2018/11/14/4a5b653a2d9dd7d8e2e48750d1c10d6e.jpg'
                },
                {
                    imgSrc: 'https://resu8.hjfile.cn/resu8/2018/11/15/bc3614d5cea0edd87dbd40f53009a8e3.jpg'
                },
                {
                    imgSrc: 'https://resu8.hjfile.cn/resu8/2018/11/14/148430fc20da08da3647fc457fec8218.jpg'
                },
                {
                    imgSrc: 'https://resu8.hjfile.cn/resu8/2018/11/14/0829c780545dd41a4c569d9cf8efae91.jpg'
                },
                {
                    imgSrc: 'https://resu8.hjfile.cn/resu8/2018/11/14/0bf15fe181dbd3cc12521e327e28cc43.jpg'
                },
                {
                    imgSrc: 'https://resu8.hjfile.cn/resu8/2018/11/14/cd446a1165bc13ab43f487f608518b0a.jpg'
                },
                {
                    imgSrc: 'https://resu8.hjfile.cn/resu8/2018/11/14/4a5b653a2d9dd7d8e2e48750d1c10d6e.jpg'
                },
                {
                    imgSrc: 'https://resu8.hjfile.cn/resu8/2018/11/15/bc3614d5cea0edd87dbd40f53009a8e3.jpg'
                }
            ]
        }
    }

    render() {
        return (
            <div id="slideBox" className="slideBox">
                <div className="bd">
                    <div className="tempWrap" style={{ overflow: 'hidden', position: 'relative' }}>
                        <div className="tempWrap" style={{ overflow: 'hidden', position: 'relative' }}>
                            {/* <ul className="tempul" style={{ width: '3000px', position: 'relative', overflow: 'hidden', padding: '0px', margin: '0px', transitionDuration: '200ms', transform: 'translate(-2250px, 0px)  translateZ(0px)'}} > */}
                            {/* , transitionDuration: '200ms', transform: 'translate(-2250px, 0px)  translateZ(0px)'  */}
                            <Carousel autoplay >
                                {(() => {
                                    return this.state.data.map((item,index) => {
                                        return (
                                            <div className="slideitem" data-dsp="464" key={index} style={{ display: 'table-cell', verticalAlign: 'top', width: '375px' }}>
                                                <div className="floor_dsp" id="mch_dsp_5">
                                                    <a href="#" target="_self">
                                                        <img src={item.imgSrc} title="" alt="" border="0" height="auto" width="100%" /></a>
                                                </div>
                                            </div>
                                        );
                                    });
                                })()}
                            </Carousel>
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
                {/* <div className="hd">
                    <ul><div className="">1</div><div className="">2</div><div className="">3</div><div className="">4</div><div className="">5</div><div className="on">6</div></ul>
                </div> */}
            </div>
        );
    }
}

export default Xbanner;


