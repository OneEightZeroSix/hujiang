import React, { Component } from 'react'
import { connect } from 'react-redux'

export class XloginPop extends Component {
  render() {
    return (
       <div>
        <div className= {this.props.isShowLoginPop ? "user_center openUserCenterModal" : "user_center closeUserCenterModal"} id="user_center"><div className="user_center_con">
        <div className="vipcenter v-top">
            <a data-trace="MCmine_prime" href="/ec/vip">
            <img src="//n1image.hjfile.cn/zhuanti/2018/10/29/474c58482c0058fc1ed061234ab3d2f5.png" alt="" />
            </a>
        </div>
        <div className="my_wx J-uscenter-tabs">
        <a className="first-one" href="/myclass?hideNav=1" data-trace="homePage_personalcenter_myClass" data-trace-page="intro">
            <i className="icon-center icon-myclass"></i>我的班级
        </a>
        <a href="/order/classorder.aspx?hideNav=1" data-trace="homePage_personalcenter_order" data-trace-page="intro">
            <i className="icon-center icon-order"></i>我的订单<span className="red-circle-order" style={{display:'none'}}></span>
        </a>
        <a href="/course/cang.aspx?tab=0" data-trace="homePage_personalcenter_coins" data-trace-page="intro">
            <i className="icon-center icon-collection"></i>我的收藏
        </a>
        <a className="first-one" href="/coupon/my/?hideNav=1" data-trace="homePage_personalcenter_coupons" data-trace-page="intro">
            <i className="icon-center icon-ticket"></i>卡券开课
        </a>
        <a href="//pay.hujiang.com/mcorder/h5/init.html" data-trace="homePage_personalcenter_fundaccount" data-trace-page="intro">
                <i className="icon-center icon-account-header"></i>我的账户
        </a>
        <a href="//mc.hujiang.com/classtopic/detail/90467" data-trace="homePage_personalcenter_invites" data-trace-page="intro">
            <i className="icon-center icon-invite"></i>邀请返利
        </a>
        </div><div className="unlogin">
        <div className="btn btnGreen logregBtn">
            <a href="//pass.hujiang.com/4453_m/?source=m_class&amp;url=https%3A%2F%2Fmc.hujiang.com%2F18387806%2Fintro">登录</a><span>  /  </span><a href="//pass.hujiang.com/4453_m/?source=m_class&amp;url=https%3A%2F%2Fmc.hujiang.com%2F18387806%2Fintro">注册</a>
        </div>
        </div></div></div>
        <div className="headerMask" style={{display: this.props.isShowLoginPop ? "block" : "none"}}></div>
        </div>
    )
  }
}

export default connect((state) => {
    return state
  }, (dispatch) => {
    return {
      showLoginPop() {
            dispatch({
                type: "showLoginPop",
                isShowLoginPop: true
            });
        },
    }
  })( XloginPop );
