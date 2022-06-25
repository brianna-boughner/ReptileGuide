import './careguide.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BookmarkFill, Bookmark } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function CareGuide() {
  return (
<div className="centred">

<div class="careGuide">
  <Row style={{paddingBottom: "5%"}}>
    <Col sm={5} className="centred"><img src="./images/crestedGecko.jpg" className="lizardPic"></img></Col>
    <Col>
    <h1>Lizard</h1>
    <div class="summary">
      <b>Difficulty:</b> Beginner
      <br></br>
      <b>Tank size:</b> 20 gallons
      <br></br>
      <b>Diet:</b> Fruit and live insects
      <br></br>
      <b>Temperature:</b> 70-75&deg;F
      <br></br>
      <b>Humidity:</b> 60-80%
    </div>
    </Col>
    <Col sm={1}>
    <OverlayTrigger
      key={"left"}
      placement={"left"}
      overlay={
        <Tooltip>
          Save this reptile
        </Tooltip>
         }
        >  
        <a href="#" style={{color:'black'}}><Bookmark size="40px" ></Bookmark></a>
        </OverlayTrigger>
      </Col>
  </Row>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h3>Placeholder Title</h3>
    <img src="./images/Lizard-Eating.jpg" className="lizardPic" align='right' ></img>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora</p>
 
<h3>Placeholder Title</h3>
<img src="./images/tank-diagram.jpg" align="right" width="300px"></img>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>



</div>
    
</div>
  )
}
