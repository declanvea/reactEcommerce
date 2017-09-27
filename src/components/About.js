import React from 'react';
import '../styles/App.css';
import { Jumbotron, Button } from 'reactstrap';

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Jumbotron style={{backgroundColor:'#013174', marginTop:'10px'}}>
        <h1 className="display-3" style={{fontFamily: 'cursive', textAlign:'center', margin:'30px', color:'white'}}>We are the <span style={{color:'white', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066'}}>PGA</span> <span style={{color:'red', textShadow: '2px 0 white, 0 2px white, 2px 0 white, 0 2px white'}}>Tour</span> Store!</h1>
          <p className="lead" style={{color:'white'}}>We have the knowledge, passion, depth of assortment and experience to inspire golfers everywhere to play better, have more fun and grow the game.</p>
          <hr className="my-2" />
          <div style={{display:'flex', justifyContent:'center'}}>
            <img style={{width:'30%', height:'30%', borderRadius: '0.3rem'}} src="http://afpflfirstcoast.afpnet.org/files/AFP%20Chapters/FL5/PGATOUR_charity_4c.jpg" alt="charity"/>
          </div>

          <div style={{marginTop:'15px'}}>
            <img style={{float:'left', borderRadius: '0.3rem'}} src="http://www.pgatoursuperstore.com/media/pgatss/images/services/tft-button.png" alt="first tee"/>
            <p style={{color:'white', fontStyle:'italic'}}>"We love this game and we want to share that passion to help inspire a new generation of golfers and help lay the foundation for a brighter future. That is why we work closely with local chapter of The First Tee in each of our stores. Along with our efforts with The First Tee, we hope to serve as a responsible and inspiring member of our communities through our charitable tournament, grant-giving and community day programs."</p>
          </div>
          <p className="lead">
            <a href="https://thefirsttee.org/"><Button color="success">Learn More About The First Tee</Button></a>
          </p>
        </Jumbotron>
    </div>
    );
  }
}
