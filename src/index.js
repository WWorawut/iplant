import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import'./components/App.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render((
<BrowserRouter>
  <App />
</BrowserRouter>)
,document.getElementById('app'));