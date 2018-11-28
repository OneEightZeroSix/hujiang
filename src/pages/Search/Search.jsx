import React, { Component } from 'react';
import './Search.css';

import XsearchHeader from '../../components/Search/XsearchHeader.jsx';
import XsearchList from '../../components/Search/XsearchList.jsx';
import XloadMore from '../../components/Search/XloadMore.jsx';

export class Search extends Component {
  render() {
    return (
      <div>
        <XsearchHeader />
        <XsearchList />
        <XloadMore />
      </div>
    )
  }
}

export default Search
