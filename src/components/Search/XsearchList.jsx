import React, { Component } from 'react'

export class XsearchList extends Component {
    render() {
        return (
            <div id="searchHot" className="search-hot">
                <div className="hot-title">热门搜索</div>
                <ul className="hot-wrapper cf" id="hotWrapper">

                    <li className="hot-line">
                        <a href="https://mc.hujiang.com/classtopic/detail/94351" className="hot-item" data-trace="homePage_searchField_hotWord" data-trace-hot_word="双11">双11</a>
                    </li>

                    <li className="hot-line">
                        <a href="https://mc.hujiang.com/classtopic/detail/91660" className="hot-item" data-trace="homePage_searchField_hotWord" data-trace-hot_word="领券中心">领券中心</a>
                    </li>

                    <li className="hot-line">
                        <a href="https://mc.hujiang.com/classtopic/detail/92190" className="hot-item" data-trace="homePage_searchField_hotWord" data-trace-hot_word="选课指南">选课指南</a>
                    </li>

                    <li className="hot-line">
                        <a href="https://mc.hujiang.com/ec/cards/detail/student" className="hot-item" data-trace="homePage_searchField_hotWord" data-trace-hot_word="小橙卡">小橙卡</a>
                    </li>

                </ul>
            </div>
        )
    }
}

export default XsearchList
