import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Cover from './Cover';
import Content from'./Content';
import Footer from './Footer';
import Reviews from './Reviews';
import Video from './Video';
class Home extends React.Component {
    render() {
      return (
          <div>
            <div>
                <Cover/>
            </div>
            <div>
                <Content/>
            </div>
            <div>
                <Reviews/>
            </div>
            <div>
                <Video/>
            </div>
            <div>
                <Footer/>
            </div>
          </div>
          


    );
}
}
export default Home;
