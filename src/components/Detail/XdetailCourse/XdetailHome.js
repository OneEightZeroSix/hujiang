import React, { Component } from 'react';
import { connect } from 'react-redux' 


import XcoursePrice from './XcoursePrice.jsx';
import XcourseDiscounts from './XcourseDiscounts.jsx';
import {XcourseIntroduce,XcourseBookArea,XcourseBottom} from './XcourseIntroduce.jsx';
import XIntroduceText from './XIntroduceText.jsx';
import XIntroduceTeacher from './XIntroduceTeacher.jsx';
import XIntroduceAppraice from './XIntroduceAppraice.jsx';
import XdiscountsPlug from '../XplugIn/XdiscountsPlug.jsx';
import XfeaturePlug from '../XplugIn/XfeaturePlug.jsx';
import XteacherPop from '../XplugIn/XteacherPop.jsx';
import XimgPop from '../../Detail/XplugIn/XimgPop.jsx';


class XdetailHome extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        // console.log(this.props.location.pathname)
    }
    render() {
        return (
                <div className="tab-content-item tab-basic-info" style={{ display:this.props.tab === 0 ? 'block' : 'none' }}>
                    <XcoursePrice url={this.props.url}/>
                    <XcourseDiscounts />
                    <XcourseIntroduce />
                    <XIntroduceText />
                    <XIntroduceTeacher />
                    <XcourseBookArea />
                    <XIntroduceAppraice />
                    <XcourseBottom />
                    <XdiscountsPlug />
                    <XfeaturePlug />
                    <XteacherPop />
                    <XimgPop />
                </div>
                );
              }
            }
            
            export default connect((state) => {
                return state
            }, (dispatch) => {
                return {
    
                }
            })( XdetailHome );
