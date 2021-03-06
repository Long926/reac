import React from 'react';
import './assets/css/cell2.css';
class Cell2 extends React.Component {
    render() {
        let { data, dataName } = this.props;
        return (
            <a href="special.html" className="aui-news-item aui-news-list-two">
                <div className="clearfix">
                    <div className="aui-news-item-img">
                        <img src={'http://localhost:3000' + data.img1} alt="" />
                    </div>
                    <div className="aui-news-item-img">
                        <img src={'http://localhost:3000' + data.img2} alt="" />
                    </div>
                    <div className="aui-news-item-img">
                        <img src={'http://localhost:3000' + data.img3} alt="" />
                    </div>
                </div>
                <div className="aui-news-item-text">
                    <h2 className="aui-news-item-text-title">{data.title}</h2>
                    <div className="aui-news-item-text-info">
                        <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-comment"></i>{data.num}</span>
                        <span className="aui-news-item-text-info-text">{data.net}</span>
                    </div>
                </div>
            </a>
        )
    }
}
export default Cell2