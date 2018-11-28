import React, { Component } from 'react';

class XcouseNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTop: false
    }
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // 移除页面滚动监听
    window.removeEventListener('scroll', this.handleScroll);
}


  // 当滚动条超过800时，出现导航条（可以把800改进成一个变量）
  handleScroll=()=> {
    // console.log(this.state.navTop);
    let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (sTop >= 800) {
      this.setState({
        navTop: true
      })
    }else if(sTop < 800) {
      this.setState({
        navTop: false
      })
    }
  }


  render() {
    return (
      <div ref="tab" className="course-floor-nav clearfix" id="courseFloorNav" style={{display:this.state.navTop === true ? 'block' : 'none'}} >
        <div className="floor-nav-cont" id="floorCont" data-trace="homePage_liftButton" style={{ width: '534px' }}>
          <a href="javascript:;" className="english-nav floor-nav" data-floor="english"><span>英语</span></a>
          <a href="javascript:;" className="japanese-nav floor-nav" data-floor="japanese"><span>日语</span></a>
          <a href="javascript:;" className="abroad-nav floor-nav" data-floor="abroad"><span>留学</span></a>
          <a href="javascript:;" className="moreclass-nav floor-nav" data-floor="moreclass"><span>多语种</span></a>
          <a href="javascript:;" className="pubmed-nav floor-nav" data-floor="pubmed"><span>考研</span></a>
          <a href="javascript:;" className="interest-nav floor-nav" data-floor="interest"><span>职场</span></a>
          <a href="javascript:;" className="banking-nav floor-nav" data-floor="banking"><span>财会</span></a>
          <a href="javascript:;" className="child-nav floor-nav on" data-floor="child"><span>中小幼</span></a>
        </div>
      </div>
    );
  }
}

export default XcouseNav;
