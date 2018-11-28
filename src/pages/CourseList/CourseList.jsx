import React, { Component } from 'react';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import '../../assets/base.css';
import './CourseList.css';
import Xheader from '../../components/Home/Xheader/Xheader.jsx';
import ListNav from '../../containers/List/ListNav/ListNav.jsx';
import Courselist from '../../containers/List/Courselist/Courselist.jsx';
import XrightNav from '../../components/CourseList/XrightNav/XrightNav.jsx';
import Xblud from '../../components/CourseList/Xblud/Xblud.jsx';


class CourseList extends Component {
  render() {
    return (
        <div>
          <Xheader />
          <ListNav />
          <Courselist />
          <XrightNav />
          <Xblud />
        </div>
    );
  }
}

export default CourseList;
