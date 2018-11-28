import React, { Component } from 'react';
import './XPlayer.css';

class XPlayer extends Component {
  render() {
    return (
        <div className="class-img cover-area">
            {/* <!-- 播放器背景图片 --> */}
            <img src="https://n1image.hjfile.cn/hjclass/lesson/intro/201611/a4fc05a3-3eb5-4500-b50f-6e20679d96b1.jpg" className="videl-bg" />
            <input type="hidden" value="https://n1image.hjfile.cn/hjclass/lesson/intro/201611/a4fc05a3-3eb5-4500-b50f-6e20679d96b1.jpg" id="coverImg" />
            {/* <!-- 播放器信息 --> */}
            <input type="hidden" value="{&quot;coursewareId&quot;:&quot;130408&quot;,&quot;lessonID&quot;:8962923,&quot;ocsCoursewareID&quot;:&quot;0&quot;,&quot;ocsVersion&quot;:4,&quot;packStatus&quot;:2,&quot;tenantID&quot;:&quot;class_ocs&quot;,&quot;transcodingStatus&quot;:2,&quot;userSign&quot;:&quot;KzA1XE66YtSTrRQTEczdGc33hp1z6o4syU58Vqw2wmzd88ad/M9QQQFouMB7TiHGS3npmTq4BAAFQ9e+D5GJYvji2c3C9wwIwGZbSg2rUbqDzsQNt3mfMcu4blnGrMfArUmYS6zV8Um4CuRw5v8YACpSmieRrVtiou+LdXauG3lKu8wVVqH0ww6t+Bp3rQhkV8sMXr/83YcIbie8E/0UbBQYwZaYXPyE9vuwGphUu8Plt7QwnLqvU04KjcWdxBS6sqk4f0vhLL4DQ/QozfRBU+pZnSgIJQ8PPpwXBgtbz0eps3OQc0IO/Cr0Dy6o03HIbK1GR62F2mpOA4Ioe5Ir/w==&quot;,&quot;iframeUrl&quot;:&quot;https://ocs.hujiang.com/h5/v5/class/index.html&quot;}" id="ocs5StrData" /> 
            {/* <!-- ocs3播放器 --> */}
            <div className="ocs-player-wrapper" data-player-src="//ocs.hujiang.com/h5/play.html?key=F2A16ACB808441CF4D6C8586C4D4A089&amp;bgSrc=https://n1image.hjfile.cn/hjclass/lesson/intro/201611/a4fc05a3-3eb5-4500-b50f-6e20679d96b1.jpg">
                <iframe src="//ocs.hujiang.com/h5/play.html?key=F2A16ACB808441CF4D6C8586C4D4A089&amp;bgSrc=https://n1image.hjfile.cn/hjclass/lesson/intro/201611/a4fc05a3-3eb5-4500-b50f-6e20679d96b1.jpg" width="100%" height="100%" id="__hj_ocs_1542437991316" frameBorder="0" scrolling="no"></iframe>
            </div>
            {/* <!-- ocs3播放器 --> */}
        </div>

    );
  }
}

export default XPlayer;
