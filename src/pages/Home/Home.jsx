import React, { Component } from 'react';


import Xheader from '../../components/Home/Xheader/Xheader.jsx';
import Xbanner from '../../components/Home/Xbanner/Xbanner.jsx';
import Xentry from '../../components/Home/Xentry/Xentry.jsx';
import Advertising from '../../containers/Home/Advertising/Advertising.jsx';
import Courses from '../../containers/Home/Courses/Courses.jsx';
import Xfloor from '../../components/Home/Xfloor/Xfloor.jsx';
import XunderNav from '../../components/Home/XunderNav/XunderNav.jsx';

import XloginPop from '../../components/Login/XloginPop.jsx';

import '../../assets/base.css';
import './Home.css';


class Home extends Component {
  render() {
    return (
        <div>
            <Xheader />
            <div className="container" style={{marginTop:'53px'}}>
                <Xbanner />
                <Xentry />
                <Advertising />
                <Courses />
                <Xfloor />
                <XunderNav />
                <XloginPop />

            </div>
        </div>
    );
  }
}

export default Home;
