import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Header';
import Card from './Card';
import { Router, Route, IndexRoute, browserHistory , BrowserRouter , Link } from 'react-router-dom';
import { Switch } from 'react-router-dom'
class Reviews extends React.Component{
    render(){
        return(
            
            <div class="container">
            <hr class="featurette-divider">
            </hr>
                 <div class="row featurette">
                    <div class="col-md-7">
                         <h2 class="featurette-heading">20 ไอเดียแต่งสวนถาด <span class="text-muted">แบบชิคๆคูลๆที่คุณก็ทำได้ที่บ้าน</span></h2>
                            <p class="lead">แคคตัส หรือ กระบองเพชร เป็นพืชอวบน้ำที่มีความน่ารัก และปลูกเลี้ยงได้ง่าย ดังนั้นหลายๆ คนจึงนิยมนำมาปลูกเลี้ยงเพื่อประดับบ้านหรือคอนโด หากคุณเป็นคนนึงที่ชอบและอยากปลูกเลี้ยงแคคตัสประดับห้องหรือคอนโดบ้าง แต่ไม่อยากปลูกแบบธรรมดาๆ ที่แยกปลูกหลายๆ กระถางล่ะก็ วันนี้ iPlant มีไอเดียจัดสวนถาดแคคตัสที่รวบรวมเอาสายพันธุ์แคคตัส มาฝากให้ลองนำไปจัดตกแต่งห้องหรือคอนโดของตัวเองไว้ดูเล่นกันครับ</p>
            
                     </div>
                 <div class="col-md-5">
                        <img class="featurette-image img-fluid mx-auto" src="Image40.png" />
                         </div>
                 </div>
                 <hr class="featurette-divider">
                </hr>
               
            </div>
           
);
}
}
export default Reviews;