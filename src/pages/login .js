import React, { useContext } from "react";
import { Container, Row, Col, Form , Button } from "react-bootstrap";
import {AuthContext} from '../context/auth'
const Login = () => {
    const auth = useContext(AuthContext)
    const login = (e)=>{
        e.preventDefault()
        auth.login()
    }


  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
               {auth.isLoggedIn ? <h3>We'll never share your email with anyone else.</h3> : <h3>hi</h3> } 
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={login}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default Login;
