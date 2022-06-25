import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { HouseDoor } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
    <div >
      
      <div className='background'>
        <Row>
          <Col style={{ paddingLeft: '0', paddingRight: '0'}} className="title" xs={8}>
            <img src="./images/chameleon.jpg" width="40%"></img>
            <h1 className="reptileGuide">REPTILE GUIDE</h1>
          </Col>
          <Col style={{ paddingLeft: '0', paddingRight: '0', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
          <h3 style={{fontSize:"20px"}}>Which reptile is perfect for you?</h3>
          <a href="/quiz">
          <button className="startButton" style={{fontSize:"20px"}}>Start the Quiz!</button>
          </a>
          </Col>
        </Row>
        <div>
          


<div>
</div>
        </div>
      </div>
    </div>
  )
}
