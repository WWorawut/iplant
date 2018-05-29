import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Allproducts from './Allproducts';
import Featured from './Featured items';
class Content extends React.Component {
    render() {
      return (
          <div>
            <div>
                <Allproducts/>
            </div>
            <div id="featured">
                <Featured/>
            </div>
          </div>
    );
}
}
export default Content;
