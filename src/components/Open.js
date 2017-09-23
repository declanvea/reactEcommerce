import React from 'react';
import '../styles/App.css';
import { Jumbotron} from 'reactstrap';


export default class Open extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron style={{backgroundColor:'white', marginTop:'10px'}}>
        <h1 style={{color:'#000066', fontFamily: 'cursive', textAlign:'center', margin:'10px'}}>Shop at the <span style={{color:'yellow', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066'}}>The Open Championship</span></h1>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img style={{width: '40%', height:'60%'}} src="https://fthmb.tqn.com/rF6UhB8DAnQ_hDA7n7h3XTFgqNs=/3708x2512/filters:no_upscale():fill(FFCC00,1)/about/claret-jug-open-championship-56a3d7053df78cf7727f734a.jpg" alt="claret jug"/>
        </div>
        </Jumbotron>
      </div>
    );
  }
}
