
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ScrollPage.css';


export default function ScrollPage() {
    
   const initialArr = [
        {
          id: 1,
          image: "./images/placeholder-image.png",
          text: "Lizard"
        },
        {
          id: 2,
          image: "./images/placeholder-image.png",
          text: "Snake"
        },
        {
            id: 3,
            image: "./images/placeholder-image.png",
            text: "Gecko"
          },
          {
            id: 4,
            image: "./images/placeholder-image.png",
            text: "Tortoise"
          },
          {
            id: 5,
            image: "./images/placeholder-image.png",
            text: "Snake"
          },
          {
            id: 6,
            image: "./images/placeholder-image.png",
            text: "Lizard"
          },
          {
            id: 7,
            image: "./images/placeholder-image.png",
            text: "Frog"
          },
      ];
      
     
  return (
    <div class="bigContainer">
        <h1>Placeholder</h1>
    <div class="scrollContainer">
      {initialArr.map(reptile => {
    return (
        <div >
      <div key={reptile.id} class="reptileCard">
        <img class="scrollImage" src={reptile.image}></img>
        <a href="/careguide">
        <button class="reptileTitle">{reptile.text}</button>
        </a>
      </div>
      </div>
      
    )
  })}

    </div>
    </div>
    
  )
}
