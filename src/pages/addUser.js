import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setName(e.target.value);
    }
  };

  const ajoutUser = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(password);

    try {
      let response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password,
        }),
      });
      let responsedata = await response.json();
      console.log(responsedata);
      if (!response.ok) {
        throw new Error(responsedata.message);
      }
    } catch (err) {
      setError(err.message || "il y a un probleme");
    }
  };

  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                onChange={onChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={ajoutUser}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default AddUser;
