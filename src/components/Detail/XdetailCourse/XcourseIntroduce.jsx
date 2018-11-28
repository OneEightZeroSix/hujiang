import React, { Component } from 'react';

class XcourseIntroduce extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {/* 广告图片 */}
        <div className="advertisement-area widget-card">
          <div className="item-info">
            <div className="rich-text-wrapper">
              <p><a href="http://q.url.cn/s/RHVa06m?_type=wpa&amp;isKfuin=1" target="_blank"><img data-src="https://n1image.hjfile.cn/zhuanti/2018/11/13/ac17db3f942dfbb4fa9fba984a8dd804.gif" src="https://n1image.hjfile.cn/zhuanti/2018/11/13/ac17db3f942dfbb4fa9fba984a8dd804.gif" /></a></p>
            </div>
          </div>
        </div>

        {/* 学习目标 */}
        <div className="target-area widget-card">
          <div className="item-info">
            <p className="item-name">学习目标</p>
            <div className="rich-text-wrapper">
              <p>1.识记大纲词汇4000词，熟练使用2000词；</p>
              <p>2.通过学习，熟悉考试特点，提高各版块综合应考技能；</p>
              <p>3.顺利通过PETS三级考试，拿到证书。</p>
            </div>
          </div>
        </div>

        {/* 课程安排 */}
        <div className="schedule-area widget-card">
          <div className="item-info">
            <p className="item-name">课程安排</p>
            <p id="IntroShowXueBiTip" style={{ display: 'none' }}>提示：本课程不支持使用学币、学习卡购买</p>
            <div className="tov clearfix">
              <p className="c-999">总计<span>262</span>课时</p><i className="clc"></i>
              <span className="time-s"><p className="c-999">开课时间</p><p className="c-cd">报班即学</p></span>
              <span className="time-e"><p className="c-999">有效期至</p><p className="time-ex">有效期365天</p></span>
            </div>
            <div className="rich-text-wrapper">
              {/* <p rel="1" className="J-magnify"><img data-src="https://misg.hujiang.com/file/pic/201603/2c8005ce-19fd-4409-ba14-5d562c987f25.png" height="290" width="1000" src="https://misg.hujiang.com/file/pic/201603/2c8005ce-19fd-4409-ba14-5d562c987f25.png" /></p> */}
              <p><span style={{ color: 'green' }}><br /></span></p><p><span style={{ color: 'green' }}>开课后，可根据自己的情况决定具体的学习进度，不受时间地域限制。音频+讲义的课件形式适合任何网络，听课流畅！</span></p>
            </div>
          </div>
        </div>

        {/* 合适对象 */}
        <div className="objective-area widget-card">
          <div className="">
            <div className="item-info">
              <p className="item-name">适合对象</p>
              <div className="rich-text-wrapper">
                <p>1.英语零基础或基础薄弱的学习者；</p>
                <p>2.想要考PETS三级，顺利拿到证书的学习者；</p>
                <p>3.自考本科学历在读学员（通过PETS三级可免考自学考试英语二）。 &nbsp;</p>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    );
  }
}

class XcourseBookArea extends Component {
  render() {
    return (
      <div className="book-area widget-card">
        <div className="item-info">
          <p className="item-name">使用教材</p>
          <div className="rich-text-wrapper">
            <p>零基础音标课程：独家沪江网校自编讲义，看课件屏幕学习即可；</p>
            <p>新概念英语第一册精讲：《新概念英语 新版1》</p>
            <p>新概念英语第二册精讲：《新概念英语 新版2》</p>
            <p>报名即可获赠新概念1-2册教材，无需购买；</p>
            <p>PETS三级强化课程为网校自编讲义，看课件屏幕学习即可。</p>
            <p rel="7" className="J-magnify"><img data-src="https://n1image.hjfile.cn/audio_video/2018/05/29/84fae6380fa8f0759ffc508f56a7698d.jpg" title="undefined" alt="undefined" src="https://n1image.hjfile.cn/audio_video/2018/05/29/84fae6380fa8f0759ffc508f56a7698d.jpg" /></p>
          </div>
        </div>
      </div>
    );
  }
}

class XcourseBottom extends Component {
  render() {
    return (
      <div className="class-item" id="BottomOrganization">
        <div className="item-info">
          <div className="rich-text-wrapper"><p rel="8" className="J-magnify"><img src="//res.hjfile.cn/classecm/pages/abTestIntro/images/how-to-class-60abe.png" /></p></div>
          </div>
          <div className="bottom-infos">
            <span>价格说明</span>
            <p>划线价：指商品的沪江网校指导价、合作方提供的建议零售价，划线价并非原价，仅供参考。</p>
            <p>未划线价格：指商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或使用优惠券、学币、卡券等发生变化，最终以订单结算页价格为准。</p>
            <p className="special"><i>小贴士：此说明仅当出现价格比较时有效。因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，如您发现商品标价或促销信息有异常，请您立即联系我们，我们会及时补正。沪江网校祝您学习愉快！</i></p>
          </div>
        </div>
        );
      }
    }
    
export {XcourseIntroduce, XcourseBookArea, XcourseBottom };
        
