import React from 'react';
import '../styles/App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Contact extends React.Component {
  render() {
    return (
        <div className="container">
            <Form style={{backgroundColor:'white', padding:'10px', marginTop:'10px', borderRadius:'0.3rem'}}>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input type="text" name="name" id="examplePassword" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Leave a comment</Label>
              <Input type="textarea" name="text" id="exampleText" placeholder="Comment..."/>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Subscribe to our newsletter</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Yes, I want to subscribe to the newsletter
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Do not subscribe me to your newsletter
                </Label>
              </FormGroup>
            </FormGroup>
            <Link to="/thankyou"><Button color="danger">Submit</Button></Link>
          </Form>
      </div>
    );
  }
}
