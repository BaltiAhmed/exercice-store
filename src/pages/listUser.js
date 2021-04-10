import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ListUser = () => {
  const [users, setUsers] = useState();
  const [error, seterror] = useState(null);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/`);

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setUsers(responseData.existingUser);
      } catch (err) {
        seterror(err.message);
      }
    };
    sendRequest();
  }, []);

  console.log(users);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {users &&
          users.map((user, key) => (
            <tbody>
              <tr>
                <td>{key}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
};

export default ListUser;
