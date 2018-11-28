import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Xentry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/df403832bb2e5ab143d01a455b514e63.png",
                    "title": "英语"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/f8df2b790018a7a2821c88530fa3cc95.png",
                    "title": "英语口语"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/f8df2b790018a7a2821c88530fa3cc95.png",
                    "title": "日语"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/5a4cc9becc04adcb15a1e3d2eb191c5f.png",
                    "title": "韩语"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/a9867a67a14ba83ba1a6fecbedc553d3.png",
                    "title": "小语种"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/92b3f7c0590b72cada706d6eca8468d6.png",
                    "title": "中小幼"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/71d32488bb48963648fb546c4c30a167.png",
                    "title": "雅思托福"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/25/9afec2530af69ef06d237c14ca911156.png",
                    "title": "考研"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/9222e64b7763d50b4e30bae7d881f585.png",
                    "title": "财汇金融"
                },
                {
                    "imgSrc": "https://n1image.hjfile.cn/zhuanti/2017/10/26/e0b49df1ab80bd7f6bca3ab89eae239b.png",
                    "title": "全部"
                }
            ]
        };
    }

    render() {
        return (
            <div className="entry inlineCon">
                {(() => {
                    return this.state.data.map((item,index) => {
                        return (
                            <Link to={`/CourseList`} key={index} className="inlineBox col-2" data-trace="homePage_8icon">
                                <img src={item.imgSrc} alt="" />
                                <div>{item.title}</div>
                            </Link>
                        );
                    });
                })()}

            </div>
        );
    }
}

export default Xentry;
