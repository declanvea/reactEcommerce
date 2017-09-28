import React from 'react';
import '../styles/App.css';
import { Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Container, Col, Row } from 'reactstrap';
import {UsOpenMerch} from '../data/data';


export default class Usopen extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron style={{backgroundColor:'#013174', marginTop:'10px'}}>
        <h1 style={{color:'#800000', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066', fontFamily: 'cursive', textAlign:'center', margin:'10px'}}>Shop at the <span style={{color:'white', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066'}}>U.S. Open</span></h1>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img style={{width: '40%', height:'60%', borderRadius: '0.3rem'}} src="http://res.cloudinary.com/usopen/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,h_720,q_auto,w_1280/v1/us-open/hero/H_T9R9478" alt="shinny"/>
        </div>
        </Jumbotron>

        <Container>
        <Row>
        {UsOpenMerch.map((merch, id) => {
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
