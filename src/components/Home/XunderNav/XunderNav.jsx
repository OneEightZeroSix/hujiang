import React, { Component } from 'react';

class XunderNav extends Component {
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
          if (sTop >= 200) {
            this.setState({
              navTop: true
            })
          }else if(sTop < 200) {
            this.setState({
              navTop: false
            })
          }
        }
  render() {
    return (
        <div  className="activity-overlay db12box" style={{display:this.state.navTop === true ? 'block' : 'none'}}>
        <a href="#" data-trace="homePage_bottomButton" data-trace-position="1" className="db12-icon1">
            <img src="//n1image.hjfile.cn/res7/2017/11/15/25c53ab00d4e527361a2774cd6314157.png" />
            <span>新人专享券</span>
        </a>
        <a href="#" data-trace="homePage_bottomButton" data-trace-position="2" className="db12-icon2">
            <img src="//n1image.hjfile.cn/res7/2017/11/15/74e9851b5040f60c06cc19b1fbc86c1a.png" />
            <span>免费学</span>
        </a>
        <a href="#" data-trace="homePage_bottomButton" data-trace-position="3" className="db12-icon3">
            <img src="//n1image.hjfile.cn/res7/2017/11/15/4af2167e4a0459ca202c78f90b21ba6f.png" />
            <span>免费口语体验</span>
        </a>
    </div>
    );
  }
}

export default XunderNav;
