import React  from 'react';
import './App.css';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
class Video extends React.Component {
    render() {
      return (
            <div class="container">
            <div class="video">
            <h1 class="featurette-heading">More Ideas</h1>
            <div class="row">
            <div class="col-sm"><div class="embed-responsive embed-responsive-16by9">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/f8nsXcxySig" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          </div>
            <div class="col-sm"><div class="embed-responsive embed-responsive-16by9">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/6MJL-sii8yU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-sm"><div class="embed-responsive embed-responsive-16by9">
        <iframe width="640" height="360" src="https://www.youtube.com/embed/_XyBa8QsVQU?list=RD_XyBa8QsVQU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          
          </div>
          
          </div>
          <hr class="featurette-divider">
            </hr>
         </div>
          </div>
          


            
    );
}
}
export default Video;
