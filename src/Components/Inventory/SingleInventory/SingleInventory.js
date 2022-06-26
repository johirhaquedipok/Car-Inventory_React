import { useEffect, useState, useRef } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const SingleInventory = () => {
  const { id } = useParams();
  const increaseValue = useRef(0);
  const [car, setCar] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/inventories/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  const handleDeleteQty = (e) => {
    e.preventDefault();
    setCar((precar) => ({
      ...precar,
      quantity: precar.quantity - 1,
    }));
  };
  const handleAddQty = (e) => {
    e.preventDefault();
    const qtyValue = increaseValue.current.value;
    if (qtyValue > 0) {
      setCar((precar) => ({
        ...precar,
        quantity: precar.quantity + parseInt(qtyValue),
      }));
    }
  };
  return (
    <Row>
      <Col>
        <Card className="h-100 border-0">
          <Card.Img variant="top" src={car.img} alt={car.name} />
          <Card.Body>
            <Card.Title>{car.name}</Card.Title>
            <div className="d-md-flex align-md-items-center justify-content-md-between">
              <div>
                <Card.Text>${car.price}</Card.Text>
                <Card.Text>{car.description}</Card.Text>
                <Card.Text>Supplier: {car.supllierName}</Card.Text>
              </div>
              <div>
                <Button
                  variant="danger"
                  className="mb-3 mt-sm-3"
                  onClick={handleDeleteQty}
                  disabled={car.quantity > 0 ? false : true}
                >
                  Delivered
                </Button>
                <Card.Text>Qty: {car.quantity}</Card.Text>
                <div>
                  <Card.Text>Input Some quantity</Card.Text>
                  <Form onClick={handleAddQty}>
                    <Form.Control
                      className="w-md-50 mb-2"
                      size="sm"
                      type="number"
                      min="0"
                      ref={increaseValue}
                      placeholder="type qty"
                    />
                    <Button>Add Qty</Button>
                  </Form>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Button as={Link} to="/managein">
        Manage Inventory
      </Button>
    </Row>
  );
};

export default SingleInventory;
