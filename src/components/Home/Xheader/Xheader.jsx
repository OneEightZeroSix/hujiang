import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class Xheader extends Component {
  constructor(props) {
    super(props);
    
  }
 
  // 在 React 组件间进行页面跳转后，发现页面的位置并不在页面顶部，而是在页面跳转前的位置。就是说浏览器的滚动条并没有回到顶部的位置。
  // 即解决React页面跳转后新页面不能回到顶部的问题
  // 在头部组件中使用，则重新进入每一个页面时，都会回到顶部，也可以单独在某个页面的组件中使用，则只有使用的页面才会回到顶部
  componentWillMount(){
    document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    this.headClass()
}

headClass=()=> {
    this.props.unListScroll()
} 

  render() {
    return (
      <header className={this.props.headerClass ? "limit_length hide" : "limit_length "}>
        <a className="h-logo" data-trace="homePage_header_logo" href="/"></a>
        <a className="down-app" data-trace="homePage_header_openApp" href="//m.hujiang.com/ar_70/?source=wx8">下载App</a>
        <Link to={`/Search`} className="search-icon" data-trace="homePage_header_search" href="/esearch/?selecttype=1&amp;hideNav=1"></Link>
        <div id="left_nav_pnlUserCenter">
          <a onClick={this.props.showLoginPop.bind(this)} href="javascript:;" className="link-myinfo" data-trace="homePage_header_logo" data-trace-page="homepage">
            <i id="userImgHead"></i>
          </a>
        </div>
      </header>
    );
  }
}

export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    showLoginPop() {
          dispatch({
              type: "showLoginPop",
              isShowLoginPop: !this.props.isShowLoginPop
          });
      },
      unListScroll() {
        console.log('ok');

            dispatch({
                type: 'unListScroll',
                headerClass: false,
            });
        }
  }
})( Xheader );
