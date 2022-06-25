import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
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
      <Row xs={1} md={3} lg={3} className="g-4">
        {cars.map((car) => (
          <InventoryItems key={car._id} car={car} />
        ))}
      </Row>
      <Button
        as={Link}
        to="/managein"
        className="text-center my-4"
        variant="info"
      >
        Manage Inventory
      </Button>
    </>
  );
};

export default Inventory;
