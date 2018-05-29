import React from 'react';
import './App.css';
import './Header.css';
import { Router, Route, IndexRoute, browserHistory , BrowserRouter , Link } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import Article from './Article';

class App extends React.Component {
  render() {
    return (
      <browserRouter>
       <switch>
         <div>
       <nav class="navbar  navbar-expand-md  fixed-top bg-light oppo">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link"><Link to="/">Home</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link "><Link to="/Products">Products </Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"> <Link to="/Article">Article</Link></a>
                </li>
                </ul>
                <div class="container">
                    <div class="row">
                         <div class="logo">
                                <img src="logo.svg"/>
                         </div>
                    </div>
                </div>
                </div>
           
        </nav>
      <Route exact path='/' component={Home}/>
      <Route path='/Products' component={Products}/>
      <Route path='/Article' component={Article}/>
      </div>
      </switch>
      </browserRouter>
      
        
     
    );
  }
}
export default App;
