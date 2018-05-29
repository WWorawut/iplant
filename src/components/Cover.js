import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { ParallaxProvider} from 'react-scroll-parallax';
import IntroPic from './parallax';
class Cover extends React.Component{
    render(){
        return(
          
          <div>
            <div class="masthead ">       
            <ParallaxProvider>
            <IntroPic />
            </ParallaxProvider>
          </div>
        </div>
         
        );
    }
  }
  export default Cover;