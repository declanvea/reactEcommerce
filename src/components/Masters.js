import React from 'react';
import '../styles/App.css';
import { Jumbotron} from 'reactstrap';

export default class Masters extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron style={{backgroundColor:'white', marginTop:'10px'}}>
        <h1 style={{color:'#000066', fontFamily: 'cursive', textAlign:'center', margin:'10px'}}>Shop at the <span style={{color:'green', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066'}}>Masters</span></h1>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img style={{width: '40%', height:'66%'}} src="http://brofessionalgolfer.com/wp-content/uploads/2016/04/augusta-national-golf-course-wallpaper-golf-club-masters-2015.jpg" alt="magnolia lane"/>
        </div>
        </Jumbotron>
      </div>
    );
  }
}
