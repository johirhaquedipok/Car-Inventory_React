import { useCallback, useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillXCircleFill } from "react-icons/bs";
import auth from "../../../firebase.init";
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [cars, setCars] = useState([]);
  const email = user?.email;
  //
  const getProducts = useCallback((data) => {
    const mainData = data?.productId;

    fetch(`http://localhost:5000/productids`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mainData),
    })
      .then((res) => res.json())
      .then((newData) => setCars(newData));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/userInventory?email=${email}`)
      .then((res) => res.json())
      .then((data) => getProducts(data[0]));
  }, [email, getProducts]);

  const handleRemove = (id) => {
    const sure = window.confirm("Are you sure!");

    if (sure) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = cars.filter((car) => car._id !== id);
          setCars(remaining);
        });
    }
  };
  return (
    <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Car Name</th>
            <th>Car Price</th>
            <th>Car Quantity</th>
            <th>Car Supplier</th>
            <th>Remove</th>
          </tr>
        </thead>

        {cars.map((car, idx) => (
          <tbody key={car._id}>
            <tr>
              <td>{idx + 1}</td>
              <td>{car?.name}</td>
              <td>{car?.price}</td>
              <td>{car?.quantity}</td>
              <td>{car?.supllierName}</td>
              <td>
                <Button
                  variant="danger"
                  className="d-flex align-items-center justif-content-center"
                  onClick={() => handleRemove(car?._id)}
                >
                  <BsFillXCircleFill />
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Row>
  );
};

export default MyItem;
