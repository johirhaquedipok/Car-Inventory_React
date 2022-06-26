import { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { BsFillXCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ManageInventory = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inventories`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const handleRemove = (id) => {
    const sure = window.confirm("Are you sure!");
    if (sure) {
      const oldCar = [...cars];
      const newCar = oldCar.filter((item) => item._id !== id);

      setCars(newCar);
    }
  };
  return (
    <Row xs={1} md={3} lg={3} className="g-4">
      <Button as={Link} to="/addin">
        Add New Item
      </Button>

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
              <td>{car.name}</td>
              <td>{car.price}</td>
              <td>{car.quantity}</td>
              <td>{car.supllierName}</td>
              <td>
                <Button
                  variant="danger"
                  className="d-flex align-items-center justif-content-center"
                  onClick={() => handleRemove(car._id)}
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

export default ManageInventory;
