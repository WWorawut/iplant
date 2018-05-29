import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Header.css';
import { Router, Route, IndexRoute, browserHistory , BrowserRouter , Link } from 'react-router-dom';
import'./App.js';
import { Switch } from 'react-router-dom'
const Home = () => <h1>Home</h1>
const Products = () => <h1>Products</h1>
const Article = () => <h1>Article</h1>

class Header extends React.Component{
    render(){
      return(
        <browserRouter>
       <Switch>
        <div class="container">
        
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-light oppo">
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
                <form class="form-inline my-2 my-lg-0">
                
                <button type="button" class="button" font="kanit">SHOP</button>
                </form>
                </div>
           
        </nav>
       
        
    
        <Route path="/" component={Home}/>
        <Route path="/Products" component={Products}/>
        <Route path="/Article" component={Article}/>
        
        </div>
      </Switch>
    
        
        
        </browserRouter>
      );
    }
  }
  export default Header;

