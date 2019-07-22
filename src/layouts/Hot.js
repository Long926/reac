import React from 'react';
import '../assets/css/hot.css';
import List from '../pages/List.js';
import List2 from '../pages/List2.js'
class Hot extends React.Component {
    render() {
        return (
            <section className="aui-flexView">
                <header className="aui-navBar">
                    <a href="javascript:;" className="aui-navBar-item">
                        <i className="aui-icon aui-icon-back"></i>
                    </a>
                    <div className="aui-navBar-center">
                        <span className="aui-navBar-title">推荐</span>
                    </div>
                    <a href="javascript:;" className="aui-navBar-item">
                        <i className="aui-icon aui-icon-user"></i>
                    </a>
                </header>
                <section className="aui-scrollView">
                    <div className="aui-content">
                        {/* <!-- 加载完成提示 begin --> */}
                        <div className="aui-load">
                            <p>为你精选10条推荐</p>
                        </div>
                        <List/>
                        <List2/>
                    </div> 
                </section>
            </section>
        )
    }
}
export default Hot