import React, { Component } from 'react';

class XrightNav extends Component {
  render() {
    return (
      <div>
        <div className="productMask"></div>
        <div className="filterMask" style={{display: 'none'}}></div>
        <div className="filter-wrapper ">  
        {/* moveToLeft 有该类名则出现侧边nav*/}
          <div data-reactroot className="filter_menu_con">
            <div className="filter-container" style={{ height: '623px' }}>
              <ul className="filter-content">
                <li className="filter-item">
                  <div className="filter-item-wrapper">
                    <div className="filter-item-bar">
                      <label className="filter-item-title">价格区间</label>
                    </div>
                  </div>
                  <ul className="filter-detail" style={{height: '47px'}}>
                    <li className="filter-detail-item-input"><input type="text" className="filter-detail-input" placeholder="最低价" /></li>
                    <li className="filter-detail-item-input" style={{width: '10%'}}>-</li>
                    <li className="filter-detail-item-input"><input type="text" className="filter-detail-input" placeholder="最高价" /></li>
                  </ul>
                </li>
                <li className="filter-item">
                  <div className="filter-item-wrapper">
                    <div className="filter-item-bar">
                      <label className="filter-item-title">考试目标</label>
                      <div className="filter-check-more "></div>
                    </div>
                  </div>
                  <ul className="filter-detail ">
                    <li className="filter-detail-item show"><p className="filter-detail-text">四级</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">六级</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">专四</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">专八</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">PETS-3</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">PETS-4</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">BEC初级</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">BEC中级</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">BEC高级</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">托业650分</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">托业800分</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">中级口译</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">高级口译</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">CATTI二级</p></li>
                    <li className="filter-detail-item show"><p className="filter-detail-text">CATTI三级</p></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
          );
        }
      }
      
      export default XrightNav;
