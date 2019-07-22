import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.js';
import './assets/js/flexible.js';

import {BrowserRouter,Route} from 'react-router-dom'
ReactDOM.render( 
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>
  ,
    document.getElementById('root')
);
