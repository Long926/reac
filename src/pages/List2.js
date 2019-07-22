import React, {Component} from 'react'
import Cell from '../components/Cell/Cell2';
import axios from '../utils/axios.js';
class List2 extends React.Component {
    state = {
        list: []
    }
    componentDidMount(){
        axios({
            url: "/api/follow",
            params: {_page: 1, _limit: 2}
        }).then(
            res =>
                this.setState({ list: res.data.data})
        )
    }
    render() {
        let {list} = this.state
        return (
            <div className="aui-news-box">
                <article className="aui-news-list">
                    {list.map((item) => {
                        return (
                            <Cell
                                key={item._id}
                                data={item}
                                dataName="hot"
                            />
                        )
                    })
                    }
                </article>
            </div>
        )
    }
}
export default List2