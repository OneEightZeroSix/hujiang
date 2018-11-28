import React, { Component } from 'react';
import Xadvertis from '../../../components/Home/Xadvertis/Xadvertis.jsx';
import Xtopic from '../../../components/Home/Xtopic/Xtopic.jsx';
import Xactivity from '../../../components/Home/Xactivity/Xactivity.jsx';

class Advertising extends Component {
  render() {
    return (
     <div>
        <Xadvertis />
        <Xtopic />
        <Xactivity />
     </div>
    );
  }
}

export default Advertising;
