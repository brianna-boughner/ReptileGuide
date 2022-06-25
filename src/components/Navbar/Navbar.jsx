import './navbar.css';
import { HouseDoor, BookmarkFill } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <a href="/">REPTILE GUIDE</a>
        
      </div>
      <div className='right'>
        <a href="/quiz">Quiz</a>
        <Dropdown>
  <Dropdown.Toggle id="dropdown-basic" className="dropdownButton">
    Care Guides
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/scrollpage">Snakes</Dropdown.Item>
    <Dropdown.Item href="/scrollpage">Frogs</Dropdown.Item>
    <Dropdown.Item href="/scrollpage">Lizards</Dropdown.Item>
    <Dropdown.Item href="/scrollpage">Turtles</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="/scrollpage">Tips & Tricks</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        <a href="/contact">Contact</a>
        <OverlayTrigger
      key={"bottom"}
      placement={"bottom"}
      overlay={
        <Tooltip>
          Saved Reptiles
        </Tooltip>
         }
        >  
        <a href="/scrollpage"><BookmarkFill color="white" size={20}/></a>
        </OverlayTrigger>
      </div>
    </div>
  )
}
