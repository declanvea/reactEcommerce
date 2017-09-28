import React from 'react';
import '../styles/App.css';
import { Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Container, Col, Row } from 'reactstrap';
import {OpenMerch} from '../data/data';


export default class Open extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron style={{backgroundColor:'#013174', marginTop:'10px'}}>
        <h1 style={{color:'#ffff57', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066', fontFamily: 'cursive', textAlign:'center', margin:'10px'}}>Shop at the <span style={{color:'white', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066'}}>The Open Championship</span></h1>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img style={{width: '40%', height:'60%', borderRadius: '0.3rem'}} src="https://fthmb.tqn.com/rF6UhB8DAnQ_hDA7n7h3XTFgqNs=/3708x2512/filters:no_upscale():fill(FFCC00,1)/about/claret-jug-open-championship-56a3d7053df78cf7727f734a.jpg" alt="claret jug"/>
        </div>
        </Jumbotron>


        <Container>
        <Row>
        {OpenMerch.map((merch, id) => {
          return  (
          <Col md='6' lg='4'>
            <Card key={id} style={{margin:'15px', padding:'10px'}}>
              <CardBlock>
                <CardTitle>{merch.item}</CardTitle>
                <CardSubtitle>{merch.price}</CardSubtitle>
              </CardBlock>
              <img width="100%" src={merch.img} alt="image" />
              <CardBlock>
                <CardText>{merch.description}</CardText>
              </CardBlock>
              </Card>
            </Col>
        )})}
        </Row>
        </Container>
      </div>
    );
  }
}
