import React, { Component } from 'react';
import './Detail.css';
import Xheader from '../../components/Home/Xheader/Xheader.jsx';
import XPlayer from '../../components/Detail/XPlayer/XPlayer.jsx';
import XdetailNav from '../../components/Detail/XdetailNav/XdetailNav.jsx';
import DetailCourse from '../../containers/Detail/DetailCourse/DetailCourse.jsx';
import XdetailFooter from '../../components/Detail/XdetailFooter/XdetailFooter.jsx';
import Xblud from '../../components/CourseList/Xblud/Xblud.jsx';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props.location.pathname);
  }
  render() {
    return (
      <div>
        <Xheader />
        <XPlayer />
        <XdetailNav />
        <DetailCourse url={this.props.location.pathname}/>
        <XdetailFooter />
      </div>

    );
  }
}

export default Detail;
