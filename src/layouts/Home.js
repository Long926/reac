import React from 'react';
import Nav from './Nav.js';
import Swiper from './Swiper.js';
import List from '../pages/List.js';
import More from './More.js';

import '../assets/css/home.css';
class Home extends React.Component {
    render() {
        return (
            <section className="aui-scrollView">
                <div className="aui-content">
                    <Nav />
                    <Swiper />
                    <List/>
                    <More/>
                </div>
            </section>
        )
    }
}
export default Home