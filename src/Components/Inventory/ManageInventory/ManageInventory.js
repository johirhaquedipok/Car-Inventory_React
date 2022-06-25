import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import InventoryItems from "../InvetoryItems/InventoryItems";
const ManageInventory = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inventories`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <Row xs={1} md={3} lg={3} className="g-4">
      {cars.map((car) => (
        <InventoryItems key={car._id} car={car} />
      ))}
    </Row>
  );
};

export default ManageInventory;
