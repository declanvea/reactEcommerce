import React from 'react';
import '../styles/App.css';
import { Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Container, Col, Row } from 'reactstrap';
import { MastersMerch } from '../data/data';

export default class Masters extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron style={{backgroundColor:'#013174', marginTop:'10px'}}>
        <h1 style={{color:'#336633', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066', fontFamily: 'cursive', textAlign:'center', margin:'10px'}}>Shop at the <span style={{color:'white', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066'}}>Masters</span></h1>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img style={{width: '40%', height:'66%', borderRadius: '0.3rem'}} src="http://brofessionalgolfer.com/wp-content/uploads/2016/04/augusta-national-golf-course-wallpaper-golf-club-masters-2015.jpg" alt="magnolia lane"/>
        </div>
        </Jumbotron>
        <Container>
        <Row>
          {MastersMerch.map((merch, id) => {
            return (
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
