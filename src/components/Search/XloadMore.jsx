import React, { Component } from 'react'

export class XloadMore extends Component {
    render() {
        return (
            <div id="loadMore" className="load_more" style={{display : 'none'}}>
                <i className="loading"></i>加载中...
            </div>
        )
    }
}

export default XloadMore
