import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InventoryItems from "./InvetoryItems/InventoryItems";

const Inventory = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inventory?size=${6}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <>
      <div className="text-center my-4">
        <h2>Our Services</h2>
        <div className=" d-flex align-items-cetner justify-content-center">
          <div
            className="bg-dark mb-3"
            style={{ height: "5px", width: "80px", borderRadius: "10px" }}
          ></div>
        </div>
        <p className=" mb-md-5 mb-m">
          Highest quality service and make you feel comfortable in our capable
          hands.
        </p>
      </div>

      <Row xs={1} md={3} lg={3} className="g-4">
        {cars.map((car) => (
          <InventoryItems key={car._id} car={car} />
        ))}
      </Row>
      <Row className=" my-md-4 my-2">
        <Col md={6}>
          <div className=" my-4">
            <h2>All Our Products</h2>
            <div>
              <div
                className="bg-dark mb-3"
                style={{ height: "5px", width: "80px", borderRadius: "10px" }}
              ></div>
            </div>
            <p className=" mb-md-5 mb-m">
              Discover all your dreams from our big load of inventory
            </p>
          </div>
        </Col>
        <Col
          md={6}
          className="text-center align-self-center align-items-center bg-light"
        >
          <div className="my-4">
            <p className="  mb-2">Manage All Inventory from here</p>
            <Button
              as={Link}
              to="/managein"
              className="text-center my-2"
              variant="warning"
            >
              Manage Inventory
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Inventory;
