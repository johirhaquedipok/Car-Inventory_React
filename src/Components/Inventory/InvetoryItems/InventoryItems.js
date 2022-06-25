import { Card, Col } from "react-bootstrap";

const InventoryItems = ({ car }) => {
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={car.img} alt={car.name} />
        <Card.Body>
          <Card.Title>{car.name}</Card.Title>
          <div className="d-md-flex align-md-items-center justify-content-md-between">
            <Card.Text>${car.price}</Card.Text>
            <Card.Text>Qty: {car.quantity}</Card.Text>
          </div>
          <Card.Text>{car.description}</Card.Text>
          <Card.Text>{car.supllierName}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItems;
