import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Redirect } from "react-router-dom";
import { Switch, Route } from 'react-router'

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import Home from './pages/Home/Home.jsx';
import CourseList from './pages/CourseList/CourseList.jsx';
import Detail from './pages/Detail/Detail.jsx';
import Search from './pages/Search/Search.jsx';



import * as serviceWorker from './serviceWorker';

// Reducer  创建仓库
const store = createStore(function (state = {
    isShowDisCountsPlug:false,
    isShowFeaturePlug: false,
    isShowImg: false,
    isTeachersPop: false,
    teacherIdx: 0,
    teachersData: [
            {   
                avatar: 'http://f2.c.hjfile.cn/pic/201505/470cee05-dc4e-4def-93a7-ef34bfff6b0a_n.png',
                teacherName: '小兜老师',
                summary: '沪江网校教师，主授四六级系列课程。对四六级考试有多年研究经验，就四六级词汇更有个人独到的看法。语言功底扎实，授课平实且风趣幽默，深受学生喜爱。'
            },
            {
                avatar: 'http://f1.c.hjfile.cn/public/upload/201505/8be2c105-c297-48f2-9b4d-befadd6b33e5.jpg',
                teacherName: 'Amy瑶瑶老师',
                summary: '沪江网校《新概念英语》第一册、《玩转句法》，K12《语法核心突破》等课程主讲老师，发音标准，声音甜美。语言功底扎实，讲课思路清晰，对新概念课程脉络把握清楚，授课风格轻松活泼。'
            },
            {
                avatar: 'http://f1.c.hjfile.cn/public/upload/201505/c9c879af-8676-40ed-b293-29095332eef4.jpg',
                teacherName: 'Rachel老师',
                summary: '沪江网校教师，专业八级。有丰富的四六级、口译、托福雅思等考试类课程的授课经验。授课风格大方亲切，灵活幽默，喜欢和同学们互动，广受学员们的爱戴，满意度高。有任职于外资银行和外贸企业的经历，多次担任现场口译工作，英语口语优美纯正。注重将英语知识和实际生活联系起来，活学活用，把上课变成一种乐趣'
            },
            {
                avatar: 'http://f1.c.hjfile.cn/public/upload/201505/c9c879af-8676-40ed-b293-29095332eef4.jpg',
                teacherName: 'Sue老师',
                summary: '沪江网校名师，主授新概念系列课程，语言功底扎实，语言风趣幽默。'
            },
            {
                avatar: 'http://f1.c.hjfile.cn/public/upload/201505/9a978320-53ee-4f50-add8-7a689249787c.jpg',
                teacherName: 'Yuvia老师',
                summary: ' 沪江网知名主持人、版主，沪江网校口语、语音老师，上海外国语大学英语专业毕业。在语音基础教学方面有丰富的教学经验，课程内容新颖有趣，紧跟时代潮流，发音优美纯正。'
            },
            {
                avatar: 'http://f1.c.hjfile.cn/public/upload/201505/53854900-f033-4c7c-b987-f9680af8dad2.jpg',
                teacherName: 'Jamie老师',
                summary: '沪江网校新概念、四六级、PETS主讲老师，对考试，尤其是国内考试有深入的研究，拥有多年线上线下的教授经验。授课风格轻松幽默，深受学生欢迎。'
            },
    ],
    // ----------------------------------------------------
    isShowLoginPop: false,
    headerClass: false,
    courseListPadding: false,
    courseId: 0,
    courseData: [
        {
            dataId: 18390647,
            title: '英语零基础直达PETS/公共英语三级全额奖学金班',
            ori_price: 1759,
            small_ori_price0: .12, 
            del_price: 1999,
            desc: '262课时 ',
            time: '2018.12.04 至 2020.02.27'
        },
        {
            dataId: 18387806,
            title: '英语零基础直达大学六级超值特惠班',
            ori_price: 1594.45,
            small_ori_price0: .45,
            del_price: 2899,
            desc: '158课时 ',
            time: '2018.12.04 至 2019.11.19'
        }

    ],
    //----------------详情tab--------------------
    tab: 0,

    tabDate: [
        {
            tabItem: '课程',
            herf: 'XdetailHome',
            mark: true,
        },
        {
            tabItem: '大纲',
            href: 'XdetailOutline',
            mark: false,
        },
        {
            tabItem: '评价',
            href: 'XdetailAppraice',
            mark: false,
        }
    ]
}, action) {
    switch (action.type) {
        case 'toggleCountsPlug' :
			return {
				...state,
				isShowDisCountsPlug:action.isShowDisCountsPlug
            }
        case 'toggleFeaturePlug' :
        return {
            ...state,
            isShowFeaturePlug:action.isShowFeaturePlug
        }
        case 'showImg' :
        return {
            ...state,
            isShowImg:action.isShowImg
        }
        case 'toggloTeacherPop' :
        return {
            ...state,
            isTeachersPop: action.isTeachersPop,
            teacherIdx: action.teacherIdx
        }

        // ------------------------
        case 'showLoginPop':
            return {
                ...state,
                isShowLoginPop: action.isShowLoginPop,
            }
        case 'ListScroll':
            return {
                ...state,
                headerClass: action.headerClass,
                courseListPadding: action.courseListPadding
            }
        case 'unListScroll':
            return {
                ...state,
                headerClass: action.headerClass,
                courseListPadding: action.courseListPadding
            }
        case 'toggleActive':
            // window.scrollTo(0, 190)
            return {
                ...state,
                tab: action.tab,
                
            }
        default:
            return state
    }
})


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/CourseList" component={CourseList} />
                {/* <Route path="/Detail/:dataId/:ori_price/:del_price/:desc" component={Detail} /> */}
                <Route path="/Detail/:dataId" component={Detail} />
                <Route path="/Search" component={Search} />
            </Switch>
        </Router>
    </Provider>,


    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
