import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import style from './bg.css';

const IntroPic = () => (
    <div className="hero-container">
    <Parallax
      offsetXMax={20}
      offsetXMin={20}
      offsetYMax={10}
      offsetYMin={10} tag="span">
      <div className="hero-image">
  </div>
  </Parallax>
  <div className="Animate">
  <div className="AnimateImg">
  <Parallax
        offsetYMax={50}
        offsetYMin={-100 }
        offsetXMin={130}
        offsetXMax={130}
        slowerScrollRate
        tag="span">
        <div className="Multiply">
      <img src="para1.png" width="70%" height="70%" />
    </div>
      </Parallax>
      
   <Parallax
    offsetYMax={30}
    offsetYMin={-100}
    offsetXMin={0}
    offsetXMax={0}
    slowerScrollRate
    tag="span">
    <div className="Multiply">
  <img src="para2.png" width="70%" height="70%"  />
</div>

</Parallax>
</div>  
 </div>
  </div>
);

export default IntroPic;
