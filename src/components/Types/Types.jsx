import './types.css';
import { Icon } from '@iconify/react';

export default function Types() {
  return (
    <div style={{display: 'flex', justifyContent:'center', flexDirection:"column",alignItems:'center', height: '70vh', backgroundColor:'#EDF49A'}}>
      <div><h3>Find Care Guides by Type</h3></div>
      <div style={{display: 'flex'}}>

      <a href="/scrollPage" style={{textDecoration:"none"}}>
    <div>
    <span class="dot"><Icon icon="mdi:snake" className="icon"/></span>
    <h3 class="subtitle">Snakes</h3>
    </div>
    </a>

<a href="/scrollPage" style={{textDecoration:"none"}}>
    <div>
<span class="dot"><Icon icon="fa6-solid:frog" className="icon"/></span>
<h3 class="subtitle">Frogs</h3>
</div>
</a>

<a href="/scrollPage" style={{textDecoration:"none"}}>
<div>
<span class="dot"> <img src="./images/gecko.jpg" width="60%"></img></span>
<h3 class="subtitle">Lizards</h3>
</div>
</a>

<a href="/scrollPage" style={{textDecoration:"none"}}>
<div>
<span class="dot"><Icon icon="fluent:animal-turtle-16-filled" className="icon" style={{fontSize:'140px'}}/></span>
<h3 class="subtitle">Turtles</h3>
    </div>
    </a>
    </div>
    </div>
  )
}
