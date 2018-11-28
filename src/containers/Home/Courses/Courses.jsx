import React, { Component } from 'react';
import XcouseNav from '../../../components/Home/XcouseNav/XcourseNav.jsx';
import Xcourse from '../../../components/Home/Xcourse/Xcourse.jsx';

class Courses extends Component {
  render() {
    return (
      <div>
          <XcouseNav />
          <Xcourse />
          <Xcourse />
          <Xcourse />
          <Xcourse />
          <Xcourse />

      </div>
    );
  }
}

export default Courses;
