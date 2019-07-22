import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from '../layouts/Home.js';

import { Switch, Route, Redirect } from 'react-router-dom';
import User from '../layouts/User.js'
import Hot from '../layouts/Hot.js'
import ErrorPage from '../layouts/ErrorPage.js';

// import '../assets/js/main.js'
import '../assets/css/base.css';
import '../assets/css/icon.css';
import '../assets/css/app.css'
class App extends React.Component {
    state = {
        bHeader:true,
        bFoot:true
    }

    checkPath(path){
        if (/home/.test(path)){
          this.setState({bHeader:true,bFoot:true})
        }
        if (/login|reg|detail/.test(path)){
          this.setState({bHeader:false,bFoot:false})
        }
        if (/user/.test(path)){
          this.setState({bHeader:false,bFoot:true})
        }
        if(/hot/.test(path)){
          this.setState({bHeader:false,bFoot:true})
        }
      }

      componentWillReceiveProps(nextProps){
        // console.log('app',nextProps.location.pathname);//监听路由
        let path  = nextProps.location.pathname;
        this.checkPath(path)
      }
      componentDidMount(){
        let path  = this.props.location.pathname;
        this.checkPath(path)
      }
        
    render() {
        return (
            <div className='App'>
                <section className="aui-flexView">
                    {/* <Header /> */}
                    {this.state.bHeader && <Header/>}
                    <Switch>
                        {/* <Home /> */}
                        <Route path="/home" component={Home} />
                        <Route path="/user" component={User} />
                        <Route path="/hot" component={Hot} />
                        <Redirect exact from="/" to="/home" />
                        <Route component={ErrorPage} />
                    </Switch>
                    {/* <Footer /> */}
                    {this.state.bFoot ? <Footer/> : null}
                </section>
            </div>
        )
    }
}
export default App