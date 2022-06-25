import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const InventoryItems = ({ car }) => {
  const navigate = useNavigate();

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
          <Card.Text>Supplier: {car.supllierName}</Card.Text>
          <Button
            className="w-100"
            onClick={() => navigate(`/inventory/${car._id}`)}
          >
            Stock Update
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItems;
