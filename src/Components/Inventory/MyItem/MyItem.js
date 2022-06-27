import { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillXCircleFill } from "react-icons/bs";
import auth from "../../../firebase.init";
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [cars, setCars] = useState([]);
  const array = [];
  //
  const getProducts = (data) => {
    const mainData = data?.productId;
    for (let item of mainData) {
      fetch(`http://localhost:5000/inventories/${item}`)
        .then((res) => res.json())
        .then((newdata) => array.push(newdata));
    }
    console.log([...new Set(array)]);
  };

  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/userInventory?email=${email}`)
      .then((res) => res.json())
      .then((data) => getProducts(data[0]));
  }, [user.email]);

  const handleRemove = (id) => {
    console.log(id);
  };
  // console.log(array);
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

        <tbody key={cars._id}>
          <tr>
            <td>{0 + 1}</td>
            <td>{cars.name}</td>
            <td>{cars.price}</td>
            <td>{cars.quantity}</td>
            <td>{cars.supllierName}</td>
            <td>
              <Button
                variant="danger"
                className="d-flex align-items-center justif-content-center"
                onClick={() => handleRemove(cars._id)}
              >
                <BsFillXCircleFill />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
};

export default MyItem;
