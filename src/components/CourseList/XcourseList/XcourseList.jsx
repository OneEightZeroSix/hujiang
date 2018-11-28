import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'



class XcourseList extends Component {
    constructor(props) {
        super(props);
    }
  

    render() {
        // 最初想利用state传递link的数据
        // var state = {
        //     pathname: '/detail',
        //     state: 'hahha'
        // }
        return (
            <div className="ke">

                {/* -----利用redux仓库根据index传递数据，存在bug：点击跳转到详情页，数据确实传递，
                        但是！一旦页面刷新，由于获取不到index值，导致获取不到对应的数据 
                    ----解决方法：使用路由将所点击的商品的dataId传递过去，然后将dataId与里面的dataId作比较，
                    【需要注意的是，用Link传递的数据，接收的页面需要先从最大的组件开始接收，然后一层一层传递到需要使用的组件中】
                        
                        */}
                 {(() => {
                    return this.props.courseData.map((item, index) => {
                        return (
                            <Link  key={index} to={`/detail/${item.dataId}`} className="ke_info" data-classid={item.dataId} >
                                <img src="https://n1image.hjfile.cn/hjclass/lesson/intro/201708/51bfe949-1ed3-41c5-92ad-d916b7843f4a.png" alt={item.title} className="cover" />
                                <span className="tit">{item.title}</span>
                                <span className="ori_price">￥{item.ori_price}{item.small_ori_price}</span>
                                <span className="del_price">{item.del_price}</span>
                                <span className="desc">{item.desc}  {item.time}</span>
                            </Link>
                        );
                    });
                })()} 
                {/* --------------想用路由传递数据，没有成功
                        （原因：跳转到详情后，containers\Detail\DetailCourse\DetailCourse.jsx中路由重定向最初为detail/XdetailHome,因此把数据接在了detail/后面，没有传递成功）
                        【解决】：containers\Detail\DetailCourse\DetailCourse.jsx中路由改为 /detail/:dataId-------------------------*/}
                {/* {(() => {
                    return this.props.courseData.map((item, index) => {
                        return (
                            <Link key={index} to={`/detail/${item.dataId}`} className="ke_info" data-classid={item.dataId} >
                                <img src="https://n1image.hjfile.cn/hjclass/lesson/intro/201708/51bfe949-1ed3-41c5-92ad-d916b7843f4a.png" alt={item.title} className="cover" />
                                <span className="tit">{item.title}</span>
                                <span className="ori_price">￥{item.ori_price}</span>
                                <span className="del_price">{item.del_price}</span>
                                <span className="desc">{item.desc}</span>
                            </Link>
                        );
                    });
                })()} */}

            </div>
        );
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
       
    }
})( XcourseList );

