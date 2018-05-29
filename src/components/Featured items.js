import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from './Card';
class Featured extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pics: [{
          name: "พืชอิ่มน้ำ",
          price: "20 THB",
          description: "Saccurent คุณสูงราคาจตุจักรหลากหลายสายพันธุ์",
          file: "Sac.png",
          status: 0
        },{ 
          name: "กระถางสุดชิค",
          price: "20 THB",
          description: "กระถางน่ารักๆสุดชิค เหมาะสำหรับใส่ต้นไม้ขนาดเล็ก เพื่อการแต่งบ้านคูลๆไม่ซ้ำใคร",
          file: "photo4.png",
          status: 0
        },{ 
          name: "มอสละเอียดญี่ปุ่น",
          price: "35 THB",
          description: "มอสละเอียดนำเข้าจากญี่ปุ่น มีความละเอียดและสีสดใสกว่ามอสทั่วไป เหมาะสำหรับแต่งสวนจิ๋ว",
          file: "photo6.png",
          status: 0
        },{ 
          name: "แคคตัสพันธุ์คาร์ซิเวเชียน",
          price: "80 THB",
          description: "แคคตัสพันธุ์คาซิเวเชียน เลี้ยงง่าย ให้น้ำน้อย หนามอ่อน",
          file: "1.jpg",
          status: 0
        },{ 
          name: "แคคตัสหัวขน",
          price: "80 THB",
          description: "แคคตัสพันธุ์ออสซี่เวเนสหรือที่คนไทยเรียกว่าพันธุ์หัวขน ปุยน้ำอ่อนๆปกคลุมทั่วเหมือนขน มีหลายสี น่ารักมากมาย",
          file: "2.jpg",
          status: 0
        },{ 
          name: "หางม้าลาย",
          price: "150 THB",
          description: "ต้นแซคเคอเรนท์ตระกูลว่านหางจรเข้ ปลูกง่ายดูดสารพิษในบ้านดี",
          file: "3.jpg",
          status: 0
        },{ 
          name: "หางม้าลายจุด",
          price: "150 THB",
          description: "แซคเคอร์เรนท์ตระกูลเดียวกับหางม้าลายแต่มีความหายากกว่าในประเทศไทย",
          file: "4.jpg",
          status: 0
        },{ 
          name: "โปเตโต้แคคตัส",
          price: "160 THB",
          description: "แคคตัสที่มีลักษณะคล้ายมันฝรั่ง เหมาะสำหรับชาวฮิปส์เตอร์",
          file: "5.jpg",
          status: 0
        },{ 
          name: "ชุดแคคตัสรวม",
          price: "500 THB",
          description: "ภายในชุดนี้ประกอบด้วย บันนี่แคคตัส,โปเตโต้แคคตัส,ฟอเร้นท์แคคตัส,ไชน่าแคคตัส,บอนโตริโนแคคตัส,แอฟริโซเนียนแคคตัส",
          file: "6.jpg",
          status: 0
        },{ 
          name: "กระถาง Emotional",
          price: "50 THB",
          description: "กระถางน่ารักสุดแนว สื่ออารมณ์เหมาะสำหรับเป็นของขวัญในโอกาสต่างๆ",
          file: "7.jpg",
          status: 1
        },{ 
          name: "หางม้าลาย",
          price: "65 THB",
          description: "แคคตัสหางม้าลายพันธุ์ดี เพาะจากเมล็ดแท้ ไม่กลายพันธุ์ ",
          file: "8.jpg",
          status: 1
        },{ 
          name: "กระถามแพนโทน",
          price: "80 THB",
          description: "กระถางสีแพนโทนแสนหวาน เหมาะสำหรับแต่งบ้านปลูกต้นไม้ ได้ทุกที่",
          file: "9.jpg",
          status: 1
        },{ 
          name: "กระถางพาสเทล",
          price: "80 THB",
          description: "กระถางสีพาสเทลสุดชิค",
          file: "10.jpg",
          status: 1
        },{ 
          name: "กระถางอีสอเมริกา",
          price: "100 THB",
          description: "กระถางปลูกต้นไม้ที่มีแรงบันดาลใจมาจากชนเผ่าตะวันออกของอเมริกาสมัยยุคบุกเบิก",
          file: "11.jpg",
          status: 1
        },
        { 
          name: "กระถางไม้",
          price: "100 THB",
          description: "กระถางไม้สุดแนว ทำจากไม้แท้ๆทั้งต้นเคลือบด้วยแว็กซ์อย่างดี ไม่มีปลวกขึ้น",
          file: "12.jpg",
          status: 1
        },
        { 
          name: "กระถางจิ๋ว",
          price: "100 THB",
          description: "กระถางจิ๋วโค้งมน ให้ความรู้สึกนุ่มนวนเบาสบาย",
          file: "13.jpg",
          status: 1
        },
        { 
          name: "ฐานรองกระถาง",
          price: "150 THB",
          description: "ฐานรองกระถางจิ๋ว ไม้โอ๊คแท้จากแคนนาดา",
          file: "14.jpg",
          status: 1
        },{ 
          name: "แซคเคอร์เร้นท์",
          price: "150 THB",
          description: "แซคเคอร์เรนท์พันธุ์ดีจากเกาหลี นำเข้าช่วงหน้าร้อนนี้เท่านั้น หมดแล้วหมดเลย",
          file: "15.jpg",
          status: 1
        },{ 
          name: "แซคเคอร์เร้นท์",
          price: "150 THB",
          description: "แซคเคอร์เรนท์พันธุ์ดีจากเกาหลี นำเข้าช่วงหน้าร้อนนี้เท่านั้น หมดแล้วหมดเลย",
          file: "15.jpg",
          status: 2
        },
        { 
          name: "แซคเคอร์เรนท์พร้อมส่ง",
          price: "50 THB",
          description: "แซคเคอร์เรนท์พร้อมส่ง ราคาส่งจากจตุจักร",
          file: "16.jpg",
          status: 2
        },
        { 
          name: "เวอร์รันด้าแคคตัส",
          price: "80 THB",
          description: "แคคตัสจากรัฐเทคซัสสหรัฐอเมริกา นำเข้า",
          file: "17.jpg",
          status: 2
        },
        { 
          name: "แอนโทนี่แคคตัสหนามแดง",
          price: "120 THB",
          description: "แอนโทนี่แคคตัสหนามแดงจากญี่ปุ่นเพียง 10 ต้นเท่านั้นสนใจคลิก!",
          file: "18.jpg",
          status: 2
        },
        { 
          name: "หนามน้อยแคคตัส",
          price: "200 THB",
          description: "แคคตัสสายพันธุ์หนามน้อยหายาก นำเข้าจากตุรกีเพียง 5 ต้นเท่านั้น",
          file: "19.jpg",
          status: 2
        },
        { 
          name: "กวางโจวแคคตัส แดง",
          price: "250 THB",
          description: "แคคตัสภูเขา มณฑลกวางโจวประเทศจีน ไม้มงคลคนเกิดวันอาทิตย์ นำเข้าพร้อมส่ง",
          file: "20.jpg",
          status: 2
        },
        { 
          name: "กวางโจวแคคตัส เหลือง",
          price: "260 THB",
          description: "แคคตัสภูเขา มณฑลกวางโจวประเทศจีน ไม้มงคลคนเกิดวันจันทร์ นำเข้าพร้อมส่ง",
          file: "21.jpg",
          status: 2
        },
        { 
          name: "ภูเรือแคคตัส",
          price: "300 THB",
          description: "แคคตัสจากภูเรือ จังหวัดเลยที่จะออกดอกเฉพาะหน้าหนาววันพระจันทร์เต็มดวง หายากมาก",
          file: "22.jpg",
          status: 2
        },
        { 
          name: "โลตัสคริสมาสต์แคคตัส",
          price: "420 THB",
          description: "แคคตัสที่จะออกดอกเพียงเทศกาลคริสต์มาส 3 วันเท่านั้น ดอกสวยกลิ่นหอม พันธุ์หายากที่สุด",
          file: "23.jpg",
          status: 2
        }],
        card: []
    }
    this.hotsalehandle = this.hotsalehandle.bind(this)
    this.newarrivalhandle = this.newarrivalhandle.bind(this)
    this.specialhandle = this.specialhandle.bind(this)
  }

  searchStatus(nameKey, myArray){
    let tmparray = []
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].status === nameKey) {
          tmparray.push(myArray[i])
        }
    }
    return tmparray
  }

  hotsalehandle(){
    this.setState({card: this.searchStatus(0, this.state.pics)})
  }

  newarrivalhandle(){
    this.setState({card: this.searchStatus(1, this.state.pics)})
  }

  specialhandle(){
    this.setState({card: this.searchStatus(2, this.state.pics)})
  }

  componentDidMount(){
    this.hotsalehandle()
  }

  render(){
      return(
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4">สินค้าแนะนำ</h1>
            <div class="list-group">
              <a href="#featured" onClick={this.hotsalehandle} class="list-group-item">โปรโมชั่นมาแรง</a>
              <a href="#featured" onClick={this.newarrivalhandle} class="list-group-item">สินค้าใหม่</a>
              <a href="#featured" onClick={this.specialhandle} class="list-group-item">สินค้าพิเศษ</a>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="row">
            {this.state.card.map(function(pic, index){
              return (<div class="col-lg-4 col-md-6 mb-4">
                <Card pic={pic}/>  
              </div>)
            })}
            </div>
          </div>
        </div>
      </div>  
      );
  }
}
  export default Featured;