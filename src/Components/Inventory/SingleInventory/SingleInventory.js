import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const SingleInventory = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(0);
  const [supllierName, setSupllierName] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDecription] = useState("");

  useEffect(() => {
    getNewCar(id);
  }, [id]);

  const getNewCar = (id) => {
    fetch(`http://localhost:5000/inventories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuantity(data?.quantity);
        setSupllierName(data?.supllierName);
        setImg(data?.img);
        setName(data?.name);
        setPrice(data?.price);
        setDecription(data?.description);
      });
  };

  const updateNewCar = (newQty) => {
    let newData = {
      quantity: newQty,
      supllierName,
      img,
      name,
      price,
      description,
    };

    fetch(`http://localhost:5000/inventories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        getNewCar(id);
      });
  };

  const handleDeleteQty = () => {
    const newQty = quantity - 1;
    updateNewCar(newQty);
  };

  const handleAddQty = (e) => {
    e.preventDefault();
    let number = parseInt(e.target.inputNumber.value);

    if (number > 0) {
      const newQty = parseInt(quantity) + number;
      updateNewCar(newQty);
    }
    e.target.reset();
  };
  return (
    <Row>
      <Col>
        <Card className="h-100 border-0">
          <Card.Img variant="top" src={img} alt={name} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className="d-md-flex align-md-items-center justify-content-md-between">
              <div>
                <Card.Text>${price}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Supplier: {supllierName}</Card.Text>
              </div>
              <div>
                <Button
                  variant="danger"
                  className="mb-3 mt-sm-3"
                  onClick={handleDeleteQty}
                >
                  Delivered
                </Button>
                <Card.Text>Qty: {quantity}</Card.Text>
                <div>
                  <Card.Text>Input Some quantity</Card.Text>

                  <Form onSubmit={handleAddQty}>
                    <Form.Control
                      className="w-md-50 mb-2"
                      size="sm"
                      type="number"
                      min="0"
                      name="inputNumber"
                      placeholder="type qty"
                    />
                    <Button type="submit">Add Qty</Button>
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
