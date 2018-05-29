import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src={this.props.pic.file}/></a>
        <div class="card-body">
          <h4 class="card-title">
            <a>{this.props.pic.name}</a>
          </h4>
          <h5 class="price">{this.props.pic.price}</h5>
          <p class="card-text">{this.props.pic.description}</p>
        </div>
        <div class="card-footer">
          <div class="btn-align">
          <button type="button" class="btn btn-success MySmallModal  btn-block">เพิ่มสินค้าลงรถเข็น</button>
          
          </div>
        </div>
        
      </div>
    );
  }
}
export default Card;
