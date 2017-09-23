import React from 'react';
import '../styles/App.css';
import { Jumbotron, Button } from 'reactstrap';

export default class ThankYou extends React.Component {
  render() {
    return (
      <div className="container">
        <Jumbotron style={{backgroundColor:'white', marginTop:'10px'}}>
          <h1 className="display-3" style={{color:'#000066', fontFamily: 'cursive', textAlign:'center', margin:'30px'}}>Thank you!</h1>
          <p className="lead" style={{textAlign:'center'}}>We thank you for your feedback, it is truly appreciated. One of our representatives will reach out to you shortly.</p>
          <hr className="my-2" />
          <div style={{display:'flex', justifyContent:'center'}}>
            <img style={{width:'30%', height:'30%'}} src="http://afpflfirstcoast.afpnet.org/files/AFP%20Chapters/FL5/PGATOUR_charity_4c.jpg" alt="charity"/>
          </div>

        </Jumbotron>
    </div>
    );
  }
}
