import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Ajout = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success,setSuccess]=useState()

  const onchange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const SubmitHundler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      let responseData = await response.json();
      if (!response.ok) {
        setSuccess(responseData.message)

        throw new Error(responseData.message);
      }

      setSuccess('ajout validée')
      


    } catch (err) {

    }
  };

  console.log(name, email, password);

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            onChange={onchange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={onchange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password  "
            onChange={onchange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={SubmitHundler}>
          Submit
        </Button>
      </Form>
      {success && <h2>{success}</h2>}
    </div>
  );
};

export default Ajout;
