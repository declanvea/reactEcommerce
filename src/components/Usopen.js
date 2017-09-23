import React from 'react';
import '../styles/App.css';
import { Jumbotron} from 'reactstrap';


export default class Usopen extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron style={{backgroundColor:'white', marginTop:'10px'}}>
        <h1 style={{color:'#000066', fontFamily: 'cursive', textAlign:'center', margin:'10px'}}>Shop at the <span style={{color:'red', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066'}}>U.S. Open</span></h1>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img style={{width: '40%', height:'60%'}} src="http://res.cloudinary.com/usopen/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,h_720,q_auto,w_1280/v1/us-open/hero/H_T9R9478" alt="shinny"/>
        </div>
        </Jumbotron>
      </div>
    );
  }
}
