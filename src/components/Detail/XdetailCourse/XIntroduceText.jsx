import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Zmage from 'react-zmage'


export class XIntroduceText extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    // onBrowsing={(state) => {
    //     console.info("Browsing State: ", state)
    // }}

  render() {
    return (
    //   {/* 课程介绍 */}
      <div className="class-item">
      <div className="item-info">
        <p className="item-name">课程简介</p>
        <div className="rich-text-wrapper">
          <p  z-index="19260817" rel="2" className="J-magnify" onClick={this.props.showImg.bind(this)}><img data-src="http://f2n.c.hjfile.cn/pic/201508/65799476-77e4-48f5-9760-9da3eee694c8_n.jpg" src="http://f2n.c.hjfile.cn/pic/201508/65799476-77e4-48f5-9760-9da3eee694c8_n.jpg" /></p>
          <p><br /></p>
          <p>大学期间错过了四六级证书，想考个PETS三级？</p>
          <p>工作多年，英语已经忘得差不多了？</p>
          <p>从零开始学英语，充分利用网络教学手段，循序渐进，达到PETS三级非难事。</p>
          <p>①通过零基础音标班，从起步阶段便打好语音基础，为进一步学习做好充分的准备；</p>
          <p>②选用系列经典教材做基础课。体系完备、素材生动有趣。从基础开始，扎实学好英语；</p>
          <p>③完成基础课程的学习之后，进行PETS三级强化备考训练，名师指导，分版块学习，掌握更多考试技巧 。</p>
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
            console.log(333);
            dispatch({
                type: "showImg",
                isShowImg: true
            });
        },
    }
})( XIntroduceText);
