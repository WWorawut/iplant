import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Carousel } from 'react-bootstrap';
class Allproducts extends React.Component{
    render(){
        return(
            <div>
                <div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <div>
                                <h2 class="style">ต้นไม้ของเรา</h2>
                            </div>
                            <hr class="featurette-divider">
                        </hr>
                        </div>
                        <div class="col-md-4">
                             </div>
                         
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-10">
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="1.jpg"/>
                                <Carousel.Caption>
                                <h3 class="v">CACTUS</h3>
                                <p class="b2">แคคตัสน่ารักๆรอให้คุณมาค้นพบ</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="56.jpg" />
                                <Carousel.Caption>
                                <h3 class="v">SUCCULENT</h3>
                                <p class="b2">พืชอวบน้ำ หน้าตาอุ๋งๆน่ารักๆกำลังรอคุณรับไปดูแล</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="photo3.jpg" />
                                <Carousel.Caption>
                                <h3 class="v">TERRARIUM</h3>
                                <p class="b2">สวนแก้ว สวนขวดสุดหรูเหมาะสำหรับการเป็นของขวัญ</p>
                                </Carousel.Caption>
                        </Carousel.Item>
        </Carousel>
        </div>
        <div class="col-1">
    
        </div>
                    </div>
                </div>
                <hr class="featurette-divider">
                        </hr>
            </div>
            
           
        );
    }
  }
  export default Allproducts;