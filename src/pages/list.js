import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const List = () => {
  const [list, setList] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/`);

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setList(responseData.existingUser);
      } catch (err) {}
    };
    sendRequest();
  }, []);
  console.log(list);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        {list &&
          list.map((l, key) => (
            <tbody>
              <tr>
                <td>{key}</td>
                <td>{l._id}</td>
                <td>{l.name}</td>
                <td>{l.email}</td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
};

export default List;
