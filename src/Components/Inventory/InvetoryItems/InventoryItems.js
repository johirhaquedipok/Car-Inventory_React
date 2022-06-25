import { Card, Col } from "react-bootstrap";

const InventoryItems = ({ car }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={car.img} alt={car.name} />
        <Card.Body>
          <Card.Title>{car.name}</Card.Title>
          <Card.Text>{car.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItems;
