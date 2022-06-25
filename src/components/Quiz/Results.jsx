import './results.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Results() {
  return (
    <div style={{display: 'flex',  flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop: '5%', backgroundColor:'white'}}>
      <h3>87% Match</h3>
      <h3>Crested Gecko</h3>
      <div class="matchCard">
        <img src="./images/crestedGecko.jpg" className="lizardPic"></img>
        <div style={{marginLeft: '3%'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="/careguide">
        <button style={{border:"none", backgroundColor:"#B2D199", borderRadius: "20px", color: "white", fontSize: "20px"}}>Care Guide</button>
        </a>
        </div>
        </div>
     {/*

      
      
      <div class="barContainer">
      <div class="barFill" style={{width: '80%'}}>
        <span class="barInside">80%</span>
        </div> 
        </div>

        
        <div class="barContainer">
      <div class="barFill" style={{width: '70%'}}>
        <span class="barInside">70%</span>
        </div> 
        </div>
        
        
        
        <div class="barContainer">
      <div class="barFill" style={{width: '60%'}}>
        <span class="barInside">60%</span>
        </div> 
        </div>
        */}
    </div>
     
  )
}
