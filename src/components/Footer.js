import React  from 'react';
class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
           <div class="footer-widgets">
           <div class="container">
           <div class="row">
           <div class="col-md-3">
           <aside class="widget widget-text">
                <div class="widget-title">
                <img src="Logowhite.png"/>
                <h6 class="b">About Us</h6>
                </div>
                <div>
                    i
                </div>
                <div class="b">
                <p>
                    พวกเราคือ iPlant เว็บไซต์ที่รวบรวมต้นไม้แต่งบ้านครบและถูกที่สุดสำหรับคุณ
                    นึกถึงต้นไม่แต่งบ้านนึกถึง iPlant!
                </p>
                <p>
                    Location: King Mongkut's University of Technology Thonburi
                    126 Pracha Uthit Rd

                </p>
                <a href="https://www.fb.com"><i class="fab fa-facebook"></i></a>
                <a href="https://www.pinterest.com"><i class="fab fa-pinterest"class="design"></i></a>
                </div>
               
           </aside>
           </div>
           <div class="col-md-3">
           <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.108157752954!2d100.49196251460306!3d13.651184190412623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2sKing+Mongkut&#39;s+University+of+Technology+Thonburi!5e0!3m2!1sen!2sth!4v1527492419080" width="600" height="450" frameborder="0"  allowfullscreen></iframe>
           </div>
          
           </div>
           </div>
           </div>
           </footer>
        );
    }
  }
  export default Footer;
  