import React, { Component } from 'react';
import { connect } from 'react-redux'

import XcourseList from '../../../components/CourseList/XcourseList/XcourseList.jsx';

class Courselist extends Component {
  render() {
    return (
        <section style={{ minHeight: '468px', paddingTop: this.props.courseListPadding ?'41px' : '50px' }}>
        <article id="courseList" className="course_list" style={{ paddingTop: '0px' }}>
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
          <XcourseList />
        </article>
      </section>
    );
  }
}

export default connect((state) => {
  return state
}, (dispatch) => {
  return {
   
  }
})(  Courselist );
