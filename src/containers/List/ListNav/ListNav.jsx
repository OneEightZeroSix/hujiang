import React, { Component } from 'react';
import { connect } from 'react-redux'

import XlistNav from '../../../components/CourseList/XlistNav/XlistNav.jsx';
import XsecondNav from '../../../components/CourseList/XsecondNav/XsecondNav.jsx';

class ListNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: 'top_nav',
      navTop: false
    }
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
    if (reTop >= 53) {
      this.setState({
        navClass: 'top_nav profixed',
        navTop: true
      })
      this.props.ListScroll()
  
    } else if (reTop < 53) {
      this.setState({
        navClass: 'top_nav',
        navTop: false

      })
      this.props.unListScroll()
    }
  }
  render() {
    return (
      //当下拉，导航条置顶时 出现profixed这个类，头部 加类hide，并且XcourseList列表的article 中 padding-top变成  41px
      <nav className={this.state.navClass} style={{ top:this.state.navTop ? '0' : '52px'}}>
        <XlistNav />
        <XsecondNav style={{display: 'block'}}/>
      </nav>
    );
  }
}

export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    ListScroll() {
          dispatch({
              type: 'ListScroll',
              headerClass: true,
              courseListPadding: true
          });
      },
      unListScroll() {
            dispatch({
                type: 'unListScroll',
                headerClass: false,
                courseListPadding: false
            });
        }
  }
})( ListNav );
