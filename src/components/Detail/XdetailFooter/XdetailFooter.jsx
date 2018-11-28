import React, { Component } from 'react'

export class XdetailFooter extends Component {
  render() {
    return (
        <div className="footer-cash-area footer-area">
        <div className="hfooter">
            <ul className="icon-list">
                <li>
                    <a className="consult" href="http://q.url.cn/s/RHVa06m?_type=wpa&amp;isKfuin=1" data-trace="introV1_consult" data-trace-class_id="18387806">
                        <i className="icon-consult"></i>
                        <p className="text">
                            咨询
                        </p>
                    </a>
                </li>
                <li>
                    <a className="phonecall" href="tel:4008220220" data-trace="introV1_call">
                        <i className="icon-phonecall"></i>
                        <p className="text">
                            致电
                        </p>
                    </a>
                </li>
                <li>
                    <div className="collect" id="storeBtn" data-trace="introV1_favorite" data-trace-class_id="18387806" data-trace-type_id="收藏">
                        <i className="hui-icon icon-star"></i>
                        <p className="text">
                            收藏
                        </p>
                    </div>
                </li>
            </ul>
            <a className="btn btn-buy btnBuy" data-type-youdao="buy" href="//mc.hujiang.com/mcordersure/c18387806">立即购买</a>
        </div>
        <input type="hidden" id="hdn-footer-data" value="{&quot;btnType&quot;:&quot;buy&quot;,&quot;isShowOnPreSale&quot;:false,&quot;enums&quot;:{&quot;BtnType&quot;:{&quot;buy&quot;:&quot;buy&quot;,&quot;goToClass&quot;:&quot;gotoclass&quot;,&quot;payDeposit&quot;:&quot;paydeposit&quot;,&quot;prepare&quot;:&quot;prepare&quot;,&quot;offshelf&quot;:&quot;offshelf&quot;}}}" />
    </div>
    )
  }
}

export default XdetailFooter
